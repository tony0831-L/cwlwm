const axios =require("axios")

async function getRes(){
    let res =  await axios.get('https://cwslbot.herokuapp.com/res/test');
    return res
}

async function getUser(){
    let res =  await axios.get('https://cwslbot.herokuapp.com/user/test').data;
    return res
}

async function getUserHis(name){
    let res =  await axios.put('https://cwslbot.herokuapp.com/user/myHistory',{"consumer":name})
    return res
}

module.exports = {
    getRes,getUser,getUserHis
}