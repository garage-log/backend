import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
if (!authHeader) return res.status(403).send({message: "No token data...."});

    const token = authHeader && authHeader.split(" ")[1];

    jwt.verify(token, process.env.jwt_secret_key, (err, data) => { // verify ile  token ile şifreyi karsılaştırdı
        if (err) {
            return res.status(403).send({message: "Unauthorized....", error:err});
        }
        next();//bu işin bittiğini next ile belirtiyoruz.
    });
   
};

export default auth;
