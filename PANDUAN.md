# DASMOT Accounting — mod offline dan draf

Versi ini mengekalkan fungsi akaun, edit akaun admin, invois SST 8% atas upah, cetakan, semakan staf dan tema pastel. Sambungan MyInvois serta bank belum ditambah.

## Pasang pada hosting

1. Simpan salinan fail aplikasi lama dan eksport **Settings → Sandaran JSON** sebelum menggantikan aplikasi.
2. Ekstrak ZIP. Muat naik SEMUA fail aplikasi dalam folder ini ke folder hosting yang sama: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg` dan tiga fail `icon-*.png`. Jangan muat naik ZIP sahaja.
3. Gunakan pautan **HTTPS** sedia ada, contohnya GitHub Pages. Fail yang dibuka terus daripada Downloads bukan pemasangan PWA.
4. Pakej menggunakan projek Firebase dan struktur `accountingV2/main` sedia ada. Tiada migrasi atau pemadaman rekod. Rules V2 asal masih digunakan; tiada rules yang melonggarkan akses diperlukan untuk mod ini.
5. Log masuk ketika online, buka **Draf offline → Simpanan peranti**, baca penerangan dan pilih **Aktifkan pada peranti ini**.
6. Tunggu mesej **Aplikasi sedia untuk dibuka offline** dan masa salinan dipaparkan. Uji dengan mematikan internet, muat semula dan pilih **Buka salinan offline**.

Untuk ikon di telefon, gunakan fungsi **Add to Home Screen / Tambah ke Skrin Utama** dalam pelayar. Jika aplikasi yang dipasang menggunakan storan berasingan daripada tab pelayar, buka ikon aplikasi dan aktifkan simpanan peranti di situ semasa online. Pemasangan tidak memindahkan data ke peranti lain.

## Cara guna

- **Online:** fungsi simpan biasa masih berjalan. Salinan rekod dikemas kini daripada snapshot server pada peranti yang telah diaktifkan.
- **Offline:** buka salinan peranti. Lihat transaksi, invois dan laporan sedia ada. Masa salinan ditunjukkan; data mungkin belum terkini.
- Draf menyokong transaksi tunai, invois pelanggan, bil pembekal, jurnal dan bayaran dokumen sedia ada. Tetapan, edit akaun, pembalikan, import, kelulusan dan pengurusan staf memerlukan sambungan online.
- Gunakan **Draf offline → Draf transaksi baharu / Draf invois baharu**, atau borang transaksi biasa ketika offline. Tekan **Simpan draf**. Draf tidak mengubah baki, dokumen, laporan atau Firebase.
- Nombor invois pelanggan draf diberikan ketika dipos oleh admin, termasuk ketika admin meluluskan hantaran staf. Bagi bil pembekal, masukkan nombor bil asal pembekal.
- Apabila internet kembali, jika masih dalam salinan offline tekan **Sambung & log masuk**. Tunggu rekod server dimuatkan, buka **Draf offline → Semak → Semak & hantar** bagi setiap draf.
- Admin mempos terus; staf menghantar untuk kelulusan. Tiada penghantaran automatik atau penghantaran latar belakang ketika aplikasi ditutup.
- Rekod semasa disemak semula sebelum dihantar. Jika tempoh sudah dikunci, nombor bil bertindih atau baki bayaran berubah, mesej dipaparkan dan draf yang disahkan belum dipos boleh diedit.
- Jika keputusan penghantaran tidak pasti akibat sambungan terputus, kandungan draf dikunci. Tekan **Semak status / cuba semula**. Pengecam yang sama digunakan supaya percubaan semula tidak mempos dua kali. Jangan cipta salinan draf baharu untuk menggantikan penghantaran yang belum pasti.

## Simpanan dan privasi

- Gunakan peranti peribadi yang dipercayai dan kunci skrin. Salinan rekod dan draf berada dalam IndexedDB pelayar, tanpa penyulitan tambahan oleh aplikasi. Pembukaan salinan offline tidak mengesahkan kata laluan atau akses semasa pada Firebase.
- Salinan ini boleh dibuka oleh sesiapa yang menggunakan profil pelayar sama. Menyahaktifkan staf di Firebase menghalang penghantaran seterusnya, tetapi tidak memadam salinan yang sudah ada pada peranti offline.
- **Keluar** memadam salinan rekod pengguna daripada peranti. Draf kekal, dan muncul semula selepas pengguna yang sama log masuk. Untuk memadam draf yang belum pernah dihantar atau yang sudah disahkan dihantar, gunakan **Semak → Padam draf tempatan**.
- **Padam salinan rekod sahaja** tidak memadam draf. Anda perlu online dan log masuk semula jika tiada lagi salinan rekod untuk dibuka.
- Storan pelayar boleh dipadam atau dihapuskan oleh sistem. Jangan guna mod private/incognito untuk draf penting. Permintaan storan berterusan dibuat, tetapi kelulusan bergantung pada pelayar.
- **Eksport draf JSON** ialah salinan berasingan untuk simpanan/semakan. Versi ini belum mempunyai pemulihan/import draf JSON automatik. Jangan padam salinan asal sebelum penghantaran berjaya.
- Eksport **Sandaran JSON** untuk rekod rasmi secara berkala. Eksport tersebut berasingan daripada draf peranti. Jangan anggap mod offline sebagai sandaran kekal.

## Had dan pengesahan

Ujian sebenar pada pelayar Edge berasaskan Chromium, termasuk saiz skrin telefon: pemasangan service worker, pembukaan semula tanpa internet, simpanan IndexedDB, draf selepas muat semula, edit draf, pengiraan SST dan sekatan penghantaran offline telah lulus.

Ujian simulasi: penghantaran admin/staf, kehilangan respons selepas rekod diterima, pencegahan pendua, pemberian nombor invois, semakan tempoh terkunci, kegagalan storan dan pengasingan draf pengguna telah lulus. Tiada rekod dimasukkan ke Firebase sebenar semasa ujian. Peranti Android/iOS sebenar belum diuji.

Struktur akaun satu dokumen dan had saiz sedia ada dikekalkan. Mod offline tidak menghapuskan had tersebut. Ketika mengemas kini fail hosting pada masa hadapan, kemas kini versi cache dalam `sw.js` jika fail sokongan berubah. Tutup semua tab aplikasi dan buka semula selepas kemas kini; jangan padam storan pelayar untuk memaksa kemas kini jika ada draf belum dihantar.
