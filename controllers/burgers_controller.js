var express = require('express');
var router = express.Router();

var db = require('../models');

router.get("/", function(req, res) {
    console.log(db.Burger);
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {

    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(
        function(dbPost) {
            res.redirect("/");
        });
});


router.put("/:id", function(req, res) {
    
    db.Burger.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
        res.redirect("/");
    });
});

module.exports = router;
