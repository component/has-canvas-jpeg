
module.exports = function(){
  var canvas = document.createElement('canvas');
  var jpeg = canvas.toDataURL('image/jpeg');
  var png = canvas.toDataURL('image/png');
  return jpeg != png;
};
