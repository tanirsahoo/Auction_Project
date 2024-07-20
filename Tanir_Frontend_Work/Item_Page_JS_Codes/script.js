function getQueryParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "=([^&#]*)");
    var results = regex.exec(url);
    if (!results) return null;
    return results[1].replace(/\+/g, " ");
  }
  let itemId = getQueryParam('item_id');
function loadAuctionItem() {
    fetch(`http://localhost:5000/items/${itemId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('item-image').src = `/Tanir_Frontend_Work/Media_Files/${data['imageUrl']}`;
            document.getElementById('item-image').alt = "Auction Item";
            document.getElementById('item-title').innerText = `${data['name']}`;
            document.getElementById('item-description').innerText = `${data['description']}`;
            document.getElementById('current-highest-bid').innerText = data.current_highest_bid.toFixed(2);
                console.log(data);
        })
        .catch(error => console.error('Error fetching auction data:', error));
}
function placeBid() {
    const bidAmount = parseFloat(document.getElementById('bid-amount').value);
    if (isNaN(bidAmount) || bidAmount <= 0) {
        document.getElementById('message').innerText = 'Please enter a valid bid amount.';
        return;
    }

    fetch(`/item/${itemId}/place_bid`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bid_amount: bidAmount })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('message').innerText = data.error;
        } else {
            document.getElementById('message').innerText = data.message;
            document.getElementById('current-highest-bid').innerText = data.current_highest_bid.toFixed(2);
            document.getElementById('bid-amount').value = '';
        }
    })
    .catch(error => {
        console.error('Error placing bid:', error);
        document.getElementById('message').innerText = 'Error placing bid.';
    });
}

document.addEventListener('DOMContentLoaded', loadAuctionItem);