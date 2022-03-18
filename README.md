# Trakteer Stream Notification
Kamu bisa mengetahui isi pesan notifikasi pada trakteer kamu dengan script ini!

## Apa ini?
Ini adalah skrip notifikasi stream overlay trakteer, jadi kamu bisa mendapatkan data mentah saat pendonasi mulai mentraktir kamu!

## Data apa saja yang saya dapatkan?
- ID Tip dan ID Notifikasi
- Nama unit traktir kamu
- Icon unit traktir kamu
- Jumlah unit yang ditraktir
- Jumlah uang yang ditraktir
- Nama pendonasi (Supporter)
- Pesan pendonasi
- Foto profile pendonasi

## Bagaimana cara pakainya?
Kamu hanya tinggal mengganti isi pada tag meta **"trakteer_streamkey"** dan **"trakteer_streamkeytest"** sesuai keystream milik mu, dan kamu bisa membuat apapun dengan data yang akan masuk saat seseorang mendonasi.

Lalu pada function **trakteerCall()** pada file trakteer-stream.js bisa ubah semau mu.
### Contoh
```
function trakteerCall(trakteerJson) {
	/// trakteerJson berbentuk data array pendonasi.
	$("#log").append(trakteerJson.supporter_name+' - '+trakteerJson.price+'<br>');
}
```
Pada script diatas akan menulis pendonasi dan jumlah uang yang didonasikan kepada anda pada tag dengan id **log**.

## Yang sudah menggunakan
Coming soon :D