export const environment = {
  production: true,

  // Configurações do aplicativo.
  appName: 'Ionic Test',
  appSlogan: 'Lorem, ipsum dolor!',

  // Tipo de login. ['redirect' ou 'popup'].
  signInMethod: 'redirect',

  // Coleção de contatos do Firestore.
  contactCollection: 'contacts',

  // Coleção principal do Firebase.
  dbCollection: 'things',

  // Imagem padrão dos documentos.
  dbDefaultImage: 'assets/generic.png',

  // Formatos de imagens permitidas.
  dpImageFormats: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'tiff', 'tif'],

  // Altere estas chaves conforme seu próprio projeto no Firebase.com.
  firebase: {
    apiKey: "AIzaSyB4MwBiY0ZQOuTAEdkenHuhSskWJoVH98Y",
    authDomain: "ionteste-2023-f4d2b.firebaseapp.com",
    projectId: "ionteste-2023-f4d2b",
    storageBucket: "ionteste-2023-f4d2b.appspot.com",
    messagingSenderId: "829772485006",
    appId: "1:829772485006:web:cee2d2b3fcb7ea80d094df",
    measurementId: "G-LRBLQD72RP"
  },
};
