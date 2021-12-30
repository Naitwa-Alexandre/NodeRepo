const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const getNewCep = ({ cep, largadouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  largadouro,
  bairro,
  localidade,
  uf
});

const findAdressByCep = (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');

  const query = 'SELECT cep, largadouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;

  return getNewCep(result);
}

module.exports = {
  findAdressByCep,
}