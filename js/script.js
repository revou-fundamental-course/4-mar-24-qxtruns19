
// Function untuk menghitung BMI dan interpretasi BMI menggunakan rumus

function hitungBMI() {
    var berat = document.querySelector("#weight").value;
    var tinggi = document.querySelector("#height").value;
    //var umur = document.querySelector("#age").value;

    if (berat == "" || tinggi == "") {
        alert("Form harap diisi!");
        return;
    }

    tinggi = tinggi / 100;
    var bmi = berat / (tinggi * tinggi);

    bmi = bmi.toFixed(1);

    //dapatkan hasil
    document.querySelector("#hasil").innerHTML = bmi;

    var status = "";

    //proses perhitungan
    if (bmi < 18.5) {
        status = 'Kekurangan Berat Badan';
        document.getElementById("saran1").innerHTML =
            "<li><span>Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan </span></li>";
        document.getElementById("saran2").innerHTML =
            "<li><span>Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan </span></li>";
        document.getElementById("saran3").innerHTML =
            "<li><span>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat </span></li>";;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal (Ideal)';
        document.getElementById("saran1").innerHTML =
            "<li><span>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal </span></li>";
        document.getElementById("saran2").innerHTML =
            "<li><span>Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu </span></li>";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Kelebihan Berat Badan';
        document.getElementById("saran1").innerHTML =
            "<li><span>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal </span></li>";
        document.getElementById("saran2").innerHTML =
            "<li><span>Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu </span></li>";
    } else {
        status = 'Kegemukan (Obesitas)';
        document.getElementById("saran1").innerHTML =
            "<li><span>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik </span></li>";
        document.getElementById("saran2").innerHTML =
            "<li><span>Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda </span></li>";
    }


    //hasil
    document.querySelector(
        ".comment"
    ).innerHTML = `<span id="comment">${status}</span>`;

};



function clearBMI() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("saran1").innerHTML = "";
    document.getElementById("saran2").innerHTML = "";
    document.getElementById("saran3").innerHTML = "";
    document.getElementById("hasil").innerHTML = "";
    document.querySelector(".comment").innerHTML = "";
    window.location.href = '#datapengguna';

}