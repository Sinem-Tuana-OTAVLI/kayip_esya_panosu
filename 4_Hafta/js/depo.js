const ANAHTAR_KAYIP_ILANLARI = "kayipIlanlari";
const ANAHTAR_KAYIP_SAYACLARI = "kayipIlanSayaclari";

function listeyiOku(anahtar) {
    const metin = localStorage.getItem(anahtar);
    if (metin === null) {
        return [];
    }
    try {
        const liste = JSON.parse(metin);
        return Array.isArray(liste) ? liste : [];
    } catch (hata) {
        return [];
    }
}

function listeyiKaydet(anahtar, liste) {
    localStorage.setItem(anahtar, JSON.stringify(liste));
}

function nesneyiOku(anahtar) {
    const metin = localStorage.getItem(anahtar);
    if (metin === null) {
        return {};
    }
    try {
        const nesne = JSON.parse(metin);
        return (nesne !== null && typeof nesne === "object" && !Array.isArray(nesne)) ? nesne : {};
    } catch (hata) {
        return {};
    }
}

function sonrakiIlanNoyuHesapla(sayacAnahtari, kampus) {
    const sayaclar = nesneyiOku(sayacAnahtari);
    const sonNo = Number(sayaclar[kampus]) || 0;
    return sonNo + 1;
}

function ilanNoyuSayacaYaz(sayacAnahtari, kampus, no) {
    const sayaclar = nesneyiOku(sayacAnahtari);
    sayaclar[kampus] = no;
    localStorage.setItem(sayacAnahtari, JSON.stringify(sayaclar));
}

function kayipIlaniKaydet(bilgi) {
    const no = sonrakiIlanNoyuHesapla(ANAHTAR_KAYIP_SAYACLARI, bilgi.kampus);

    const ilan = {
        no: no,
        kampus: bilgi.kampus,
        esyaAdi: bilgi.esyaAdi,
        yer: bilgi.yer,
        tarih: bilgi.tarih,
        aciklama: bilgi.aciklama,
        kod: bilgi.kod,
        olusturma: new Date().toISOString()
    };

    ilanNoyuSayacaYaz(ANAHTAR_KAYIP_SAYACLARI, bilgi.kampus, no);

    const ilanlar = listeyiOku(ANAHTAR_KAYIP_ILANLARI);
    ilanlar.push(ilan);
    listeyiKaydet(ANAHTAR_KAYIP_ILANLARI, ilanlar);

    return ilan;
}