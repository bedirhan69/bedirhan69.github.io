function hesapla() {
    var not1, harfnot, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s1 = parseFloat(document.getElementById('sinav1').value) * 5; //matematik
    s2 = parseFloat(document.getElementById('sinav2').value) * 8; //turkce
    s3 = parseFloat(document.getElementById('sinav3').value) * 2; //ingilizce
    s4 = parseFloat(document.getElementById('sinav4').value) * 3; //fen
    s5 = parseFloat(document.getElementById('sinav5').value) * 3; //sosyal
    s6 = parseFloat(document.getElementById('sinav6').value) * 2; //din
    s7 = parseFloat(document.getElementById('sinav7').value) * 1; //trafik
    s8 = parseFloat(document.getElementById('sinav8').value) * 2; //insan
    s9 = parseFloat(document.getElementById('sinav9').value) * 1; //resim
    s10 = parseFloat(document.getElementById('sinav10').value) * 2; //beden 
    s11 = parseFloat(document.getElementById('sinav11').value) * 1; //muzik

    not1 = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11) / 30.0;

    if (not1 >= 85 && not1 <= 100)
        harfnot = 'Tebrikler! Taktir belgesini Hak kazandınız!';
    else if (not1 >= 70 && not1 <= 85)
        harfnot = 'Tebrikler! Teşekkür belgesini Hak kazandınız!';
    else if (not1 >= 0 && not1 < 70)
        harfnot = 'Malesef hiç bir belge kazanamadınız!';
    else if (not1 > 100)
        alert('Lütfen Dersleri 100 üzerinden giriniz!!!');

    if (parseFloat(document.getElementById('sinav2').value) >= 00 && parseFloat(document.getElementById('sinav2').value) < 55)
        harfnot = 'Türkçe 55 Altı olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav1').value) >= 00 && parseFloat(document.getElementById('sinav1').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav3').value) >= 00 && parseFloat(document.getElementById('sinav3').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız ';
    else if (parseFloat(document.getElementById('sinav4').value) >= 00 && parseFloat(document.getElementById('sinav4').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav5').value) >= 00 && parseFloat(document.getElementById('sinav5').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav6').value) >= 00 && parseFloat(document.getElementById('sinav6').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav7').value) >= 00 && parseFloat(document.getElementById('sinav7').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav8').value) >= 00 && parseFloat(document.getElementById('sinav8').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav9').value) >= 00 && parseFloat(document.getElementById('sinav9').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav10').value) >= 00 && parseFloat(document.getElementById('sinav10').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (parseFloat(document.getElementById('sinav11').value) >= 00 && parseFloat(document.getElementById('sinav11').value) < 45)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız';
    else if (isNaN(NaN)) {
        harfnot = 'Boş Veya Eksik Bıraktınız';
    }

    document.getElementById('txtortalama').value = not1;
    document.getElementById('txtharf').value = harfnot;

}