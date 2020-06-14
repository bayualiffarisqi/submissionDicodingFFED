# submissionDicodingFFED
ini merupakan web yang di gunakan untuk submission dicoding fundamental we, baca readme untuk menggunakanya

Pada project ini bahasa yang digunakan adalah javascript dengan memanfaatkan webpack untuk module bundler
menggunakan npm(node package management) dan menggunakan omdb-api untuk menggunakan datanya

# step menggunakanya
sbelum menggunakan prgram ini pastikan sudah menginstal npm atau node.js sekalian.
jika tidak terbiasa menggunakan node.js, install visual studio code dan install extension live server pada vscode.
#
1. clone seluruh folder
2. buka program dengan menggunakan visual studio code(recomend) atau yang yang lainya.
3. buka new terminal pada vscode
4. install seluruh package yang diperlukan, (bisa dilihat di folder pakacge.json pada bagian devDependencies)
4. ketik pada terminal perintah di bawah 
     -npm install 
   atau bisa juga dengan 
     -npm install @babel/core @babel/preset-env babel-loader copy-webpack-plugin css-loader html-loader html-webpack-plugin style-loader 
     webpack webpack-cli webpack-dev-server webpack-merge --save-dev
   atau download satu satu
     -npm install @babel/core --save-dev
    
   jika mengalami eror, ketik
     -npm clean chace --force
   kemudian instal kembali package yang eror saat di install
6. setelah semua package terinstall ketik kempali perintah berikut untuk menjalankan program
     -npm run start-dev
7. selesai, program akan terbuka otomatis di browser

instagram : @aliffarisqi

