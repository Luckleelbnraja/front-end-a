// Buatlah fungsi untuk menghitung BMI (Body Mass Index)
// Rumus : BMI = berat / (tingi*tinggi),
// berat dalam kg dan tinggi dalam meter
//


// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    // Konversi tinggi dari cm ke meter
    let heightInMeters = height / 100;
    
    // Hitung BMI
    let bmi = weight / (heightInMeters * heightInMeters);
    
    return bmi.toFixed(2); // Mengembalikan hasil BMI dengan 2 desimal
}

// Fungsi untuk menampilkan hasil BMI
function displayBMI() {
    // Ambil nilai berat dan tinggi dari input
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    
    // Hitung BMI dengan memanggil fungsi calculateBMI
    let bmi = calculateBMI(weight, height);
    
    // Tampilkan hasil BMI
    document.getElementById('result').innerText = BMI Anda adalah: ${bmi};
}

// Menghubungkan fungsi displayBMI dengan tombol "Hitung BMI"
let button = document.getElementById('calculateButton');
button.addEventListener('click', displayBMI);