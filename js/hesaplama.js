function hesapla(){
    var not1, harfnot;
    
    s1 = parseFloat(document.getElementById('sinav1').value) * 5;//matematik
    s2 = parseFloat(document.getElementById('sinav2').value) * 8;//turkce
    s3 = parseFloat(document.getElementById('sinav3').value) * 2;//ingilizce
    s4 = parseFloat(document.getElementById('sinav4').value) * 3;//fen
    s5 = parseFloat(document.getElementById('sinav5').value) * 3;//sosyal
    s6 = parseFloat(document.getElementById('sinav6').value) * 2;//din
    s7 = parseFloat(document.getElementById('sinav7').value) * 1;//trafik
    s8 = parseFloat(document.getElementById('sinav8').value) * 2;//insan
    s9 = parseFloat(document.getElementById('sinav9').value) * 1;//resim
    s10 = parseFloat(document.getElementById('sinav10').value) * 2;//beden 
    s11 = parseFloat(document.getElementById('sinav11').value) * 1;//muzik

    not1=(s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11)/30.0;

    if (not1>=85 && not1<=100)
       harfnot='Tebrikler! Taktir belgesini Hak kazandınız!';
    else if (not1>=70 && not1<=84.99)
       harfnot='Tebrikler! Teşekkür belgesini Hak kazandınız!';
    else if (not1>=0 && not1<69.99)
     harfnot='Malesef hiç bir belge kazanamadınız!';

       if(s1<44.9 && s1>0)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s2<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s3<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s4<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s5<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s6<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s7<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s8<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s9<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s10<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
       if(s11<44)
       harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
      // if(s1<44.0)
      // harfnot='ZAYIF DERS VAR! Hiç Bir Belge Alamadınız!!!';
      //100 den fazla
      if(s9>100){
       alert('Dersler 100 üzerinden Girin!!!');}
    
     
       
    document.getElementById('txtortalama').value=not1;
    document.getElementById('txtharf').value=harfnot;    
   }