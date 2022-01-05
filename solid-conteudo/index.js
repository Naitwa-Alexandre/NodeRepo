const { default: axios } = require('axios');

const validateCEP = async () => {
  const cep = '402790-70';


  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  const validate = regexCEP.test(cep);

  let valideCEP;

  if (validate) {
    
  }
}