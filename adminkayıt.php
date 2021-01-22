<?php
	session_start();
	include 'ayar.php';
	include 'ukas.php';

	$p = @$_GET["p"];
	
	$sorgu = $db->prepare("SELECT COUNT(*) FROM uyeler");
	$sorgu->execute();
	$say = $sorgu->fetchColumn();
?>
    <!DOCTYPE html>


    <html>

    <head>
        <title>Üye girişi/Kayıl Ol!</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <script src="js/kar.js" type="text/javascript"></script>

        <style>
            * {
                box-sizing: border-box;
            }
            
            body {
                font-family: Helvetica;
                background: #eee;
                -webkit-font-smoothing: antialiased;
            }
            
            hgroup {
                text-align: center;
                margin-top: 4em;
            }
            
            h1,
            h3 {
                font-weight: 300;
            }
            
            h1 {
                color: #636363;
            }
            
            h3 {
                color: #4a89dc;
            }
            
            form {
                width: 390px;
                margin: 4em auto;
                padding: 3em 2em 2em 2em;
                background: #fafafa;
                border: 1px solid #ebebeb;
                box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
            }
            
            .group {
                position: relative;
                margin-bottom: 45px;
            }
            
            input {
                font-size: 18px;
                padding: 10px 10px 10px 5px;
                -webkit-appearance: none;
                display: block;
                background: #fafafa;
                color: #636363;
                width: 100%;
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #757575;
            }
            
            input:focus {
                outline: none;
            }
            /* Label */
            
            label {
                color: #999;
                font-size: 18px;
                font-weight: normal;
                position: absolute;
                pointer-events: none;
                left: 5px;
                top: 10px;
                transition: all 0.2s ease;
            }
            /* active */
            
            input:focus~label,
            input.used~label {
                top: -20px;
                transform: scale(.75);
                left: -2px;
                /* font-size: 14px; */
                color: #4a89dc;
            }
            /* Underline */
            
            .bar {
                position: relative;
                display: block;
                width: 100%;
            }
            
            .bar:before,
            .bar:after {
                content: '';
                height: 2px;
                width: 0;
                bottom: 1px;
                position: absolute;
                background: #4a89dc;
                transition: all 0.2s ease;
            }
            
            .bar:before {
                left: 50%;
            }
            
            .bar:after {
                right: 50%;
            }
            /* active */
            
            input:focus~.bar:before,
            input:focus~.bar:after {
                width: 50%;
            }
            /* Highlight */
            
            .highlight {
                position: absolute;
                height: 60%;
                width: 100px;
                top: 25%;
                left: 0;
                pointer-events: none;
                opacity: 0.5;
            }
            /* active */
            
            input:focus~.highlight {
                animation: inputHighlighter 0.3s ease;
            }
            /* Animations */
            
            @keyframes inputHighlighter {
                from {
                    background: #4a89dc;
                }
                to {
                    width: 0;
                    background: transparent;
                }
            }
            /* Button */
            
            .button {
                position: relative;
                display: inline-block;
                padding: 12px 24px;
                margin: .3em 0 1em 0;
                width: 100%;
                vertical-align: middle;
                color: #fff;
                font-size: 16px;
                line-height: 20px;
                -webkit-font-smoothing: antialiased;
                text-align: center;
                letter-spacing: 1px;
                background: transparent;
                border: 0;
                border-bottom: 2px solid #3160B6;
                cursor: pointer;
                transition: all 0.15s ease;
            }
            
            .button:focus {
                outline: 0;
            }
            /* Button modifiers */
            
            .buttonBlue {
                background: #4a89dc;
                text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
            }
            
            .buttonBlue:hover {
                background: #357bd8;
            }
            /* Ripples container */
            
            .ripples {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: transparent;
            }
            /* Ripples circle */
            
            .ripplesCircle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.25);
            }
            
            .ripples.is-active .ripplesCircle {
                animation: ripples .4s ease-in;
            }
            /* Ripples animation */
            
            @keyframes ripples {
                0% {
                    opacity: 0;
                }
                25% {
                    opacity: 1;
                }
                100% {
                    width: 200%;
                    padding-bottom: 200%;
                    opacity: 0;
                }
            }
            
            footer {
                text-align: center;
            }
            
            footer p {
                color: #888;
                font-size: 13px;
                letter-spacing: .4px;
            }
            
            footer a {
                color: #4a89dc;
                text-decoration: none;
                transition: all .2s ease;
            }
            
            footer a:hover {
                color: #666;
                text-decoration: underline;
            }
            
            footer img {
                width: 80px;
                transition: all .2s ease;
            }
            
            footer img:hover {
                opacity: .83;
            }
            
            footer img:focus,
            footer a:focus {
                outline: none;
            }
            
            body {
                background-color: #aad6f3;
            }
        </style>

        <link href="css/loading.css" rel="stylesheet" media="screen">
        <script src="js/loading.js"></script>
    </head>

    <body onload="myFunction()" style="margin:0;">
        <!--=================================preloader========================================== -->
        <div id="loader">

        </div>
        <!--=================================preloader===============================================-->

        <hgroup>
            <h1>Kullanıcı Kayıtı</h1>
            <h3>By Oğuzhan Aktaş</h3>
        </hgroup>

        <form action="" method="POST">
            <div class="group">
                <input type="text" name="adsoyad"><span class=" highlight "></span><span class="bar "></span>
                <label>Ad-Soyad</label>
            </div>
            <div class="group ">
                <input type="text " name="kadi"><span class=" highlight "></span><span class="bar "></span>
                <label>Kullanıcı Adı</label>
            </div>
            <div class="group ">
                <input type="password " name="sifre"><span class=" highlight "></span><span class="bar "></span>
                <label>Şifre</label>
            </div>
            <div class="group ">
                <input type="password " name="sifret"><span class=" highlight "></span><span class="bar "></span>
                <label>Şifre Tekrar</label>
            </div>
            <div class="group ">
                <input type="text " name="eposta"><span class=" highlight "></span><span class="bar "></span>
                <label>E-Posta</label>
            </div>
            <button type="button " class="button buttonBlue " name="kayit">Kayıt Ol
      <div class="ripples buttonRipples "><span class="ripplesCircle "></span></div>
    </button>
        </form>



        <footer>
            <a href="admin.html " target="_blank "><img src="https://eren639.webnode.com.tr/_files/200000005-2a55d2b536/var.png " width="250px "></a>
            <p>I Love You <a href="https://oguzhan169.github.io " target="_blank ">Maths</a></p>
        </footer>

        <!-------------------------------mouse tıklandığında öğeyi incele iptal------------------------>
        <script src="js/mouse.js "></script>
        <!-------------------------------mouse tıklandığında öğeyi incele iptal------------------------>
        <script src="js/adminpanel.js "></script>
        <?php

        switch ($p) {
            case 'cikis':
                if ($_SESSION) {
                    ukas_cikis("ayar.php", "index.php");
                }else{
                    header("LOCATION:404");
                }
                break;

            case 'kayit':
                if ($_SESSION) {
                    header("LOCATION:404.html");
                }else{
                    ukas_mail("ugurbocugu8@gmail.com", "Ukas", "Hoşgeldin brocan, harcanıyosun buralarda.. Sana ihtiyacım var.. :)");

                    ukas_kayit("ayar.php", "<p class='text-warning'>Lütfen boş bırakmayınız!</p>", "<p class='text-danger'>Böyle bir eposta mevcut! Lütfen başka bir tane deneyiniz!</p>", "<p class='text-warning'>Böyle bir kullanıcı adı mevcut! Lütfen başka bir tane deneyiniz!</p>", "<p class='text-success'>Başarıyla kaydoldun! :)</p>", $devam, "<p class='text-danger'>Kullanıcı adı veya şifre hatalı!</p>", "<p class='text-danger'>Kayıt başarısız!</p>", "<p>Şifreniz bir birine eşleşmiyor!</p>", "<p>Lütfen gerçek bir eposta giriniz!</p>", true);
                    echo '<strong>Sen de '.$say.' kayıtlı kişiden biri ol,</strong><h1 class="text-center"><strong>Şimdi Kayıt Ol!</strong></h1>
                    <form action="" method="POST">
                        <strong>Ad Soyad:</strong>
                        <input type="text" class="form-control" name="adsoyad">
                        <strong>Kullanıcı adı:</strong>
                        <input type="text" class="form-control" name="kadi">
                        <strong>Şifre:</strong>
                        <input type="password" class="form-control" name="sifre">
                        <strong>Şifre (Tekrar):</strong>
                        <input type="password" class="form-control" name="sifret">
                        <strong>E-Posta:</strong>
                        <input type="text" class="form-control" name="eposta"><br />
                        <input type="submit" class="btn btn-block btn-danger" name="kayit" value="Kayıt Ol">
                    </form>
                    <hr>
                    <a href="uyelik?p=giris" class="btn btn-block btn-success" title="Toosba yı duydun mu?"><strong><em>Şimdi giriş yap!</em></strong></a><br />
                    <a href="valide" class="text-dark" title=""><small>&larr; <strong><em>Anasayfaya dön</em></strong></small></a>';
                }
                break;
            
            default:
                if ($_SESSION) {
                    header("LOCATION:404.html");
                }else{
                    ukas_giris("ayar.php", "index.php", "<p class='text-warning'>Lütfen boş bırakmayınız!</p>", "<p class='text-danger'>Kullanıcı adı veya şifre hatalı!</p>");
                    
                    echo '<h1 class="text-center"><strong>Giriş Yap</strong></h1>
                    <br /><form action="" method="POST">
                        <strong>Kullanıcı Adı:</strong>
                        <input type="text" class="form-control" name="kadi" placeholder="Kargadio">
                        <strong>Şifre:</strong>
                        <input type="password" class="form-control" name="sifre" placeholder="123"><br />
                        <input type="submit" class="btn btn-block btn-success" name="giris" value="Giriş Yap">
                    </form>
                    <hr>
                    <a href="uyelik?p=kayit" class="btn btn-block btn-danger" title=""><strong><em>Sen de '.$say.' kişiden biri ol ve şimdi kayıt ol!</em></strong></a><br />
                    <a href="valide" class="text-dark" title=""><small>&larr; <strong><em>Anasayfaya dön</em></strong></small></a>';
                    }
                break;
        }

    ?>

    </body>

    </html>