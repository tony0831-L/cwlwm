const axios =require("axios")

async function getRes(){
    let res =  await axios.get('https://cwslbot.herokuapp.com/res/test');
    return res
}

async function getUser(){
    let res =  await axios.get('https://cwslbot.herokuapp.com/user/test').data;
    return res
}

module.exports = {
    getRes,getUser
}