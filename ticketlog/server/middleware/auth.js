const jwt = require('jsonwebtoken')
const secret = "secretjaaaaaa";



module.exports = function(req, res, next) {
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token)
    if (!token) {
        return res.status(401).json({msg: "No token, authorization denied"});
    }
    try {
        const decoded = jwt.verify(token, secret);
        // console.log(decoded.userId)
        req.user = decoded;
        // console.log(req.user)


        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}