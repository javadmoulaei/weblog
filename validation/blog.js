const yup = require("yup");

exports.schema = yup.object().shape({
  title: yup
    .string()
    .required("عنوان الزامی می باشد")
    .min(5, "عنوان نباید کمتر از 5 کاراکتر باشد")
    .max(100, "عنوان نباید بیشتر از 100 کاراکتر باشد"),
  body: yup.string().required("محتوا الزامی می باشد"),
  status: yup.mixed().oneOf(["خصوصی", "عمومی"], "وضعیت نامعتبر"),
});
