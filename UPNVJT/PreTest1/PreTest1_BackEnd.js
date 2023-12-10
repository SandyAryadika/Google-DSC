//back-end preTest 1

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pilihanAcak() {
    const pilihan = ["gunting", "batu", "kertas"];
    const angkaAcak = Math.floor(Math.random() * pilihan.length);
    return pilihan[angkaAcak];
}

console.clear();

console.log("Permainan Gunting, Batu, Kertas!");

readline.question("Pilihan Pemain: ", (hasil) => {
    const pilihanPemain = hasil;
    const pilihanKomputer = pilihanAcak();

    console.log("Pilihan Komputer: " + pilihanKomputer);

    if (pilihanPemain == "gunting" && pilihanKomputer == "kertas"){
        console.log("Pemain Menang!");
    } else if (pilihanPemain == "batu" && pilihanKomputer == "gunting"){
        console.log("Pemain Menang!");
    } else if (pilihanPemain == "kertas" && pilihanKomputer == "batu"){
        console.log("Pemain Menang!");
    } else if (pilihanPemain == pilihanKomputer){
        console.log("Seimbang!");
    } else {
        console.log("Komputer Menang!");
    }

    readline.close();
});