const User = require("../model/user");
const { request } = require("express");
const sendEmail = require("../utils/email.js");
const MyError = require("../utils/myError.js");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");


//User register
exports.register = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const user = await User.create(req.body);
    console.log("res", user);
    const token = user.getJsonWebToken();
    user.password = "chaddiin bol olooroi";

    res.status(200).json({
        success: true,
        user: user,
        token
    })

});

//User login
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Оролтыгоо шалгана

    if (!email || !password) {
        throw new MyError("Имэл болон нууц үйгээ дамжуулна уу", 400);
    }

    // Тухайн хэрэглэгчийн хайна
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new MyError("Имэйл болон нууц үгээ зөв оруулна уу", 401);
    }

    const ok = await user.checkPassword(password);

    if (!ok) {
        throw new MyError("Имэйл болон нууц үгээ зөв оруулна уу", 401);
    }

    const token = user.getJsonWebToken();


    res.status(200).json({
        success: true,
        token,
        user: user
    });
});


//Email send use mailtrap
exports.emailsend = asyncHandler(async (req, res, next) => {
    const { email } = await req.body;

    if (!email) {

        throw new MyError("Та нууц үг сэргээх имэйл хаягаа оруулна уу", 401)
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        throw new MyError("Имэйлтэй хэрэглэгч олдсонгүй", 401)
    }

    const resetToken = user.generatePasswordChangeToken();
    await user.save();
    const link = `https://surgalt.mn/changepassword/${resetToken}`;
    const message = `Сайн байна уу?<br><br>Та нууц үг солих хүсэлт илгээлээ.<br> Та нууц үгээ доорхи линк дээр дарж солино уу:<br><br><a target="_blanks" href="${link}">${link}</a><br><br>Өдрийг сайхан өнгөрүүлээрэй!!!`;



    const info = await sendEmail({
        email: user.email,
        subject: "Нууц үг өөрчлөх хүсэлт",
        message
    });

    // console.log("----email----", email);

    res.status(200).json({
        success: true,
        user: resetToken
    });

});

//resetToken
exports.resetpassword = asyncHandler(async (req, res, next) => {

    if (!req.body.resetToken || !req.body.password) {
        throw new MyError("Та токен болон нууц үгээ дамжуулна уу", 400);
    }

    const encrypted = crypto
        .createHash("sha256")
        .update(req.body.resetToken)
        .digest("hex");

    console.log("---encrypte", encrypted);

    const user = await User.findOne({
        resetPasswordToken: encrypted,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        throw new MyError("Токены хүчинтэй хугацаа дууссан байна!", 400);
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    console.log("userupdateData", user);
    await user.save();

    const token = user.getJsonWebToken();

    res.status(200).json({
        success: true,
        token,
        user: user,
    });
});
