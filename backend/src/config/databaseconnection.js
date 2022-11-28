// veri tabanı yolunu yazarız genellikle env dosyası içinde tutarız
const mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
     console.log("connected to database");
 }).catch((err)=>{
          console.log("veritabanına bağlanamadı:"+ err );
          })


// veri tabanı yolunu yazarız genellikle env dosyası içinde tutarız
//  mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
//      useNewUrlParser:true,
//      useUnifiedTopology:true
//  })
//      .then(()=>{
//      console.log("veritabanı başarıyla bağlandı  ");
//      })
//      .catch((err)=>{
//      console.log("veritabanına bağlanamadı:"+ err );
//      })