---
Peraturan Sampel
---
Ini adalah peraturan-peraturan penting yang harus ditaati dalam pembuatan pembentukan Sampel disini.

---

Isi Aturan
---
### A. **Penamaan File**

1. **Nama File Isi Sampel** <br>
Untuk menamai File (yang menunjukkan isi Sampel), **WAJIB** untuk menamainya berdasarkan **'FirstList_Sign_QFM'**!
> **FirstList_Sign_QFM** itu:

>> (**MuchOrderyName**) <br>
>> "**Jumlah Nama Data** (*FuncDataName*)" + "**Jumlah Gelar-Gelar Data** (*FuncDataCodeName*)"

>> (**nnXn**) <br>
>> **Inisial huruf/angka, karakter awal dari Nama Data** (*Identificicative*)

>> (**nnnX**) <br>
>> **Tingkat urutan berdasarkan angka** (*TyperListData*)-([***a-z***], yang kecil)

- Contoh: <br>
[ ***69Ei*** ]

> [***69***] <br>
>> Misalnya panjang namanya kemungkinan sekitar ***14***. <br>
>> Misalnya panjang semua gelarnya kalo disatuin, jadinya ***55***.

>> Selain namanya, juga punya gelar seperti: <br>
>> "*Smothie yang sejuk*, *Pengenyang Perut*, dan *Nirhabisan*".

>> Gelar itu semua, kurang lebih sekitar **55**. <br>
>> Maka bila ditambah **(14 + 55)**, maka hasilnya adalah **69**.

> [***E***] <br>
> Misalnya namanya '***Elegian Smothie***'.

> [***i***] <br>
> Misalnya, dia berada di 'baris ke-*9*' dalam tampungan BTC-nya, maka dia jadinya di '***i***'.

> - Untuk '*FirstList_Sign_QFM*', bisa ditemukan pada [***'Sampel Memori 2'***](https://docs.google.com/spreadsheets/d/1zLfmoWbyX3uObGxpigM-m-7OviPcki7hWT1SjPG9ZI8/edit?usp=sharing).

2. **Nama File Daftar Sampel** <br>
Kenapa ini penting? Agar nanti kalo mau masuk ke File Manager, biar gampang ***Auto-Sort***-nya. <br>
Kenapa harus ada Auto-Sort? Agar enak pas nyarinya.
- Pertama:
> **Xxxx** <br>
> Ini adalah kode pertama. Ini harus ikut dengan penamaan folder.

> **xXXX** <br>
> Ini adalah kode kedua. Ini harus ikut dengan penamaan folder, tapi dengan tiga digit.

Tiga jenis struktur yang dituliskan disini:
```
Bunch:
a001

Type:
b0XX

Category:
cXXX
```

- Kedua:
> Kalo ini namain langsung. Tapi gak langsung namain. Harus mengikuti sebagai berikut:

>> - Bunch <br>
>> By-KR_Name

>> - Type <br>
>> BTC_[***B***][***T***]

>> - Category <br>
>> Kalo ini dibagi 2:
```
Bagian 'A':
Ini lah isi dari tiap-tiap pertandingan dalam satu turnamen.
- [B][T]'[C]-[Penamaan_BunchType]-[Category]

Bagian 'B':
Ini lah isi dari tiap-tiap 5616 Sampel.
- [B][T]'[C]_[Nomor_ID]-[FirstList_Sign_QFM]
> 'Nomor_ID' harus 4 digit. Maka kalo kurang dari, awalannya harus '0'.
```

3. **Nama File ...** <br>
x


## B. Penamaan Folder
Kayak namanya, "**Folder**". Yang artinya, menyimpan banyak file-file, bahkan folder itu sendiri.

1. **Folder Utama** <br>
Folder utama disini ialah
> ***"Main Sample"*** <br>
Isinya adalah tentang para Sampel-Sampel. Jadi folder ini adalah folder utama disini.

Maka mereka dinamai dengan inisialis yang ke-sort:
- Pertama
> '***Xx***' <br>
> Ini adalah kode pertama berbentuk huruf. Ini mengidentifikasi urutan satuan kelompok.
```
- 'a' untuk 'B', "Bunch".
- 'b' untuk 'T', "Type".
- 'c' untuk 'C', "Category".
```

> '***xX***' <br>
> Ini adalah kode kedua berbentuk angka satu digit. Fungsinya sebagai indikator urutan ke-berapa folder ini.
```
Misalnya: [GPaB]
Maka:
- Awalannya [G], itu "Gaster", maka urutannya yang pertama, jadi '1' dalam Bunch.
- Tengahnya [Pa], itu "Paperbag", maka urutannya yang pertama, jadi '5' dalam Type.
- Akhirannya [B], itu "Blaster", maka urutannya yang pertama, jadi '1' dalam Category.
```
> - Berdasarkan contoh tadi, kalo dibaca, mengartikan "Bunch: Gaster".
>> Maka artinya, adalah:
>> - '***a1***'.
>> - '***b15***'.
>> - '***c151***'.

- Kedua
> '***Xxx***' <br>
> Ini adalah kode pertama berbentuk huruf. Ini mengidentifikasi satuan kelompok (BTC).
```
- 'B' untuk "Bunch".
- 'T' untuk "Type".
- 'C' untuk "Category".
```

> '***xXX***' <br>
> Ini adalah kode kedua berbentuk angka dua sampai tiga digit. Ini sebagai indikator urutan BTC-nya.
```
Misalnya: [GPaB]
Maka:
> 'G'-aster = '1' (Bunch)
> 'Pa'-perbag = '5' (Type)
> 'B'-laster = '1' (Category)
Artinya: [151]
```
> - Berdasarkan contoh tadi, kalo dibaca, mengartikan "**Gaster**-**Paperbag**-**Blaster**".
>> Maka artinya, adalah:
>> - '***B001***'.
>> - '***T015***'.
>> - '***C151***'.

- Ketiga
Ini adalaha penamaan langsung. <br>
Tapi perlu diingat! Bahwa:
> Bunch, harus disertakan seperti '***Kamen Rider***'. Boleh disingkat saja, jadinya '*KR*'. <br>
> - Penamaan: '*KR*_***Nama***'

> Type, kali ini harus didahului oleh '*nama* **Rider**'. Seperti berikut: <br>
> - Penamaan: '*Rider*_***Type***'

> Category, dahulukan cara penulisan Type seperti diatas, lalu pisahkan dengan [ *'* ]. <br>
> - Penamaan: '*Rider_Type*'***Category***'

#### Maka kalo digabungkan itu semua:
```
Bunch:
?X_B00X-KR_Nama

Type:
?XX_T0XX-Rider_Type

Category:
?XXX_CXXX-Rider_Type'Category
```

2. **Folder Gambar** <br>
Ini udah pasti banget, bahwa ini adalah source gambarnya.


## C. Format Isi dalam File
1. **Format Isi Sampel** <br>
Kalo mau ngisi tentang sampel-nya, harus di-formati seperti ini. Agar dapat dibaca dengan jelas dan enak.
```
Header 1#: Indikator Simbolik

Tabel Tengah:
---
[Tanda untuk Bunch] - [Tanda untuk Type] - [Tanda untuk Category]
[Simbol untuk Bunch] - [Simbol untuk Type] - [Simbol untuk Category]
---

-- Batas --
Header 1#: Ilustrasi Default
Gambar Tengah: Ini adalah opsional. Kalo ada gambarnya, silahkan taruh. Kalo gak ada gambarnya, gak usah ditaruh, biarin aja.
[Gambar Ilustrasi, yang di 'Basic', jangan yang 'Other']

-- Batas --
Header 1#: Informasi Data
ID: XXXX
Name: Nama Sampel-nya
Bunch: Samakan dengan File dan Folder
Type: Samakan dengan File dan Folder
Category: Samakan dengan File dan Folder
Segment: Sampel-nya di segmen mana
List: Urutan ke berapa berdasarkan huruf [a-z] (Untuk ini, liat pada nama File-nya! yakni kode terakhir pada nama File-nya, itu sebelum nama format-nya [.md])
-- Batas --
Header 1#: Penjelasan Umum

-- Batas --
Header 1#: CS

-- Batas --
```

2. **Coming soon** <br>
X
.

## D. Nanti dulu...
x

1. **Coming soon** <br>
x
