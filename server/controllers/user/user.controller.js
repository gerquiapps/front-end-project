function signin(req, res) {
    var user = req.body;
    var userModel = new UserModel(user);
    userModel.signin(user, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}

function login(req, res) {
    var user = req.body;
    var userModel = new UserModel(user);
    userModel.login(user, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}

module.exports = { signin, login };