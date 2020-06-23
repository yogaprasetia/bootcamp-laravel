var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

function dataRow(items) {
var content = "<div class='row'>"
    for (var i = 0; i < items.length; i++) {
        content += "<div class='col-md-4 my-4'>"
        content += "<div class='card'>"
        content += "<div class='embed-responsive embed-responsive-4by3'>"
        content += "<img src='"+items[i][4]+"'class='card-img-top embed-responsive-item' alt='"+items[i][1]+"'>"
        content += "</div>"
        content += "<div class='card-body'>"
        content += "<h5 class='card-title' id='itemName'>"+items[i][1]+"</h5>"
        content += "<p class='card-text' id='itemDesc'>"+items[i][3]+"</p>"
        content += "<p class='card-text' id='temPrice'>Rp "+items[i][2]+"</p>"
        content += "<a href='#' class='btn btn-primary' id='addCart' onclick='onClick()'>Tambahkan ke keranjang</a>"
        content += "</div>"
        content += "</div>"
        content += "</div>"
    }
    content += "</div>"
    return content;
}

var klik = 0;
function onClick() {
    klik += 1;
    document.getElementById("total").innerHTML = klik;
};

var formItem = document.getElementById("formItem")
var searchItem = document.getElementById("keyword")
formItem.addEventListener("submit", function (e) {
    e.preventDefault()
    let bigItems = []
    for (let i = 0; i < items.length; i++) {
        let c = 0
        for (let j = 0; j < items[i].length; j++) {
            if (items[i][j].toString().toLowerCase().indexOf(searchItem.value.toLowerCase()) != -1) c++
        }
        if (c > 0)
            bigItems.push(items[i]);
    }

    document.getElementById('listBarang').innerHTML = dataRow(bigItems);
})
document.getElementById('listBarang').innerHTML = dataRow(items);