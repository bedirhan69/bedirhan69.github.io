function Login(){
    
    var done=0;
    
    var username=document.login.username.value;
    
    username=username.toLowerCase();
    
    var password=document.login.password.value;
    
    password=password.toLowerCase();
    
    if (username=="KULLANICI ADI" && password=="ŞİFRESİ") { window.location="GİDİLECEK URL"; done=1; }
    
    if (username=="member2" && password=="password2") { window.location="xxx.html"; done=1; }
    
    if (username=="member3" && password=="password3") { window.location="#.html"; done=1; }
    
    if (done==0) { alert("Kullanıcı adını ve Şifreyi Kontrol Et!!!"); }
    
    }

