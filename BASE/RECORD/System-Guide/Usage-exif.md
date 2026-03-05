
---

# Nge-EXIF aset-aset untuk per-Sampel-an

Setiap aset-aset untuk Sampel, itu adalah wajib diperhatikan juga Metadata-nya.

Ini bertujuan agar file dapat diliat lebih mendetil, jadi banyak bacaannya enak pula.

## Pembukaan

Setiap dari file-file aset yang ada, hal pertama yang harus di-cek adalah, bahwa antara format file secara nama dan metadata, itu sudah pas.

Minimal, pas ngecek metadata-nya, isi detil-nya kalo harus scroll puluhan kali untuk menyelesaikan bacanya, mending skip aja. Udah pasti metadata-nya itu panjang banget.

- Gunakan ini, untuk ngeliat semuanya secara mendetil.

```txt
exiftool -a -u -g1 FILE_NAME.png
```

- Gunakan ini juga, untuk ngeliat, bahwa file PNG beneran PNG atau malah lain.

```txt
  [#] Cek semua tanpa terkecuali
exiftool -r -ext png -FileType -FileTypeExtension -MIMEType .
```

```txt
  [#] Cek semua, secara sesuai filter-an
exiftool -r -ext png -if '$FileType ne "PNG"' -FilePath -FileType .
exiftool -r -ext png -FileType . | sort | uniq -c
|
exiftool -r -ext png -if '$FileType ne "PNG"' \
-p '${Directory#./BASE/}/$FileName => $FileType' .
```

```txt
  [#] Convert semua nyamar palsu itu semua
exiftool -r -ext png -if '$FileType eq "WEBP"' -p '$FilePath' . | while read f; do
  convert "$f" "${f}.png" && mv -f "${f}.png" "$f"
done
|
exiftool -r -ext png -if '$FileType ne "PNG"' -p '$FilePath' . | while read f; do
  convert "$f" "${f}.png" && mv -f "${f}.png" "$f"
done
```

## Tujuan standar metode EXIF-ing

- Setiap-nya (terutama PNG) wajib memiliki:

> - "**AuthorName**"
> - "**ImageFrom**"
> - "**AuthorLink**"
> - "**ImageLink**"

- PNG-nya ada yg perlu dan opsional aja untuk ditambah.

> Perlu ditambah:
>
> - "**Title**"
> - "**Author**"
> - "**Copyright**"
>
> Opsional ntar-ntaran aja:
>
> - "**Description**"
> - "**Comment**"

```txt
[REJECTED]
Maaf, ini seharusnya cuma bisa berlaku, terutama kepada jika file adalah baru saja editan dari "paint.net".
|
Kebanyakan file aset yang jika dari donlot-an web, maka itu skip saja. Jangan diubah apapun Metadata-nya.

[05/03/2025]
Semua file aset harus di-sama-rata-kan per-Metadata-nya.
Cobalah melihat pada 2 file ("example-original.png" dan "example-standard.png") untuk melihat standar detil-nya.
```

- Standarisasi aset-aset Sample (PNG)

Sebuah file yg PNG itu, pertama harus sesuai dengan tipe-nya (PNG ya tipe-nya adalah PNG, lah). Maka berikutnya, file PNG itu wajib Metadata-nya memiliki seperti "ExifTool", "System", "File", "PNG", dan "Composite".

Ini adalah metadata yang sebaiknya dihapus aja.

> - **PNG-pHYs**

Yang ini kayaknya bakalan ada terus deh.  
(Semoga bisa dihapus lah...)

> - **ExifIFD**
> - **InteropIFD**

```txt
  [#] Cobalah
pngcrush -rem pHYs FILE_NAME.png BASE/SCRATCH/FILE_NAME.png
exiftool -a -u -g1 BASE/SCRATCH/FILE_NAME.png
|
"PINDAHIN MANUAL KE TEMPAT FILE LAGI BERADA"
"[TIMPA/REPLACE] AJA"
|
exiftool -a -u -g1 FILE_NAME.png

.
```

- [**Original Example**](/example-original.png)
- [**Standard Example**](/example-standard.png)

## List nge-EXIF untuk mempermudah

Menanti...

- Edit pokok Metadata aset-aset per-Sampel-an

```py
exiftool -config .sys/exif-img_data.config -overwrite_original \
-XMP-Sec_Res:AuthorName="Who is Author Name" \
-XMP-Sec_Res:ImageFrom="Where Image is From" \
-XMP-Sec_Res:AuthorLink="author-link.com" \
-XMP-Sec_Res:ImageLink="image-link.com" \
FILE_NAME.png
```

---

- Edit file personal Metadata aset-aset per-Sampel-an (keseluruhan)

```py
exiftool -overwrite_original \
-Title="Image Title" \
-Author="Author of [The Image]" \
-Copyright="[Author] - [AtPublished]" \
-Description="[Description is also optional]" \
-Comment="[Comment is also optional]" \
FILE_NAME.png
```

- Bagian opsional

```py
exiftool -overwrite_original \
-Description="Tuliskan deskripsi" \
-Comment="Tuliskan komen-nya" \
FILE_NAME.png
```

- Singkat-Sikat semuanya

```py
exiftool -config .sys/exif-img_data.config -overwrite_original \
-Title="Image Title" \
-Author="Author of [The Image]" \
-Copyright="[Author] - [AtPublished]" \
-Description="[Optional, can descript later]" \
-Comment="[Optional, can comment later]" \
-XMP-Sec_Res:AuthorName="Who is Author Name" \
-XMP-Sec_Res:ImageFrom="Where Image is From" \
-XMP-Sec_Res:AuthorLink="author-link.com" \
-XMP-Sec_Res:ImageLink="image-link.com" \
FILE_NAME.png
```

---

## Pengakhiran

Setelah itu semua, jangan lupa untuk mengecek kembali gambar tersebut!

- Bilamana terdapat terkopas sehingga ada file lain (misalnya ada jadi "*.png_original*"), cobalah untuk menghapus-nya saja.

Selain itu, jangan lupa pula...

**SETIAP FILE, WAJIB PERMISSION-NYA BUKAN "666"!**  

- **WAJIB**:

> - ***File***: (*644*) - (*-rw-r--r-*)-//-(*1*)
> - ***Folder***: (*755*) - (*drwxr-xr-x+*)-//-(*4*)

Jadi, dimohon untuk menggunakan ini!  
Harus setiap-nya seperti itu.

```txt
  [#] Eksekusi: Cek apakah {masih ada 666} atau {ada yg tidak 644/755}
find . -path "./.git" -prune -o
|
find . -path "./.git" -prune -o -perm 0666
|
find . -path "./.git" -prune -o -type f -perm 0666 -ls
find . -path "./.git" -prune -o -type f ! -perm 0644
find . -path "./.git" -prune -o -type d -perm 0666 -ls
find . -path "./.git" -prune -o -type d ! -perm 0755
find . -path "./.git" -prune -o -perm 0666 -ls
|
find . \( -type f -perm 0666 -ls -o -type f ! -perm 0644 -o -type d -perm 0666 -ls -o -type d ! -perm 0755 \)

  [#] Eksekusi: Mengubah semuanya
find . -path "./.git" -prune -o -exec chmod u=rwX,go=rX {} +
```

---

Sepertinya dalam penanganan ini, emang perlu sedikit mikir secara kerja keras ya...

*GANBATTE~, AAYANK!*

<!--
  [BEGIN]
  Disemangatin tuh, SEMANGAT
-->
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/a1a_GFB.png"
alt="BTC.GFB - Kafuu Chino" width="100">
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/b2b_SJL.png"
alt="BTC.SJL - Jouga Maya" width="100">
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/c3c_AVD.png"
alt="BTC.AVD - Natsu Megumi" width="100">
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/d04_MiRaKa.png"
alt="BTC.MiRaKa - Jinja Eru" width="100">
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/e05_HuPaWi.png"
alt="BTC.HuPaWi - Jinja Natsume" width="100">
<img draggable="false" title=""
src="/BASE/ASSETS/Assets-Main/BTC-Sign/ff6_CloTriEld.png"
alt="BTC.CloTriEld - Fuiba Fuyu" width="100">
<!--
  [END]
  Disemangatin tuh, SEMANGAT
-->

> *Ciaoo...*

---

<!--
{#}
  exiftool -all= -overwrite_original FILE_NAME.png
  |
  exiftool -all= -overwrite_original -r BASE/ASSETS
  exiftool -all= -overwrite_original -r -ext png BASE/ASSETS

  pngcrush -ow -rem allb file.png
{#}
-->