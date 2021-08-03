const { authJwt } = require("../middlewares");
const controller = require("../controllers/service.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/service/all", controller.allServices);

  app.get("/api/service/all/:id", controller.ServicesById);

  app.get("/api/service/user/:id", controller.ServicesByUser);

  

  app.post("/api/service/all" , controller.CreateService);

  app.delete("/api/service/all/:id", controller.DeleteById);

  app.put("/api/service/all/:id" ,controller.UpdateId); 

  // [authJwt.verifyToken]
}