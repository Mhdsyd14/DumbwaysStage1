function submitData(){
    let name = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("nomor").value
    let subject = document.getElementById("option").value
    let message = document.getElementById("pesan").value

    if (name === "") {
        return alert('Isi nama dulu sayang')
    } else if (email === "") {
        return alert('Isi email dulu sayang')
    } else if (phone === "") {
        return alert('isi nomor dulu sayang')
    } else if (subject === "") {
        return alert('pilih posisi dulu sayang')
    } else if (message === "") {
        return alert('isi pesan dulu sayang')
    }
}