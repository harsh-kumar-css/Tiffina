const item = require("./itemModel");

exports.addItem = async (req, res, next) => {
  try {
    const newItem = await item.create(req.body);

    res.status(200).json({
      status: "1",
      message: "item added successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: "2",
      message: "invalid data",
    });
  }
  next();
};

exports.list = async (req, res, next) => {
  try {
    const items = await item.find();

    res.status(200).json({
      status: "1",
      items,
    });
  } catch (err) {
    res.status(400).json({
      status: "2",
      message: "failed to load data",
    });
  }

  next();
};
