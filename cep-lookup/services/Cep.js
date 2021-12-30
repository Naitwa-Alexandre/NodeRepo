const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAdressByCep = async (searchedCep) => {
  if (CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP invalido',
      },
    };
  }

  const cep = await Cep.findAdressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP nao encontrado',
      },
    };
  }

  return cep;
}

module.exports = {
  findAdressByCep,
}