const { Agent, warrantyCenter, ManufactureFactory } = require('../models');
class partsController{
    async getAllParts(req, res, next) {
      try{
        const MFs = await ManufactureFactory.findAll({raw: true,})
        const agents = await Agent.findAll({raw: true})
        const WCs = await  warrantyCenter.findAll({raw: true})

        const partsAll = [...MFs, ...agents, ...WCs]
        // res.render('parts', {partsAll , isShow: true})
        res.render('parts', {partsAll, MFs, agents, WCs , isShow: true})
      }
      catch(err) {
          res.status(500).send(err)
      }
        
    }
}

module.exports = new partsController()