const author = require("../db/models/author");

const authorAdd = async (req, res) => {
  console.log(req.body);

  try {
    // const authors = await author.findOne({ name: req.body.name });
    // if (authors) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "bu isimde kayıt var",
    //   });
    // }

    const authorAdd = new author(req.body);
    
    await authorAdd.save()
      .then(() => {
        return res.status(201).json(authorAdd);
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "kayıt oluştuurlurken hata çıktı:" + err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " kayıt oluşturulamadı ",
    });
  }

  // console.log("authoradd içerisinde");
};

const authorGetAll = async (req, res) => {
  try {
    const authorGetAll = await author.find({});
    return res.status(200).json({
      success: true,
      data: authorGetAll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt getirilemedi",
    });
  }
};

module.exports = {
  authorAdd,
  authorGetAll,
};
