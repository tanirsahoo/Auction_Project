function fetchAuctionData() {
    fetch('http://localhost:5000/items')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
              
                const auctionItem = document.createElement('div');
                auctionItem.classList.add('item');
              
                const img = document.createElement('img');
                img.src = `/Tanir_Frontend_Work/Media_Files/${item['imageUrl']}`;
                img.alt = "Auction Item";
              
                const h3 = document.createElement('h3');
                h3.textContent = item['name'];
              
                const startingBid = document.createElement('p');
                startingBid.classList.add('Starting_bid');
                startingBid.textContent = "Starting Bid: $" + item['startingPrice'];
              
                const currentBid = document.createElement('p');
                currentBid.classList.add('Current_bid');
                currentBid.textContent = "Current Highest: $" + 0;
              
                const button = document.createElement('button');
                // button.onsubmit = 'item.html' ;
                button.textContent = "Enter Live Auction";
              
                auctionItem.appendChild(img);
                auctionItem.appendChild(h3);
                auctionItem.appendChild(startingBid);
                auctionItem.appendChild(currentBid);
                auctionItem.appendChild(button);
              
                document.getElementById('items_put_inside_id').appendChild(auctionItem);
              }
        })
        .catch(error => console.error('Error fetching auction data:', error));
}
fetchAuctionData();