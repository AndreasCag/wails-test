module.exports = {
  getInfo: function (req, res) {
    sails.models.info.find()
      .then(records => {
        if (records.length === 0) {
          return res.apiBadRequest('Can\'t find info');
        }
        res.apiOk(records[0]);
      })
      .catch(err => {
        res.apiBadRequest('Data base doesn\'t work');
      })
  },
  setInfo: function(req,res) {
    console.log(req.allParams());
    res.apiOk({mail:'andreas97fm@mail.ru',telephone:'+79035648067', fullName:'Andreas Anikin Serg'});
  }
};
