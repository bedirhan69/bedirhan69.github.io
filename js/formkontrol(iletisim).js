"use strict";
var formGiris = document.forms["forum2"];  // form seçimi
var eposta = formGiris.eposta;   // eposta alanı seçimi
var sifre = formGiris["isim"];  // sifre alanı seçimi
var text = formGiris["görüş"];  //e-posta veya telefon

formGiris.onsubmit = function() {
  if (sifre.value.length > 2) {
    
  } else {
    alert("Lütfen adınızı doğru giriniz!");
    return false;  // form gönderimini iptal et
  }
if (text.value.length > 12) {
}else{
  alert("Görüşünüzü giriniz!")
  return false; //form gönderimini iptal et
}
}