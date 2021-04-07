function hesapla() {
    var not1, harfnot, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
    //parsefloat()
    s1 = document.getElementById('sinav1').value * 5; //matematik
    s2 = document.getElementById('sinav2').value * 8; //turkce
    s3 = document.getElementById('sinav3').value * 2; //ingilizce
    s4 = document.getElementById('sinav4').value * 3; //fen
    s5 = document.getElementById('sinav5').value * 3; //sosyal
    s6 = document.getElementById('sinav6').value * 2; //din
    s7 = document.getElementById('sinav7').value * 1; //trafik
    s8 = document.getElementById('sinav8').value * 2; //insan
    s9 = document.getElementById('sinav9').value * 1; //resim
    s10 = document.getElementById('sinav10').value * 2; //beden 
    s11 = document.getElementById('sinav11').value * 1; //muzik

    not1 = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11) / 30.0;

    if (document.getElementById('sinav11').value > 100)
        document.getElementById('sinav11').style.color = "red ",
        harfnot = 'Müzik Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Müzik Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav10').value > 100)
        document.getElementById('sinav10').style.color = "red ",
        harfnot = 'Beden Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Beden eğitimi Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav9').value > 100)
        document.getElementById('sinav9').style.color = "red ",
        harfnot = 'Resim Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Resim Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav8').value > 100) document.getElementById('sinav8').style.color = "red ",
        harfnot = 'İnsan hakları Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "İnsan hakları Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav7').value > 100)
        document.getElementById('sinav7').style.color = "red ",
        harfnot = 'Trafik Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Trafik Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav6').value > 100)
        document.getElementById('sinav6').style.color = "red ",
        harfnot = 'Din Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Din kültürü Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav5').value > 100) document.getElementById('sinav5').style.color = "red ",
        harfnot = 'Sosyal Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Sosyal bilgisi Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav4').value > 100)
        document.getElementById('sinav4').style.color = "red ",
        harfnot = 'Fen Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Fen bilimleri Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav3').value > 100) document.getElementById('sinav3').style.color = "red ",
        harfnot = 'İngilizce Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "İngilizce Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav2').value > 100) document.getElementById('sinav2').style.color = "red ",
        harfnot = 'Türkçe Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Türkçe Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav1').value > 100)
        document.getElementById('sinav1').style.color = "red ",
        harfnot = 'Matematik Dersini 100 üzerinden Girin',
        document.getElementById('yüz').innerHTML = "Matematik Dersini 100 üzerinden Girin!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000),
        not1 = "!!!";
    else if (document.getElementById('sinav2').value >= 00 && document.getElementById('sinav2').value < 55)
        document.getElementById('yüz').innerHTML = "Malesef Türkçe 55 Altında olduğu için belge alamadınız!", //türkçe
        harfnot = 'Türkçe 55 Altı olduğu için belge alamadınız',
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav1').value >= 00 && document.getElementById('sinav1').value < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //matematik
        document.getElementById('yüz').innerHTML = "Malesef Matematik 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav3').value >= 00 && document.getElementById('sinav3').value < 45) harfnot = 'Zayıf Ders olduğu için belge alamadınız ', //ingilizce
        document.getElementById('yüz').innerHTML = "Malesef İngilizce 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav4').value >= 00 && document.getElementById('sinav4').value < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Fen bilgisi 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //fen
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav5').value >= 00 && document.getElementById('sinav5').value < 45) harfnot = 'Zayıf Ders olduğu için belge alamadınız', //sosyal
        document.getElementById('yüz').innerHTML = "Malesef Sosyal bilgiler 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav6').value >= 00 && document.getElementById('sinav6').value < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //din
        document.getElementById('yüz').innerHTML = "Malesef  Din Kültürü 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav7').value >= 00 && document.getElementById('sinav7').value < 45) harfnot = 'Zayıf Ders olduğu için belge alamadınız', //trafik
        document.getElementById('yüz').innerHTML = "Malesef Trafik 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav8').value >= 00 && document.getElementById('sinav8').value < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //insan
        document.getElementById('yüz').innerHTML = "Malesef İnsan Hakları 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav9').value >= 00 && document.getElementById('sinav9').value < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Resim 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //resim
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav10').value >= 00 && document.getElementById('sinav10').value < 45) harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Beden 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);
    else if (document.getElementById('sinav11').value >= 00 && document.getElementById('sinav11').value < 45) harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Müzik 45 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //müzik
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (not1 >= 85 && not1 <= 100)
        harfnot = 'Tebrikler! Taktir belgesini Hak kazandınız!',
        document.getElementById('mesaj').style.display = "block",
        setTimeout("document.getElementById('mesaj').style.display = 'none'", 10000);
    else if (not1 >= 70 && not1 <= 85)
        harfnot = 'Tebrikler! Teşekkür belgesini Hak kazandınız!',
        document.getElementById('tesekkür').style.display = "block",
        setTimeout("document.getElementById('tesekkür').style.display = 'none'", 10000);
    else if (not1 >= 0 && not1 < 70)
        harfnot = 'Malesef hiç bir belge kazanamadınız!',
        document.getElementById('hic').style.display = "block",
        setTimeout("document.getElementById('hic').style.display = 'none'", 10000);
    //else if ();
    else if (not1 > 100)
        alert('Lütfen Dersleri 100 üzerinden giriniz!!!');
    document.getElementById('mesaj').innerHTML = "Aferin " +
        not1 + " puan ile Taktir Belgesini almaya hak kazandınız!";
    document.getElementById('hic').innerHTML = "Malesef " +
        not1 + " puan ile HİÇ BELGE alamadınız!";
    document.getElementById('tesekkür').innerHTML = "Aferin " +
        not1 + " puan ile Teşekkür Belgesini almaya hak kazandınız!";

    document.getElementById('txtortalama').value = not1;
    document.getElementById('txtharf').value = harfnot;

}