const jwt = require("jsonwebtoken");
const tokenPassword = require("../config/app_back.config.js")


exports.generate_token = (user) => {
  try{
    const token = jwt.sign(
      {
        id:user.id,
        username: user.username,
      },
      tokenPassword.TOKEN_SECRET,
      {
        expiresIn: "24h",
      }
    );
    return token;
  }catch(err){
    next(err);
  }
  
};

exports.generate_login_token = (user) => {
  try{
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role
      },
      tokenPassword.TOKEN_SECRET,
      {
        expiresIn: "24h",
      }
    );
    return token;
  }catch(err){
    next(err);
  }
};