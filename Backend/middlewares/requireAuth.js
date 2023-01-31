const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ msg: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SEC_KEY);

    req.user = await userModel.findOne({ _id: _id }).select("_id");

    next(); // imp

  } catch (error) {
    console.log(error.message);
    res.json({ msg: "Requrest is not authorized" });
  }
};

module.exports = requireAuth