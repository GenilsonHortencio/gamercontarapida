let img;
function preload() {
  img = loadImage('MenuImagem.png');
  img2= loadImage('Níveis.png');
  img3 = loadImage('fase1.png');
  imgCopia = loadImage('fase1.png');
  imgCreditos= loadImage('cred..png');
  imginstrucoes= loadImage('instrucoes.png');
  imgN2= loadImage('nivel2.png');
  imgC2= loadImage('nivel2.png');
  imgN3= loadImage('nivel3.png');
  imgC3= loadImage('nivel3.png');
}  
var inicio=1;
var inicio2=-60;
var Xpos=233;
var Ypos=370;
var posiçao=1;
var numNeg = "-1";
var numX1="2";
var numPos = "2";
var numX2 = "1";
var Xnum=225;
var XnumMenor=180;
var rJogador=7;
var rCircule=15;
var velocidade=0.7;
var velocidade2=0.3;
var velocidadeJ=0.02;
var Yfundo=0;
var YfundoC=401;
var x = 115;
var y = 105;
var X = 65;
var opcao = 1;
var tela = 0;
var nivel=["Nível 1\n(+  -)","Nível 2\n(+ - ×)","Nível 3 \n(+ - ÷)"];
function setup() {
  createCanvas(400, 399);
}

function draw() {
  image(img,0,0);
  if(tela==0){
     menu();
  }
  if(tela==1){
    jogar();
  }
  if(tela==2){
    instrucoes();
  }  
  if(tela==3){
    creditos();
  }  
  if(tela==4){
    nível1();
  } 
  if(tela==5){
    nível2();
  }
  if(tela==6){
    nível3();
  }
}
function menu() {
  stroke(color('rgb(0,0,255)'));
  fill(color('#fff'));
  triangle(120, 135, 120, 110, 145, 125);
  rect(120,170,25,25);
  ellipse(133, 242, 25, 25);
  
  noFill();
  stroke(51)
  rect(106,95,188,207);
  
  
  textSize(22);
  textStyle(BOLDITALIC);
  fill(color('#fff'));
  stroke(51);
  text("   Conta Rápida"+"\nMENU PRINCIPAL",106,66);
  
  textSize(18);
  textStyle(NORMAL);
  fill(color('rgb(0,0,255)'));
  stroke(51);
  text("JOGAR",155,130);
  
  textSize(18);
  textStyle(NORMAL);
  fill(color('rgb(0,0,255)'));
   stroke(51);
  text("INSTRUÇÕES",155,190);
  
  textSize(18);
  textStyle(NORMAL);
  fill(color('rgb(0,0,255)'));
   stroke(51);
  text("CRÉDITOS",155,250);
  
  stroke(color('#fff'));
  noFill();
  rect(x,y,35,35,9);
}
function jogar(){
  background(220);
  image(img2,0,0);
  fill(color("f##"));
  stroke(51);
  textSize(18);
  text("ESCOLHA UM NÍVEL",120,45);
  
  for(cont=0, A=70 ; cont<=2; cont++, A=A+115){
    noStroke();
    textSize(20);
    text(nivel[cont],A ,128);
  }
  textSize(14);
  text("Aperte Esc para voltar", 2,390);
  noFill();
  stroke(0);
  rect(X,110,75,20);
}
function nível1(){
  image(img3,0,0);
  image(img3,0,Yfundo);
  image(imgCopia,0,YfundoC);
  Yfundo=Yfundo+velocidade;
  if(Yfundo>=400){
    Yfundo=-400;
  }
  YfundoC=YfundoC+velocidade;
  if(YfundoC>=400){
    YfundoC=-400;
  }
  fill(color("f##"));
  stroke(color(255, 204, 0));
  circle(Xpos, Ypos, rJogador*2);
  stroke(51);
  text(numPos,Xnum,inicio);
  text(numNeg,XnumMenor,inicio);
  inicio=inicio+velocidade;
  Ypos=Ypos-velocidadeJ;
    noFill();
    stroke(color(255, 204, 0));
    ellipse(Xnum+5,inicio-5,rCircule*2);
    noFill();
    ellipse(XnumMenor+5,inicio-5,rCircule*2);
    
    if(dist(Xnum+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=1;
    rJogador=rJogador+(numPos/4);
    numPos= parseInt(random(-5,5));
    numNeg= parseInt(random(-5,10));
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.001;
    } if(dist(XnumMenor+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=1;
    rJogador=rJogador+(numNeg/4);
    numPos= parseInt(random(-5,5));
    numNeg= parseInt(random(-5,10));
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.001;
    }
  fill(0);
  text("Pontos: "+(rJogador-7),5,50);
   text("Velocidade:\n"+((velocidadeJ*400).toFixed(1))+" Km/h"+"\nLIMITE \n28km/h",5,65);
  for(i=0;i<=1;i++){
    if(rJogador>=32){
    fill(51);
    rect(0,100,400,200);
    fill(220);
    text("VOCÊ ATINGIU 25 PONTOS",130,200);
    text("proximo nível >"+"\n  Esc",175,220);
    velocidade=0;
    velocidadeJ=0;  
    } else if(rJogador<7 || velocidadeJ>0.07){
      inicio=1;
      Xpos=233;
      Ypos=370;
      posiçao=1;
      numNeg = "1";
      numPos = "2";
      Xnum=225;
      XnumMenor=180;
      rJogador=7;
      rCircule=15;
      velocidade=0.7;
      velocidadeJ=0.02;
      Yfundo=0;
      YfundoC=400;
    }
  }
}
function nível2(){    
  image(imgN2,0,0);
  image(imgN2,0,Yfundo);
  image(imgC2,0,YfundoC);
  Yfundo=Yfundo+velocidade2;
  if(Yfundo>=400){
    Yfundo=-400;
  }
  YfundoC=YfundoC+velocidade2;
  if(YfundoC>=400){
    YfundoC=-400;
  }
  fill(51);
  stroke(color("red"));
  circle(Xpos, Ypos, rJogador*2);
  stroke(51);
  text(numPos,Xnum,inicio);
  text(numNeg,XnumMenor,inicio);
  inicio=inicio+velocidade;
  Ypos=Ypos-velocidadeJ;
    noFill();
    stroke(color('red'));
    ellipse(Xnum+5,inicio-5,rCircule*2);
    noFill();
    ellipse(XnumMenor+5,inicio-5,rCircule*2);
    
    if(dist(Xnum+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=1;
    rJogador=rJogador+(numPos/4);
    numPos= parseInt(random(-5,10));
    numNeg= parseInt(random(-5,10));
    velocidade2=velocidade2+0.01;
    velocidadeJ=velocidadeJ+0.005;
    } if(dist(XnumMenor+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=1;
    rJogador=rJogador+(numNeg/4);
    numPos= parseInt(random(-5,10));
    numNeg= parseInt(random(-5,10));
    velocidade2=velocidade2+0.01;
    velocidadeJ=velocidadeJ+0.005;
    }
  stroke(51);
  text("x "+numX1,Xnum,inicio2);
  text("x "+numX2,XnumMenor,inicio2);
  inicio2=inicio2+velocidade;
  Ypos=Ypos-velocidadeJ;
    noFill();
    stroke(color('red'));
    ellipse(Xnum+5,inicio2-5,rCircule*2);
    noFill();
    ellipse(XnumMenor+5,inicio2-5,rCircule*2);
    
    if(dist(Xnum+5,inicio2-5,Xpos,Ypos)<rCircule+rJogador){
    inicio2=-60;
    rJogador=rJogador*(numX1);
    numX2= parseInt(random(-1,3));
    numX1= parseInt(random(0,3));
    velocidade2=velocidade2+0.01;
    velocidadeJ=velocidadeJ+0.005;
    } if(dist(XnumMenor+5,inicio2-5,Xpos,Ypos)<rCircule+rJogador){
    inicio2=-60;
    rJogador=rJogador*(numX2);
    numX2= parseInt(random(-1,3));
    numX1= parseInt(random(0,3));
    velocidade2=velocidade2+0.01;
    velocidadeJ=velocidadeJ+0.005;
    }
  
  fill(0);
  text("Pontos: "+(rJogador-7),5,50);
   text("Velocidade:\n"+((velocidadeJ*400).toFixed(1))+" Km/h"+"\nLIMITE \n36km/h",5,65);
  for(i=0;i<=1;i++){
    if(rJogador>=32){
    fill(51);
    rect(0,100,400,200);
    fill(220);
    text("VOCÊ ATINGIU 25 PONTOS",130,200);
    text("proximo nível >"+"\n   Esc",175,220);
    velocidade=0;
    velocidade2=0;
    velocidadeJ=0;  
    } else if(rJogador<7 || velocidadeJ>0.09){
          inicio=1;
          inicio2=-60;
          Xpos=233;
          Ypos=370;
          posiçao=1;
          numNeg = "-1";
          numX1="2";
          numPos = "2";
          numX2 = "1";
          Xnum=225;
          XnumMenor=180;
          rJogador=7;
          rCircule=15;
          velocidade=0.7;
          velocidade2=0.3;
          velocidadeJ=0.02;
          Yfundo=0;
          YfundoC=401;
          x = 115;
          y = 105;
          X = 65;
    }
  }
}
function nível3(){
  image(imgN3,0,0);
  image(imgN3,0,Yfundo);
  image(imgC3,0,YfundoC);
  Yfundo=Yfundo+velocidade;
  if(Yfundo>=400){
    Yfundo=-400;
  }
  YfundoC=YfundoC+velocidade;
  if(YfundoC>=400){
    YfundoC=-400;
  }
  stroke(color('hsla(160, 100%, 50%, 0.5)'));
  circle(Xpos, Ypos, rJogador*2);
  noStroke();
  fill(220);
  text(numPos,Xnum,inicio);
  text(numNeg,XnumMenor,inicio);
  inicio=inicio+velocidade;
  Ypos=Ypos-velocidadeJ;
    noFill();
    stroke(200);
    ellipse(Xnum+5,inicio-5,rCircule*2);
    noFill();
    ellipse(XnumMenor+5,inicio-5,rCircule*2);
    
    if(dist(Xnum+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=-30;
    rJogador=rJogador+(numPos/4);
    numPos= parseInt(random(-5,5));
    numNeg= parseInt(random(-5,10));
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.0005;
    } if(dist(XnumMenor+5,inicio-5,Xpos,Ypos)<rCircule+rJogador){
    inicio=-30;
    rJogador=rJogador+(numNeg/4);
    numPos= parseInt(random(-5,5));
    numNeg= parseInt(random(-5,10));
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.0005;
    }
    noStroke();
    fill(220);
    text("÷"+numX1,Xnum,inicio2);
    text("÷"+numX2,XnumMenor,inicio2);
    inicio2=inicio2+velocidade;
    Ypos=Ypos-velocidadeJ;
    noFill();
    stroke(200);
    ellipse(Xnum+5,inicio2-5,rCircule*2);
    noFill();
    ellipse(XnumMenor+5,inicio2-5,rCircule*2);
    
    if(dist(Xnum+5,inicio2-5,Xpos,Ypos)<rCircule+rJogador){
    inicio2=-60;
    rJogador=rJogador/numX1;
    numX1= 2;
    numX2= 1;
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.0005;
    } if(dist(XnumMenor+5,inicio2-5,Xpos,Ypos)<rCircule+rJogador){
    inicio2=-60;
    rJogador=rJogador/numX2;
    numX1= 2;
    numX2= 1;
    velocidade=velocidade+0.05;
    velocidadeJ=velocidadeJ+0.0005;
    }
  
  
  
  fill(200);
  text("Pontos: "+(rJogador-7),5,50);
   text("Velocidade:\n"+((velocidadeJ*400).toFixed(1))+" Km/h"+"\nLIMITE \n80km/h",5,65);
  for(i=0;i<=1;i++){
    if(rJogador>=12){
    fill(51);
    rect(0,100,400,200);
    fill(220);
    text("VOCÊ ATINGIU 5 PONTOS",130,200);
    text("PARABÉNS ! !"+"\nFim do Gamer",175,220);
    velocidade2=0;
    velocidade=0;
    velocidadeJ=0;  
    } else if(rJogador<7 || velocidadeJ>0.2){
      inicio=1;
      Xpos=233;
      Ypos=370;
      posiçao=1;
      numNeg = "-1";
      numX1="2";
      numPos = "2";
      numX2 = "1";
      Xnum=225;
      XnumMenor=180;
      rJogador=7;
      rCircule=15;
      velocidade=0.7;
      velocidadeJ=0.02;
      Yfundo=0;
      YfundoC=400;
    }
  }
}
function instrucoes(){
  image(imginstrucoes,0,0);
  noFill();
  stroke(color('f##'));
  textSize(22);
  text("INSTRUÇÕES",132,40);
  text("Aperte Esc para voltar", 2,390);
}
function creditos(){
  image(imgCreditos,0,0);
  noFill();
  stroke(color('f##'));
  textSize(22);
  text("CRÉDITOS",132,40);
  text("Aperte Esc para voltar", 2,390);
  textSize(18);
  fill(color("f##"));
  if(mouseX>=43 && mouseX<=199 && mouseY>=75 && mouseY<=255){
    rect(49, mouseY+20,305,80);
    stroke(51);
    fill(color("red"));
    text("Programador: Genilson Hortêncio"+"\nGraduando em Ciências e Tecnologia"+"\nUFRN",50,mouseY+40);
     } else if(mouseX>=200 && mouseX<=355 && mouseY>=75 && mouseY<=255){
     rect(49, mouseY+20,305,90);
     stroke(51);
     fill(color("blue"));
     text("Educador: Lutemberg Medeiros"+"\nProf. de Química e Ciências"+"\nDoutorando em Educação Científica"+"\nSecretário municipal de Educação ",50,mouseY+40);
     }
}
function keyPressed() {
  if(key=="ArrowUp" && y>105 && tela==0) {
    y=y-60;
    opcao= opcao-1;
    console.log(opcao)
  }
  if(key=="ArrowDown" && y<=200 && tela==0){
    y=y+60;
    opcao= opcao+1;
    console.log(opcao);
  }
  if(key=="Escape" && tela<=3){
    tela=0;
    opcao=1;
    y = 105;
      }else if(key=="Escape" && tela>3){
         tela=1;
         opcao=1;
         X= 65;
       }
  if(key=="ArrowRight" && X<=200 && tela==1){
    X = X + 115;
    opcao = opcao+1;
    console.log(opcao);
  } else if(key=="ArrowRight" && Xpos<210 && (tela==4 || tela==5 || tela==6)){
    Xpos = Xpos+50;
    posiçao=posiçao-1;
    console.log(posiçao);
  }
  if(key=="ArrowLeft" && X>70 && tela==1){
    X = X - 115;
    opcao = opcao-1;
    console.log(opcao);
  } else if(key=="ArrowLeft" && Xpos>190 && (tela==4 || tela==5 || tela==6)){
    Xpos = Xpos-50;
    posiçao=posiçao+1;
    console.log(posiçao);
  }
  if(key=="Enter" && tela==0){
    tela=opcao;
    } else if(key=="Enter" && tela==1){
       tela = opcao+3;
       X=65;
       inicio=1;
       inicio2=-60;
       Xpos=233;
       Ypos=370;
       posiçao=1;
       numNeg = "-1";
       numX1="2";
       numPos = "2";
       numX2 = "1";
       Xnum=225;
       XnumMenor=180;
       rJogador=7;
       rCircule=15;
       velocidade=0.7;
       velocidade2=0.3;
       velocidadeJ=0.02;
       Yfundo=0;
       YfundoC=401;
       x = 115;
       y = 105;
       X = 65;
    }
}  