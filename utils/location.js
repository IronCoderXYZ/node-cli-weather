const axios = require('axios');

module.exports = async () => {
  const results = await axios({
    method: 'GET',
    url:
      'https://api.ipdata.co?api-key=f8abb9377bbcd906d786ea40f6d4fbf0fee0a8b1ef6bc52eb059f971'
  });

  const { city, region } = results.data;
  return `${city}, ${region}`;
};
