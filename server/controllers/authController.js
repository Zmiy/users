const login = (req, res) => {
    console.log("Cookies: ", req.cookies);
//    console.log(req.headers.authentication);
    if ((req.body.email === "stav.r.24@gmail.com") && (req.body.password === "1220")) {
        res.status(200);
        res.send({"token":"www"});
    
      } else {
        res.status(401);
        res.end();
      }
}

const forgotPassword = (req, res) =>{
    if (parseInt(req.params.id, 10) === 12) {
        res.send({
            "password": Math.random(),
            "id": req.params.id
        });
    }
}


module.exports = {
    login: login,
    forgotPassword: forgotPassword
}