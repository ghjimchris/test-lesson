"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axios = _axios["default"].create({});

function Person(_name, _age, _title, _number) {
  return {
    name: _name,
    age: _age,
    title: _title,
    number: _number
  };
}

var Message = function Message(_mgs) {
  var mgs = _mgs;
  var length = _mgs.length;
};

var api = function api() {
  var api_key = '$2b$10$6FAKdwj8R5u8agHOb9KeuO';
  return "https://api.talkgh.com/api/".concat(api_key, "/");
}; // axios.get('https://api.talkgh.com/api/{API-KEY}/?des='+  number +'&sender=' +  sender +  '&mess=' +
//     message).then(r => {
//     console.log(r);
// }).catch(err => {
//     console.log(err);
// });


var sendSMS = function sendSMS(arr) {
  // for (let n of arr) {
  //     axios.get(`${api()}?des=${n.number}&sender=Lesson&mess=this is a test message`)
  //         .then(res =>{
  //             console.log(res);
  //         })
  //         .catch(err =>{
  //             console.log(err);
  //         })
  // }
  arr.forEach(function (item) {
    axios.get("".concat(api(), "?des=").concat(item.number, "&sender=Lesson&mess=this is a test message from Jim Chris")).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
  });
};

var worker = function worker() {
  var arr = [Person("James", 20, 'Prof', '+233205388601'), Person('Emmanuel', 45, 'Teacher', '+233506592851')];
  sendSMS(arr);
};

worker();