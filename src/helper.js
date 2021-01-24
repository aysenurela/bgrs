const convertDatetoNum = (str) => {
  // Returns number
  return parseInt(str.split("-").join(""))
};

const convertHttps = (str) => {
  return str.slice(0, 4) + 's' + str.slice(4)
};

exports.convertDatetoNum = convertDatetoNum;
exports.convertHttps = convertHttps;
