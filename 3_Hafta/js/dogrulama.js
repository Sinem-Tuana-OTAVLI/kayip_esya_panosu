function hataGoster(metin) {
    const kutu = document.getElementById("mesaj");
    kutu.textContent = metin;
    kutu.className = "mesaj hata";
}

function basariGoster(metin) {
    const kutu = document.getElementById("mesaj");
    kutu.textContent = metin;
    kutu.className = "mesaj basari";
}

function mesajiTemizle() {
    const kutu = document.getElementById("mesaj");
    kutu.textContent = "";
    kutu.className = "mesaj";
}

function doluMu(alan, metin) {
    if (alan.value.trim() === "") {
        hataGoster(metin);
        return false;
    }
    return true;
}

function ilanNoGecerliMi(alan) {
    const sayi = Number(alan.value);   
    if (sayi < 1 || sayi % 1 !== 0) {  
        hataGoster("Lütfen geçerli bir ilan no girin (1, 2, 3 gibi).");
        return false;
    }
    return true;
}

function kodGecerliMi(alan) {
    const kod = alan.value;
    let gecerli = true;

    if (kod.length !== 4) {
        gecerli = false;
    }

    for (let i = 0; i < kod.length; i++) {
        if (kod[i] < "0" || kod[i] > "9") {
            gecerli = false;
        }
    }

    if (!gecerli) {
        hataGoster("Kaldırma kodu tam 4 haneli bir sayı olmalıdır (örn. 1234).");
        return false;
    }
    return true;
}

function kodlarAyniMi(kod, kodTekrar) {
    if (kod.value !== kodTekrar.value) {
        hataGoster("Girdiğiniz iki kod aynı değil, lütfen tekrar kontrol edin.");
        return false;
    }
    return true;
}


// ---------- 1) Kayıp ilanı ver (kayip_ilan_ver.html) ----------
const kayipIlanFormu = document.getElementById("kayipIlanFormu");

if (kayipIlanFormu !== null) {
    kayipIlanFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();   // sayfanın yenilenmesini engeller
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const esyaAdi = document.getElementById("esyaAdi");
        const yer = document.getElementById("yer");
        const tarih = document.getElementById("tarih");
        const kod = document.getElementById("kod");
        const kodTekrar = document.getElementById("kodTekrar");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!doluMu(esyaAdi, "Lütfen eşya adını yazın.")) { return; }
        if (!doluMu(yer, "Lütfen eşyayı kaybettiğiniz yeri yazın.")) { return; }
        if (!doluMu(tarih, "Lütfen kaybedilme tarihini seçin.")) { return; }
        if (!kodGecerliMi(kod)) { return; }
        if (!kodlarAyniMi(kod, kodTekrar)) { return; }

        basariGoster("Form doğru dolduruldu. İlanın kaydedilmesi 4. haftada eklenecek.");
    });
}


// ---------- 2) Kayıp ilanına yanıt ver (kayip_yanit_ver.html) ----------
const yanitFormu = document.getElementById("yanitFormu");

if (yanitFormu !== null) {
    yanitFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const ilanNo = document.getElementById("ilanNo");
        const teslimYeri = document.getElementById("teslimYeri");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!ilanNoGecerliMi(ilanNo)) { return; }
        if (!doluMu(teslimYeri, "Lütfen eşyayı nereye teslim ettiğinizi yazın.")) { return; }

        basariGoster("Form doğru dolduruldu. Yanıtın kaydedilmesi 6. haftada eklenecek.");
    });
}


// ---------- 3) Kayıp ilanını kaldır (kayip_ilan_kaldir.html) ----------
const kayipKaldirFormu = document.getElementById("kayipKaldirFormu");

if (kayipKaldirFormu !== null) {
    kayipKaldirFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const ilanNo = document.getElementById("ilanNo");
        const kod = document.getElementById("kod");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!ilanNoGecerliMi(ilanNo)) { return; }
        if (!kodGecerliMi(kod)) { return; }

        basariGoster("Form doğru dolduruldu. İlanın kaldırılması 8. haftada eklenecek.");
    });
}


// ---------- 4) Bulunan eşya bildir (bulunan_esya_bildir.html) ----------
const bulunanEsyaFormu = document.getElementById("bulunanEsyaFormu");

if (bulunanEsyaFormu !== null) {
    bulunanEsyaFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const esyaAdi = document.getElementById("esyaAdi");
        const yer = document.getElementById("yer");
        const tarih = document.getElementById("tarih");
        const kod = document.getElementById("kod");
        const kodTekrar = document.getElementById("kodTekrar");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!doluMu(esyaAdi, "Lütfen eşya adını yazın.")) { return; }
        if (!doluMu(yer, "Lütfen eşyayı bulduğunuz yeri yazın.")) { return; }
        if (!doluMu(tarih, "Lütfen bulunma tarihini seçin.")) { return; }
        if (!kodGecerliMi(kod)) { return; }
        if (!kodlarAyniMi(kod, kodTekrar)) { return; }

        basariGoster("Form doğru dolduruldu. Eşyanın kaydedilmesi 6. haftada eklenecek.");
    });
}


// ---------- 5) Eşyam bu, teslim aldım (bulunan_teslim_aldim.html) ----------
const teslimAldimFormu = document.getElementById("teslimAldimFormu");

if (teslimAldimFormu !== null) {
    teslimAldimFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const ilanNo = document.getElementById("ilanNo");
        const teslimAlinanYer = document.getElementById("teslimAlinanYer");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!ilanNoGecerliMi(ilanNo)) { return; }
        if (!doluMu(teslimAlinanYer, "Lütfen eşyayı nereden teslim aldığınızı yazın.")) { return; }

        basariGoster("Form doğru dolduruldu. Bildirimin kaydedilmesi 7. haftada eklenecek.");
    });
}


// ---------- 6) Bulunan eşya ilanını kaldır (bulunan_ilan_kaldir.html) ----------
const bulunanKaldirFormu = document.getElementById("bulunanKaldirFormu");

if (bulunanKaldirFormu !== null) {
    bulunanKaldirFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        mesajiTemizle();

        const kampus = document.getElementById("kampus");
        const ilanNo = document.getElementById("ilanNo");
        const kod = document.getElementById("kod");

        if (!doluMu(kampus, "Lütfen kampüsü seçin.")) { return; }
        if (!ilanNoGecerliMi(ilanNo)) { return; }
        if (!kodGecerliMi(kod)) { return; }

        basariGoster("Form doğru dolduruldu. İlanın kaldırılması 8. haftada eklenecek.");
    });
}
