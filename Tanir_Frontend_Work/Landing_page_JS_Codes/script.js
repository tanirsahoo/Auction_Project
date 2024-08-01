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
    fetch('http://localhost:5000/items')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 6; i++) {
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
                button.textContent = "Enter Live Auction";
                button.addEventListener('click', () => {
                    window.location.href = `item.html?item_id=${item['itemId']}`;
                });

                auctionItem.appendChild(img);
                auctionItem.appendChild(h3);
                auctionItem.appendChild(startingBid);
                auctionItem.appendChild(currentBid);
                auctionItem.appendChild(button);

                document.getElementById('auction_item_add').appendChild(auctionItem);

            }
        })
        .catch(error => console.error('Error fetching auction data:', error));
}
fetchAuctionData();

document.getElementById('view_more_button').addEventListener('click', () => {
    window.location.href = 'auction_items.html';
});

document.getElementById('auction1').addEventListener('click', () => {
    window.location.href = 'item.html';
});

function feedback_submit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    var formData = {
        email_id: email,
        username: name,
        feedback: message
    };
    try {
        fetch('http://localhost:5000/feedback/feedbackin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (response.ok) {
                alert('Thanks for your feedback.');
            } else {
                showPopup('Failed to save the feedback');
            }
        });
        window.location.href = 'registered_user.html' ;
    }
    catch(error){
        Alert("Error Submitting Feedback:" , error);
    }
}