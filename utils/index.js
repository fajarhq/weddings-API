function upsert(values, condition, Model) {
  return Model.findOne({ where: condition }).then(function (obj) {
    // update
    if (obj) return obj.update(values);
    // insert
    return Model.create(values);
  });
}
module.exports = {
  upsert,
};
