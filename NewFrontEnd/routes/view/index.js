var router = require("express").Router();
var adminRoutes = require("./admin");
var portfolioController = require("../../controllers/portfolio_controller");

// This route renders the homepage
router.get("/", function(req, res) {
  
  portfolioController.projectSelect(function(result){ //call controller, pass callback
    var hbsData = {
      layout: "portfolio-main", //specify which layout to use
      projects: result //bring in array
    }
    res.render("portfolio_home", hbsData); //render template, pass data
  });
});

router.use("/admin", adminRoutes);

module.exports = router;