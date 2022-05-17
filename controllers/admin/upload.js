const multer = require("multer");
const uuid = require("uuid").v4;

exports.image = (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${uuid()}${file.originalname}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg") cb(null, true);
    else cb("تنها پسوند JPEG پشتیبانی میشود", false);
  };

  const upload = multer({
    limits: { fileSize: 4000000 },
    dest: "uploads/",
    storage,
    fileFilter,
  }).single("image");

  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.send("عکسی انتخاب نشده.");
    } else {
      res.status(200).send("آپلود عکس موفقیت آمیز بود");
    }
  });
};
