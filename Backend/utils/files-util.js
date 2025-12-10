export const fileFilter = (req, file, cb) => {
  const isValidFile = ["image/png", "image/jpg", "image/jpeg"].includes(
    file.mimetype
  );
  cb(null, isValidFile);
};

module.exports = fileFilter;
