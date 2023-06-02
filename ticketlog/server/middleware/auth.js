const jwt = require('jsonwebtoken')
const secret = "secretjaaaaaa";

module.exports = function(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({msg: "No token, authorization denied"});
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}