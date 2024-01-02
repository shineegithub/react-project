const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt  = require("bcrypt");


const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "user"
    },
    
    name: {
        type: String,
        required: [true, "hereglegchiin neriig oruulna"],
    },


    email: {
        type: String,
        required: [true, "email neriig oruulna"],
    },

    phonenumber: {
        type: String,
        required: [true, "phonenumber  oruulna"],
    },

    password: {
        type: String,
        required: [true, "password  oruulna"],
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
})



UserSchema.methods.getJsonWebToken = function() {
    const token = jwt.sign(
        {
            id: this._id, role:this.role
        },
        process.env.JWT_SECRET,
        {
            
            expiresIn: process.env.JWT_EXPIRESIN
        }
    )
    return token;
}

// password nuutsalj oghod
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

//Generate token
UserSchema.methods.generatePasswordChangeToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 1 * 60 * 1000;

    return resetToken;
};

//Password check 
UserSchema.methods.checkPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};




module.exports = mongoose.model("User", UserSchema);