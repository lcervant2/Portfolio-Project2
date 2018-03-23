var router = require("express").Router();
var apiRoutes = require("./../../api");

router.get("/", function(req, res) { //if not logged in redirect to login
    res.render("admin_home"); //login
});

router.get("/edit", function(req, res) { //if not logged in redirect to login
    res.render("admin_edit");
});

router.get("/create", function(req, res) { //if not logged in redirect to login
    res.render("admin_create");
});

router.get("/login", function(req, res) {
    res.render("admin_login");
});

module.exports = router;

