function penyebut(nilai: any): string {
  nilai = Math.abs(nilai);
  nilai = parseInt(nilai, 10);
  const huruf = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
  ];
  let temp = '';
  if (nilai < 12) {
    temp = ' ' + huruf[nilai];
  } else if (nilai < 20) {
    temp = penyebut(nilai - 10) + ' belas';
  } else if (nilai < 100) {
    temp = penyebut(nilai / 10) + ' puluh' + penyebut(nilai % 10);
  } else if (nilai < 200) {
    temp = ' seratus' + penyebut(nilai - 100);
  } else if (nilai < 1000) {
    temp = penyebut(nilai / 100) + ' ratus' + penyebut(nilai % 100);
  } else if (nilai < 2000) {
    temp = ' seribu' + penyebut(nilai - 1000);
  } else if (nilai < 1000000) {
    temp = penyebut(nilai / 1000) + ' ribu' + penyebut(nilai % 1000);
  } else if (nilai < 1000000000) {
    temp = penyebut(nilai / 1000000) + ' juta' + penyebut(nilai % 1000000);
  } else if (nilai < 1000000000000) {
    temp =
      penyebut(nilai / 1000000000) + ' milyar' + penyebut(nilai % 1000000000);
  } else if (nilai < 1000000000000000) {
    temp =
      penyebut(nilai / 1000000000000) +
      ' trilyun' +
      penyebut(nilai % 1000000000000);
  }
  return temp;
}

function terbilang(nilai: number): string {
  let hasil = '';
  if (nilai < 0) {
    hasil = 'minus ' + penyebut(nilai.toString().trim());
  } else {
    hasil = penyebut(nilai.toString().trim());
  }
  return hasil.replace(/ +(?= )/g, '');
}
