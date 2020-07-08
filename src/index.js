import Axios from "axios";

const axios = Axios.create({})

function Person(_name, _age, _title, _number) {
    return{
        name: _name,
        age: _age,
        title: _title,
        number: _number,
    }
    
}

const Message = function (_mgs){
    let mgs = _mgs;
    let length = _mgs.length;
}

const api = () => {
    const api_key = '$2b$10$6FAKdwj8R5u8agHOb9KeuO'
    return `https://api.talkgh.com/api/${api_key}/`;
}

const sendSMS =(arr) => {

    arr.forEach(item=>{
        axios.get(`${api()}?des=${item.number}&sender=Lesson&mess=this is a test message from Jim Chris`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    })

}

const worker = () => {
    let arr = [ Person("James", 20, 'Prof', '+233205388601'),
         Person('Emmanuel', 45, 'Teacher', '+233506592851')];
    sendSMS(arr);
}

worker();