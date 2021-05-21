const User = require("./userModel");

exports.register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({
      status: "1",
      message: "user registered successfully !",
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
    const loggedInUser = await User.find({
      Username: req.body.Username,
      Password: req.body.Password,
    });

    if (loggedInUser.length > 0) {
      res.status(200).json({
        status: "1",
        message: "user loggedin successfully !",
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
    });
  }

  next();
};
