<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uzņemšana LVT</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="images/lvt.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    
    <header>
        <a href="#" class="logo">Liepājas Valsts tehnikums</a>

        <nav class="navbar">
            <a href="#sakums">Sākumlapa</a>
            <a href="#specialitates">Uzņemšana</a>
            <a href="#informacija">Par mums</a>
            <a href="#iepazisti">Iepazīsti tehnikumu</a>
            <a href="#kontakti">Kontakti</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars">
    </header>

    <section class="sakums" id="sakums">
        <div class="content">
            <h3>LVT uzsāk jauno audzēkņu uzņemšanu</h3>
            <p>Sākot no š.g. jūnija jaunieši var iesniegt dokumentus PIKC "Liepājas Valsts tehnikums", lai jau nākamajā mācību gadā apgūtu kādu no darba tirgū pieprasītām profesijām.</p>
            <a href="#specialitates" class="btn">Apskatīt specialitātes</a>
        </div>

        <div class="image">
            <img src="images/learn.png" alt="">
        </div>

        <div class="cloud"></div>

        <div class="cloud cloud2"></div>
    </section>

    <section class="specialitates" id="specialitates">
        <h1 class="heading">Piesakies kādā no <span>specialitātēm</span></h1>

        <div class="box-container">

            <?php
                require("connect_db.php");
                $vakancesVaicajums = "SELECT * FROM specialitates";
                $atlasaVakances = mysqli_query($savienojums, $vakancesVaicajums) or die("Nekorekts vaicājums!");

                if(mysqli_num_rows($atlasaVakances) > 0){
                    while($row = mysqli_fetch_assoc($atlasaVakances)){
                        echo "
                        <div class='box'>
                            <img src='{$row['Attels']}'>
                            <h3>{$row['Specialitate']}</h3>
                            <p>{$row['Apraksts']}</p>
                            <form action='entry.php' method='post'>
                                <button type='submit' name='pieteikties' class='btn' value='{$row['Specialitate']}'>Pieteikties</button>
                            </form>
                        </div>
                        ";
                    }
                }
            ?>
        </div>
    </section>

    <section class="informacija" id="informacija">
        <h1 class="heading"><span>PIKC "Liepājas Valsts tehnikums"</span></h1>
            <div class="row">
                <div class="image">
                    <img src="images/about-img.png">
                </div>
                
                <div class="content">
                    <h3 class="title">Kurzemes reģiona lielākā profesionālās izglītības iestāde</h3>
                    <p>PIKC "Liepājas Valsts tehnikums" ir Kurzemes reģiona lielākā profesionālās izglītības iestāde ar plašāko piedāvāto izglītības programmu klāstu. Tas nodrošina kompetentu un kvalitatīvu speciālistu sagatavošanu gan pēc pamatskolas, gan pēc vidusskolas beigšanas un arī mūžizglītības kontekstā, atbilstoši reģiona attīstības vajadzībām un dinamikai. Tehnikums ir elastīgs un atvērts moderno tehnoloģiju un jaunu programmu ieviešanai.</p>

                    <div class="icon-container">
                        <div class="icons">
                            <i class="fas fa-award"></i>
                            <h3>Vairāk nekā 25 specialitātes</h3>
                        </div>
                        <div class="icons">
                            <i class="fas fa-users"></i>
                            <h3>1200+ audzēkņu</h3>
                        </div>
                        <div class="icons">
                            <i class="fas fa-project-diagram"></i>
                            <h3>Neskaitāmi sadarbības partneri</h3>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section class="iepazisti" id="iepazisti">
        <h1 class="heading">Iepazīsti <span>tehnikumu!</span></h1>
        <div class="box-container">

            <div class="box">
                <img src="images/lvt1.jpg" alt="">
                <div class="content">
                    <h3>LVT Ventspils ielā</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
            <div class="box">
                <img src="images/lvt2.jpg" alt="">
                <div class="content">
                    <h3>LVT Vānes ielā</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
            <div class="box">
                <img src="images/lvt3.jpg" alt="">
                <div class="content">
                    <h3>LVT telpas Ventspils ielā</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
            <div class="box">
                <img src="images/lvt4.jpg" alt="">
                <div class="content">
                    <h3>LVT telpas Vānes ielā</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
            <div class="box">
                <img src="images/lvt5.jpg" alt="">
                <div class="content">
                    <h3>LVT aktu zāle Ventspils ielā</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
            <div class="box">
                <img src="images/lvt6.jpg" alt="">
                <div class="content">
                    <h3>LVT bibliotēka</h3>
                    <p>2021.gada pavasaris</p>
                </div>
            </div>
    </section>
    <section class="kontakti" id="kontakti">
        <h1 class="heading">Kontakti</h1>
        <div class="icon-container">
            <div class="icons">
                <i class="fas fa-phone"></i>
                <h3>Tālrunis</h3>
                <p>+371 69 999 999</p>
                <p>+371 69 999 999</p>
            </div>
            <div class="icons">
                <i class="fas fa-envelope"></i>
                <h3>E-pasts</h3>
                <p>lvt@lvt.lv</p>
                <p>uznemsana@lvt.lv</p>
            </div>
            <div class="icons">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Adrese</h3>
                <p>Ventspils iela 51, Liepāja, LV-3405, Latvija</p>
            </div>
        </div>
        <div class="row">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17602.311123956104!2d21.01689628717146!3d56.531670936818294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46faa7ccb271be93%3A0xf9d1bf3406ae7d9d!2sLiep%C4%81jas%20Valsts%20tehnikums!5e0!3m2!1slv!2slv!4v1636631911346!5m2!1slv!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

            <form action="" method="post">
                <input type="text" name="vards" placeholder="Vārds" class="box" required>
                <input type="text" name="epasts" placeholder="E-pasts" class="box" required>
                <input type="text" name="talrunis" placeholder="Tālrunis" class="box" required>
                <textarea name="zinojums" placeholder="Tavs ziņojums" class="box" required></textarea>
                <input type="submit" name="nosutit" value="Sazināties!" class="btn">
                <?php
                    if(isset($_POST["nosutit"])){
                        $receiver = "lvt.4pt@gmail.com";
                        $sender = "From:lvt.4pt@gmail.com";
                        $subject = "Jauna ziņa no LVT audzēkņu uzņemšanas WEB";
                        $body = "Ziņas sūtītāja e-pasts: ".$_POST["epasts"];
                        $body .= "\nZiņas sūtītāja vārds: ".$_POST["vards"];
                        $body .= "\nZiņas sūtītāja tālrunis: ".$_POST["talrunis"];
                        $body .= "\n\nZiņojums: \n".$_POST["zinojums"];

                        if(mail($receiver, $subject, $body, $sender)){
                            echo "<div class='pazinojums' id='pazinojums'>
                            <p>Ziņa nosūtīta! Sazināsimies ar Jums pavisam drīz! <a onclick='x()'><i class='fas fa-times'></i></a></p></div>";
                        }else{
                            echo "<div class='pazinojums' id='pazinojums'>
                            <p>Kļūda nosūtot ziņu! <a onclick='x()'><i class='fas fa-times'></i></a></p></div>";
                        }
                    }
                ?>
            </form>
        </div>
    </section>

    <section class="footer">
        Liepājas Valsts tehnikums &copy; 2021
    </section>
    <script src="script.js"></script>
</body>
</html>