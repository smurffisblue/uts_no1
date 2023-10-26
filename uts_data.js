// data.js (Lapisan Data)
function fetchDataFromURL(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Terjadi kesalahan: ' + response.status);
            }
            return response.json();
        });
}
