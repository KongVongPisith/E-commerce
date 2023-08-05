require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await decodedToken;
        req.user = user;
        next();
    } catch(err) {
        return res.status(401).json({
            error: "Login to access"
        })
    }
}


const isAdmin = (req, res, next)=> {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. You do not have admin privileges.' });
  }
  next();
}

module.exports = {auth, isAdmin};