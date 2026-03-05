
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

[#] Cek semua, secara sesuai filter-an
exiftool -r -ext png -if '$FileType ne "PNG"' -FilePath -FileType .
exiftool -r -ext png -FileType . | sort | uniq -c
|
exiftool -r -ext png -if '$FileType ne "PNG"' \
-p '${Directory#./BASE/}/$FileName => $FileType' .

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
Maaf, ini seharusnya cuma bisa berlaku, terutama kepada jika file adalah baru saja editan dari "paint.net".

Kebanyakan file aset yang jika dari donlot-an web, maka itu skip saja. Jangan diubah apapun Metadata-nya.
```

## List nge-EXIF untuk mempermudah

Menanti...

- Edit pokok Metadata aset-aset per-Sampel-an

```py
exiftool -overwrite_original -config .sys/exif-img_data.config \
-XMP:AuthorName="Who is Author Name" \
-XMP:ImageFrom="Where Image is From" \
-XMP:AuthorLink="author-link.com" \
-XMP:ImageLink="image-link.com" \
FILE_NAME.png
```

---

- Edit file personal Metadata aset-aset per-Sampel-an (keseluruhan)

```py
exiftool -overwrite_original \
-Title="Image Title" \
-Author="Author of [The Image]" \
-Copyright="[Author] - [AtPublished]" \
-Description="[Opsional]" \
-Comment="[Opsional]" \
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
exiftool -overwrite_original -config .sys/exif-img_data.config \
-Title="Image Title" \
-Author="Author of [The Image]" \
-Copyright="[Author] - [AtPublished]" \
-Description="[Opsional]" \
-Comment="[Opsional]" \
-XMP:AuthorName="Who is Author Name" \
-XMP:ImageFrom="Where Image is From" \
-XMP:AuthorLink="author-link.com" \
-XMP:ImageLink="image-link.com" \
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

> *Ciaoo...*

---
