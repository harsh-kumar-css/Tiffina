const shopKeeper = require("./shopKeeperModel");

exports.register = async (req, res, next) => {
  try {
    const newShopKeeper = await shopKeeper.create(req.body);

    res.status(200).json({
      status: "1",
      message: "vendor registered successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: "2",
      message: "invalid data",
    });
  }
  next();
};

exports.login = async (req, res, next) => {
  try {
    const loggedInShopKeeper = await shopKeeper.find({
      mobile: req.body.mobile,
      Password: req.body.Password,
    });

    if (loggedInShopKeeper.length > 0) {
      res.status(200).json({
        status: "1",
        message: "vendor loggedIn successfully !",
      });
    } else {
      res.status(400).json({
        status: "2",
        message: "invalid data",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "2",
      message: "invalid data",
      err: { err },
    });
  }

  next();
};
