const jwt = require("jsonwebtoken");
const tokenPassword = require("../config/app_back.config.js")


exports.generate_token = (user) => {
  try{
    const token = jwt.sign(
      {
        id:user.id,
        correo: user.correo,
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
        correo: user.correo,
        rol: user.rol
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