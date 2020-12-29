var countDownDate = new Date("2021/01/01 00:00:00").getTime(); //geri sayılacak ileri zamanki bir tarihi milisaniye cinsinden elde ediyoruz
var dayText = "Gün";
var hourText = "Saat";
var minuteText = "Dakika";
var secondText = "Saniye";
if (countDownDate) { //tarih var ise
    var x = setInterval(function() { //sayacı belirli aralıklarla yenile
        var now = new Date().getTime(); //şimdiki zamanı al
        var distance = countDownDate - now; //geri sayılacak tarih ile şimdiki tarih arasındaki zaman farkını al
        if (distance < 0) { //zaman farkı yok ise belirtilen zamanı geçti
            clearInterval(x); //sayacı sil
            $("#countdown_timer").html("Geri sayım yapılacak ileri bir tarih yoktur");
        } else { //zaman farkı var ise
            //aradaki zaman farkını gün,saat,dakika,saniye olarak böl
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds = Math.floor((distance % (1000 * 60)) / 1000),
                days = (days ? '<div><div>' + days + '</div><div>' + dayText + '</div></div>' : ''), //gun varsa gun degerini yaz
                hours = (hours ? '<div><div>' + hours + '</div><div>' + hourText + '</div></div>' : ''), //saat varsa saat degerini yaz
                minutes = (minutes ? '<div><div>' + minutes + '</div><div>' + minuteText + '</div></div>' : ''), //dakika varsa dakika degerini yaz
                seconds = (seconds ? '<div><div>' + seconds + '</div><div>' + secondText + '</div></div>' : ''); //saniye varsa saniye degerini yaz
            document.getElementById("countdown_timer").innerHTML = days + hours + minutes + seconds; //yazdır
        }
    }, 1000); //1 saniyede bir sayaç güncellenecek
} //////////////////////////////(diğer videoya son)