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

    if (s2 > 0 && s2 < 55)
        harfnot = 'türkçe 55 altı';
    else if (s1 > 0 && s1 < 45)
        harfnot = 'Zayıf Ders var';
    else if (not1 >= 85 && not1 <= 100)
        harfnot = 'Tebrikler! Taktir belgesini Hak kazandınız!';
    else if (not1 >= 70 && not1 <= 85)
        harfnot = 'Tebrikler! Teşekkür belgesini Hak kazandınız!';
    else if (not1 >= 0 && not1 < 70)
        harfnot = 'Malesef hiç bir belge kazanamadınız!';


    if (s3 > 0 && s3 < 45)
        harfnot = 'Zayıf Ders var';
    if (s4 > 0 && s4 < 45)
        harfnot = 'Zayıf Ders var';
    if (s5 > 0 && s5 < 45)
        harfnot = 'Zayıf Ders var';
    if (s6 > 0 && s6 < 45)
        harfnot = 'Zayıf Ders var';
    if (s7 > 0 && s7 < 45)
        harfnot = 'Zayıf Ders var';
    if (s8 > 0 && s8 < 45)
        harfnot = 'Zayıf Ders var';
    if (s9 > 0 && s9 < 45)
        harfnot = 'Zayıf Ders var';
    if (s10 > 0 && s10 < 45)
        harfnot = 'Zayıf Ders var';
    if (s11 > 0 && s11 < 45)
        harfnot = 'Zayıf Ders var';
    if (not1 > 100)
        alert('Lütfen Dersleri 100 üzerinden gir!!!');
    if (s2 > 0 && s2 < 55)
        harfnot = 'türkçe 55 altı';


    document.getElementById('txtortalama').value = not1;
    document.getElementById('txtharf').value = harfnot;
}