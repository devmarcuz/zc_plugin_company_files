const ApiConnection = require("../utils/database.helper");
const API = new ApiConnection("File");


exports.fileUpdate = async (req, res) => {
  try {
  const file = await API.update(req.params.id, req.body);

  if (!file) return res.status(401).json({
      response: {
        status: 401,
        message: "file does not exist",
      }
    });

 return res.status(200).json({
      response: {
        status: 200,
        data: file,
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
}


