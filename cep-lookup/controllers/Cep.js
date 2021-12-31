const rescue = require('express-rescue');
const service = require('../services/Cep');

const findAdressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAdressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = {
  findAdressByCep,
}