var isim;
var görüş;
var ad = "123";
var pass1 = "123";
isim = prompt('Sayfayi görebilmek icin lütfen Kullanıcı adını giriniz!', '');
görüş = prompt('Sayfayi görebilmek icin lütfen şifreyi giriniz!', '');
if (isim == ad && görüş == pass1) {
    alert('Anlayışınız için teşekkürler');
} else { window.location = "404.html"; }