const multer = require("multer");
const sharp = require("sharp");
const { error } = require("winston");
const uuid = require("uuid").v4;

const { fileFilter, storage } = require("../../utils/multer");
const { get500 } = require("../errors");

exports.image = (req, res) => {
  try {
    const upload = multer({
      limits: { fileSize: 4000000 },
      dest: "uploads/",
      storage,
      fileFilter,
    }).single("image");

    upload(req, res, async (err) => {
      if (err) res.send(err);
      else if (req.file) {
        const fileName = `${uuid()}${req.file.originalname}`;

        await sharp(req.file.path)
          .jpeg({
            quality: 40,
          })
          .toFile(`./public/uploads/${fileName}`)
          .catch((error) => get500(req, res, error));

        res.status(200).send("آپلود عکس موفقیت آمیز بود");
      } else res.send("باید یه عکس انتخاب کنید");
    });
  } catch (error) {
    get500(req, res, error);
  }
};
