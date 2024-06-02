const itemId = 1;

function loadAuctionItem() {
    fetch(`/item/${itemId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('item-image').src = `images/${data.id}.jpg`;
            document.getElementById('item-image').alt = data.title;
            document.getElementById('item-title').innerText = data.title;
            document.getElementById('item-description').innerText = data.description;
            document.getElementById('current-highest-bid').innerText = data.current_highest_bid.toFixed(2);
        })
        .catch(error => {
            console.error('Error loading auction item:', error);
            document.getElementById('message').innerText = 'Error loading auction item.';
        });
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