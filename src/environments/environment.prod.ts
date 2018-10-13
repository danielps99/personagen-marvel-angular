export const environment = {
  production: true,
  API_URL: 'http://gateway.marvel.com/v1/public/',
  /*
    API_KEYMD5 É O RESULTADO md5() da concatenacao de um inteiro + private key + public key
    ex: md5(1SuaPrivateKeySuaPublicKey)
    referencia: https://developer.marvel.com/documentation/authorization
  */
  API_KEYMD5: ''
};
