document.getElementById('mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });

    if (navLinks.classList.contains('active')) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
        navLinks.style.maxHeight = null;
    }
});
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = null;

        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.remove('active');
        });
    });
});



function fetchAuctionData() {
    fetch('http://localhost:8090')
        .then(response => response.json())
        .then(data => {
            const auctionItem = document.createElement('div');
            auctionItem.classList.add('item');

            const img = document.createElement('img');
            img.src = "/Tanir_Frontend_Work/Media_Files/item1.png";
            img.alt = "Item 1";

            const h3 = document.createElement('h3');
            h3.textContent = data.title;

            const startingBid = document.createElement('p');
            startingBid.classList.add('Starting_bid');
            startingBid.textContent = "Starting Bid: $" + data.startingPrice;

            const currentBid = document.createElement('p');
            currentBid.classList.add('Current_bid');
            currentBid.textContent = "Current Highest: $" + (data.currentBid || data.startingPrice);

            const button = document.createElement('button');
            button.textContent = "Enter Live Auction";
            auctionItem.appendChild(img);
            auctionItem.appendChild(h3);
            auctionItem.appendChild(startingBid);
            auctionItem.appendChild(currentBid);
            auctionItem.appendChild(button);
            document.getElementById('auction_item_add').appendChild(auctionItem);
        })
        .catch(error => console.error('Error fetching auction data:', error));
}
fetchAuctionData();


document.getElementById('auction1').addEventListener('click', () => {
    window.location.href = 'item.html';
});

