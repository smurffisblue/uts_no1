function fetchAndProcessData(url) {
    return fetchDataFromURL(url)
        .then(data => {
            console.log(data); // Tampilkan data di konsol untuk pemeriksaan
            return data;
        })
        .catch(error => {
            throw new Error('Terjadi kesalahan saat mengambil data: ' + error.message);
        });
}
