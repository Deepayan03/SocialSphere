import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },
  bio:{
    type: String,
    validate: {
      validator: function(v) {
        const wordCount = v.trim().split(/\s+/).length;
        return wordCount <= 150;
      },
      message: "Bio exceeds the 150-word limit. Please shorten your bio."
    }
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  avatar:{
    public_id:{
      type: String,
      required: true,
    },
    url:{
      type: String,
      required: true,
    }
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});


schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
    console.log("Hashed Password: " + this.password);
  }
  next();
});

schema.methods.getJWTToken = function () {
  const userToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });
  return userToken;
};

schema.methods.comparePassword = async function(password){
  console.log(this.password);
  return await bcryptjs.compare(password, this.password);
};







const User = new mongoose.model("User", schema);

export default User;
