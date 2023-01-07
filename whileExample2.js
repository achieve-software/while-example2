let alınansayi = 1;
let toplam = 0;
while (alınansayi <= 5) {
  const sayi = +prompt("sayıyı gir");
  toplam = toplam + sayi;

  alınansayi++;
}
console.log("ortalama " + toplam / 5);
