/*
Arthur Tavares
*/
// Inicializar o Bot
let VowTelegramBot = require('vow-telegram-bot');


bot = new VowTelegramBot({
  token: 'your-token',
  polling: {
    timeout: 500,
    limit: 100
  }
});


//Work Here >>>
let now = new Date();
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; //dias na semana
let today = days[ now.getDay() ]; //pega a data de hoje

//var date = new Date();
let minute = now.getMinutes();
let hour = now.getHours();
let theTime = '';//[hour,minute].join(":"); //soma os dois e bota ':' entre eles

minute--;//diminuo por um pois na function starter ele ja começa adicionando um
//<<<
let messaginADMIN=''; // ID DO RESPONSAVEL
let messagin = ''; //ID PRINCIPAL

let nRem = '';
let nameM = '';
let dayer = '';
let timer = '';
let dayer2 = '';
let timer2= '';
let nameM2 = '';
let nRem2 = '';


let dayer3 = '';
let timer3= '';
let nameM3 = '';
let nRem3 = '';
let trueDayer3 = '';
let tes3 = '';
let te3 = '';

let dayer4 = '';
let timer4= '';
let nameM4 = '';
let nRem4 = '';
let trueDayer4 = '';
let tes4 = '';
let te4 = '';

let trueDayer = '';
let trueTimer ='';
let trueDayer2 = '';

let tes2 = '';
let te2 = '';
let tes = '';
let te ='';

let x = now.getDay(); //avançador de dias

//============================================
//Inicializa o Firebase
let firebase = require('firebase');
let config = {
  apiKey: 'your-api',
  authDomain: 'your-auth',
  databaseURL: 'your-URL',
  storageBucket: '',
};
firebase.initializeApp(config);
let ref = firebase.database().ref().child('user/MAINuser'); //entra na pasta principal do save
let ref1 = firebase.database().ref().child('user/MAINuser/1');
let ref2 = firebase.database().ref().child('user/MAINuser/2');
let ref3 = firebase.database().ref().child('user/MAINuser/3');
let ref4 = firebase.database().ref().child('user/MAINuser/4');

//Entra nos childs (nos 3 principais) e pegam os seus valores
ref.child('chat_id').on('value',function (snapshot){
  messagin = snapshot.val();
});
ref.child('chat_id2').on('value',function (snapshot){
  messaginADMIN = snapshot.val();
});



ref1.child('days').on('value',function (snapshot){
  if(snapshot.val() === 'Todos'){
    dayer = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat';
  }
  else{
    dayer = snapshot.val();
  }

});

ref1.child('name').on('value',function (snapshot){
  nameM = snapshot.val();
});

ref1.child('numrem').on('value',function (snapshot){
  nRem = snapshot.val();
});

ref1.child('time').on('value',function (snapshot){ // HORARIO
  timer = snapshot.val();
  if (timer.length > 6){
    te = timer.split(','); //preparo para receber na function starte, separando e ordenando
    te.sort(); //ordernar por horario
  }
  else{
    te = timer;
  }

  //starter();
});



ref2.child('name').on('value',function (snapshot){
  nameM2 = snapshot.val();
});

ref2.child('numrem').on('value',function (snapshot){
  nRem2 = snapshot.val();
});

ref2.child('days').on('value',function (snapshot){
  if(snapshot.val() === 'Todos'){
    dayer2 = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat';
  }
  else{
    dayer2 = snapshot.val();
  }

});

ref2.child('time').on('value',function (snapshot){ // HORARIO

  timer2 = snapshot.val();
  if (timer2.length > 6){
    te2 = timer.split(','); //preparo para receber na function starte, separando e ordenando
    te2.sort(); //ordernar por horario
  }
  else{
    te2 = timer2;
  }
  //console.log(te2);

});

// 3
ref3.child('name').on('value',function (snapshot){
  nameM3 = snapshot.val();
});

ref3.child('numrem').on('value',function (snapshot){
  nRem3 = snapshot.val();
});

ref3.child('days').on('value',function (snapshot){
  if(snapshot.val() === 'Todos'){
    dayer3 = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat';
  }
  else{
    dayer3 = snapshot.val();
  }

});

ref3.child('time').on('value',function (snapshot){ // HORARIO

  timer3 = snapshot.val();
  if (timer3.length > 6){
    te3 = timer.split(','); //preparo para receber na function starte, separando e ordenando
    te3.sort(); //ordernar por horario
  }
  else{
    te3 = timer3;
  }
  //console.log(te2);

});

// 4
ref4.child('name').on('value',function (snapshot){
  nameM4 = snapshot.val();
});

ref4.child('numrem').on('value',function (snapshot){
  nRem4 = snapshot.val();
});

ref4.child('days').on('value',function (snapshot){
  if(snapshot.val() === 'Todos'){
    dayer4 = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat';
  }
  else{
    dayer4 = snapshot.val();
  }

});

ref4.child('time').on('value',function (snapshot){ // HORARIO

  timer4 = snapshot.val();
  if (timer4.length > 6){
    te4 = timer.split(','); //preparo para receber na function starte, separando e ordenando
    te4.sort(); //ordernar por horario
  }
  else{
    te4 = timer4;
  }
  //console.log(te2);
  starter();
});

//========================================================
//AutoMessage
let request = require('request');

let info = new Object();


function enviaMensagem(boxinf){
  info.url = 'https://api.telegram.org/bot';
  info.token = 'your-token';
  info.comandoUpdate = '/getUpdates';
  info.comandoSendMessage = '/sendMessage';
  info.comandoOffset = '?offset=';
  info.offset = '';
  info.update_id = '';
  info.chat_id = messagin; //Chat id from the Firebase
  info.mensagem = 'It\'s Time For Your Medicine!\nOpen '+boxinf; //Should be Custom


  let options = {
    method: 'POST',
    url: info.url+ info.token + info.comandoSendMessage,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    formData: {
      text: info.mensagem,
      chat_id: info.chat_id
    }
  };
  
  request(options, function(error, response,body){
    //console.log(body);
    if(!error){
      //callback(info); //no sense --> callback study
      //console.log('Something');
    }
  });
}



//=================================================================
//function checadora, deve ser function pois se nao ele vai rodar antes que eu possa checar o firebase
function starter(){
  //if (trueDayer != "") {
  //colocar um while para esperar chegar o dia e assim realmente tocar alarme
  //minute = now.getMinutes(); // atualiza a hora
  //hour = now.getHours();

  //Simula o passar dos minutos ja que nao consigo pegar o horario certo a todo minuto
  if(minute==59){
    minute = 0;
    if(hour == 23){
      hour = 0;
      //adiciona mais um dia
      x++;

      if(x>6){
        x=0;
      }
      today = days[x];
      /*
      if(typeof today == "undefined"){ //se passar de sabado today vira undefined ai volta pro começp
        today = days[0+x]
      }
      */

    }
    else{
      hour++;
    }
  }
  else{
    minute++;
  }
  sHour = String(hour);
  sMinute = String(minute);

  if(hour<10){ //deixa no formato certo de hora 00:00
    sHour = '0'+sHour.substring(0);
  }
  if(minute<10){
    sMinute = '0'+sMinute.substring(0);
  }
  theTime = [sHour,sMinute].join(':'); //junta as duas strings






  if (dayer.length > 3){

    tes = dayer.split(',');
    //Loop em for para checar todos os termos
    for (i = 0; i < tes.length; i++) {
      if(tes[i]==today){ // se um dos termos for HOJE ele entra e PARA!
        trueDayer = tes[i];
        //console.log("ETTTTA");
        break;
      }
      else{ //se nao for ele olha o proximo
        continue;
      }
    }

  }
  //se so for um dia ele bota na variavel normal mesmo
  else{
    trueDayer = dayer;
  }

  if (dayer2.length > 3){

    tes2 = dayer2.split(',');
    //Loop em for para checar todos os termos
    for (i = 0; i < tes2.length; i++) {
      if(tes2[i]==today){ // se um dos termos for HOJE ele entra e PARA!
        trueDayer2 = tes2[i];
        //console.log("ETTTTA");
        break;
      }
      else{ //se nao for ele olha o proximo
        continue;
      }
    }

  }
  //se so for um dia ele bota na variavel normal mesmo
  else{
    trueDayer2 = dayer2;
  }

  if (dayer3.length > 3){

    tes3 = dayer3.split(',');
    //Loop em for para checar todos os termos
    for (i = 0; i < tes3.length; i++) {
      if(tes3[i]==today){ // se um dos termos for HOJE ele entra e PARA!
        trueDayer3 = tes3[i];
        //console.log("ETTTTA");
        break;
      }
      else{ //se nao for ele olha o proximo
        continue;
      }
    }

  }
  //se so for um dia ele bota na variavel normal mesmo
  else{
    trueDayer3 = dayer3;
  }

  if (dayer4.length > 3){

    tes4 = dayer4.split(',');
    //Loop em for para checar todos os termos
    for (i = 0; i < tes4.length; i++) {
      if(tes4[i]==today){ // se um dos termos for HOJE ele entra e PARA!
        trueDayer4 = tes4[i];
        //console.log("ETTTTA");
        break;
      }
      else{ //se nao for ele olha o proximo
        continue;
      }
    }

  }
  //se so for um dia ele bota na variavel normal mesmo
  else{
    trueDayer4 = dayer4;
  }


  console.log(trueDayer+'\n'+theTime+'\n'+today); //teste  <<<<<<<<<<<<<<<<


  if (trueDayer==today ){
    //entrou no dia, colocar um while para entao esperar o horario e assim realmente tocar alarme
    //colocar um if para ver o primeiro alarme



    //hoje tem remedio entao falta checar o horario
    /*  OBSERVAÇÃO: String(theTime)==trueTimer porque COMO  A MAQUINA VAI CHECAR TODO MINUTO ENTAO NAO VAI DEIXAR PASSAR e assim -->
        --> NAO REPETIRA O MESMO ALARME INFINITAMENTE
        Antes como tava: String(theTime)>trueTimer
      */

    if (typeof te === 'object'){ //caso tenha mais de um horario ele eh do tipo object, entao se for do tipo object tem mais de um horario
      for (i = 0; i < te.length; i++) {
        //se ja passou da hora do remedio

        if(te[i]==theTime){

          enviaMensagem(' Box 1');
          minusMed('1');
          //COMO SERIA COM A GALILEO:
          //COMANDO ACENDER LED (respectivo a porta)
          //WHILE(porta fechada)
          //if(passou 5 minutos do alarme)
          //enviar mais uma mensagem. PS.: ENVIAR UMA SEGUNDA MENSAGEM PARA A OUTRA PESSOA
          //COMANDO DESLIGAR LED (pois a porta foi aberta assim quebrando o while)
        }
        else{

          continue;
        }
      }
    }
    else {

      if(te ==theTime){

        //COMO SERIA COM A GALILEO:
        // CHAMA FUNCTION QUE TRATA DE TUDO!

        enviaMensagem(' Box 1');
        minusMed('1');
      }
    }


  }

  // CAIXA 2
  if (trueDayer2==today ){

    if (typeof te2 === 'object'){ //caso tenha mais de um horario ele eh do tipo object, entao se for do tipo object tem mais de um horario
      for (i = 0; i < te2.length; i++) {
        //se ja passou da hora do remedio

        if(te2[i]==theTime){

          enviaMensagem(' Box 2');
          minusMed('2');
          //COMO SERIA COM A GALILEO:
          //COMANDO ACENDER LED (respectivo a porta)
          //WHILE(porta fechada)
          //if(passou 5 minutos do alarme)
          //enviar mais uma mensagem. PS.: ENVIAR UMA SEGUNDA MENSAGEM PARA A OUTRA PESSOA
          //COMANDO DESLIGAR LED (pois a porta foi aberta assim quebrando o while)
        }
        else{

          continue;
        }
      }
    }
    else {

      if(te2 ==theTime){

        //COMO SERIA COM A GALILEO:
        //CHAMA FUNCTION QUE TRATA DE TUDO

        enviaMensagem(' Box 2');
        minusMed('2');
      }
    }

  }

  // CAIXA 3
  if (trueDayer3==today ){

    if (typeof te3 === 'object'){ //caso tenha mais de um horario ele eh do tipo object, entao se for do tipo object tem mais de um horario
      for (i = 0; i < te3.length; i++) {
        //se ja passou da hora do remedio

        if(te3[i]==theTime){

          enviaMensagem(' Box 3');
          minusMed('3');
          //COMO SERIA COM A GALILEO:
          //COMANDO ACENDER LED (respectivo a porta)
          //WHILE(porta fechada)
          //if(passou 5 minutos do alarme)
          //enviar mais uma mensagem. PS.: ENVIAR UMA SEGUNDA MENSAGEM PARA A OUTRA PESSOA
          //COMANDO DESLIGAR LED (pois a porta foi aberta assim quebrando o while)
        }
        else{

          continue;
        }
      }
    }
    else {

      if(te3 ==theTime){

        //COMO SERIA COM A GALILEO:
        //CHAMA FUNCTION QUE TRATA DE TUDO

        enviaMensagem(' Box 3');
        minusMed('3');
      }
    }

  }

  // CAIXA 4
  if (trueDayer4==today ){

    if (typeof te4 === 'object'){ //caso tenha mais de um horario ele eh do tipo object, entao se for do tipo object tem mais de um horario

      for (i = 0; i < te4.length; i++) {
        //se ja passou da hora do remedio
        console.log(te4[i]);
        if(te4[i]==theTime){
          console.log('teste');
          enviaMensagem(' Box 4');
          minusMed('4');
          //COMO SERIA COM A GALILEO:
          //COMANDO ACENDER LED (respectivo a porta)
          //WHILE(porta fechada)
          //if(passou 5 minutos do alarme)
          //enviar mais uma mensagem. PS.: ENVIAR UMA SEGUNDA MENSAGEM PARA A OUTRA PESSOA
          //COMANDO DESLIGAR LED (pois a porta foi aberta assim quebrando o while)
        }
        else{

          continue;
        }
      }
    }
    else {

      if(te4 ==theTime){

        //COMO SERIA COM A GALILEO:
        //CHAMA FUNCTION QUE TRATA DE TUDO

        enviaMensagem(' Box 4');
        minusMed('4');
      }
    }

  }

  else{
    //enviaMensagem();

  }
  setTimeout(starter, 30); //roda a function a cada 60 segundos, ou seja checara a hora a cada 60 segundos



  /*}
  else{
    console.log("EVEN WORSE FAILURE!!!!!!!!");
  }*/
  //setTimeout(starter, 60000); //60secs   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Atualizar para poder checar o horario (pode ser de 5 em 5 minutos ou de minuto em minuto)

}

function minusMed (nbox){

  if(nbox == '1'){
    ref1.update({
      numrem: nRem - 1
    });
  }
  else if (nbox == '2'){
    ref2.update({
      numrem: nRem2 - 1
    });
  }
  else if (nbox == '3'){
    ref3.update({
      numrem: nRem3 - 1
    });
  }
  else if (nbox == '4'){
    ref4.update({
      numrem: nRem4 - 1
    });
  }


}

function ledDealer(nLed){

  //var mraa = require('mraa'); //require mraa


  if(nLed=='1'){
    //CODIGO CONEXAO GALILEO

    //CHAMAR FUNCTION TRATADORA DA PORTA 1
    //ACENDER LED
    //var myDigitalPin6 = new mraa.Gpio(6); //setup digital read on Digital pin #6 (D6) ----> DA PORTA 1
    //myDigitalPin6.dir(mraa.DIR_IN); //set the gpio direction to input =-> PORTA 1

    //var startGaTime = new Date(); //pega a hora de quando entra a primeira vez, para poder comparar
    //startGaTime.setMinutes(startGaTime.getMinutes()+5); //seta os minutos para serem daqui a 5 minutos ou seja , poder comparar para quanod chegar a 5 minutos
    //var theTimeGaS = startGaTime.getHours() + ":" +startGaTime.getMinutes(); //soma os dois e bota ':' entre eles


    //var nowGa = new Date();//pega a hora e se tiver passado 5 minutos ele manda msg
    function checkerFunc (){
      //var myDigitalValue =  myDigitalPin6.read(); -----> PEGA O VALOR DO DIGITAL PIN ---> NO CASO DA PORTA

      /* LED STUFF
        var myOnboardLed = new mraa.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Intel Galileo Gen2 as well as Intel Edison)
        myOnboardLed.dir(mraa.DIR_OUT); //set the gpio direction to output
        var ledState = true; //Boolean to hold the state of Led

         ----- ACENDE ELE
        myOnboardLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)

      */


      /*if(porta fechada){

        var nowTimeGa = nowGa.getHours() + ":"+ nowGa.getMinutes();
        if (theTimeGaS == nowTimeGa){
          //ENVIAR MENSAGEM PARA RESPONSAVEL!!!!!!!
        }
      }*/
      /*else if(porta aberta){
        //APAGAR O LED!!!!!!!!!!
        ledState = false; //invert the ledState

        //TIRAR UM REMEDIO DO BANCO DE DADOS (diminuir por 1 o numero de remedios que faltam)

        clearInterval(tiktak); //parar a checagem de abrir a porta
      }*/
    }
    let tiktak = setTimeout(checkerFunc,1000); // lança funcão pra checar a porta, apos 1 segundo para poder pegar quando o usuario abrir

  }
}


//======================================
//Action do Bot em Resposta ao Usuario
//WORK HERE
let tg = require('telegram-node-bot')('your-token');


tg.router.
  when(['Check'], 'PingController');

tg.router.
  when(['info'], 'PingController');

tg.controller('PingController', ($) => {

  /*tg.for('Check', () => {
        //$.sendMessage('')
        starter();
    })*/ // SEM UTILIDADE!

  tg.for('info', () => {
    $.sendMessage('-------Information about A.M.E.M.O Bot-------'+'\nYour ID:'+messagin+'\nResponsible ID:'+messaginADMIN
        +'\n     ----BOX 1----'
        +'\nName of the Medicine:'+nameM+'\nThere are '+nRem+' Medicines Left in the Box 1'+'\nDays of the medicine:'+dayer+'\nTime of the medicine:'+timer
        +'\n     ----BOX 2----'
        +'\nName of the Medicine:'+nameM2+'\nThere are '+nRem2+' Medicines Left in the Box 2'+'\nDays of the medicine:'+dayer2+'\nTime of the medicine:'+timer2
        +'\n     ----BOX 3----'
        +'\nName of the Medicine:'+nameM3+'\nThere are '+nRem3+' Medicines Left in the Box 3'+'\nDays of the medicine:'+dayer3+'\nTime of the medicine:'+timer3
        +'\n     ----BOX 4----'
        +'\nName of the Medicine:'+nameM4+'\nThere are '+nRem4+' Medicines Left in the Box 4'+'\nDays of the medicine:'+dayer4+'\nTime of the medicine:'+timer4);
  });
});
