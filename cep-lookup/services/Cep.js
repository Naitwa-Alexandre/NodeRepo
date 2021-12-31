const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAdressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cep)) {
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

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepExists = await Cep.findAdressByCep(cep);

  if (cepExists) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  return Cep.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  findAdressByCep,
  create,
}