// controller.js (JavaScript Kontroler)
document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener("click", fetchData);
});

function fetchData() {
    const url = document.getElementById("urlInput").value;
    
    fetchAndProcessData(url)
        .then(data => {
            const table = generateTableHTML(data);
            displayTable(table);
        })
        .catch(error => {
            console.error(error);
        });
}

function generateTableHTML(data) {
    let html = "<table><tr>";
    
    // Ambil properti pertama sebagai header kolom
    for (let key in data[0]) {
        html += "<th>" + key + "</th>";
    }
    
    html += "</tr>";

    // Iterasi melalui setiap objek dalam data
    data.forEach(obj => {
        html += "<tr>";
        
        // Iterasi melalui properti objek dan tambahkan nilainya ke dalam sel
        for (let key in obj) {
            html += "<td>" + obj[key] + "</td>";
        }
        
        html += "</tr>";
    });

    return html + "</table>";
}


function displayTable(tableHTML) {
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = tableHTML;
}
