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
    Service.findById(req.params.id)
      .then(Service => res.json(Service))
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
      .then(Service => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  }