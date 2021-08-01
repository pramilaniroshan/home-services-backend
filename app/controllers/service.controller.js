const express = require('express');
const router = express.Router();

// Load Service model
const Service = require('../models/service.model');


exports.allServices = (req, res) => {
    Service.find()
      .then(s => res.json(s))
      .catch(err => res.status(404).json({ noServicesfound: 'No Services found' }));
  }
  
  exports.ServicesById = (req, res) => {
    console.log(req.params.id)
    Service.findById(req.params.id)
      .then(Service => res.json(Service) )
      .catch(err => res.status(404).json({ noServicefound: 'No Service found' }));
  }

  exports.ServicesByUser = (req, res) => {
    console.log(req.params.id)
    Service.find( {user_id : req.params.id})
      .then(Service => res.json(Service) )
      .catch(err => res.status(404).json({ noServicefound: 'No Service found' }));
  }

  exports.CreateService = (req, res) => {
    Service.create(req.body)
      .then(service => res.json({ msg: 'Service added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Service' }));
  }


  exports.DeleteById =(req, res) => {
    Service.findByIdAndRemove(req.params.id, req.body)
      .then(Service => res.json({ mgs: 'Service entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a Service' }));
  }
  
  
  exports.UpdateId =(req, res) => {
    Service.findByIdAndUpdate(req.params.id, req.body)
      .then(Service => 
         res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        rols: authorities,
        accessToken: token,
        zipcode : user.zipcode,
        facebook : user.facebook,
        mobile : user.mobile,
        skype : user.skype
        
      }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  }