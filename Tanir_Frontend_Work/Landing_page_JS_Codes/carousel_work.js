const clients = [
    { name: "", image: "/Tanir_Frontend_Work/Media_Files/feedback_sample.jpg" },
    { name: "", image: "/Tanir_Frontend_Work/Media_Files/feedback_sample.jpg" },
    { name: "", image: "/Tanir_Frontend_Work/Media_Files/feedback_sample.jpg" },
    { name: "", image: "/Tanir_Frontend_Work/Media_Files/feedback_sample.jpg" },
    { name: "", image: "/Tanir_Frontend_Work/Media_Files/feedback_sample.jpg" }
];

const clientsContainer = document.getElementById('clients');
const carousel = document.getElementById('carousel');
const clientWidth = carousel.offsetWidth;
clients.forEach(client => {
    const clientItem = document.createElement('div');
    clientItem.classList.add('client');
    clientItem.innerHTML = `
        <img src="${client.image}" alt="${client.name}">
        <p>${client.name}</p>
    `;
    clientsContainer.appendChild(clientItem);
});
clients.forEach(client => {
    const clonedClientItem = document.createElement('div');
    clonedClientItem.classList.add('client');
    clonedClientItem.innerHTML = `
        <img src="${client.image}" alt="${client.name}">
        <p>${client.name}</p>
    `;
    clientsContainer.appendChild(clonedClientItem);
});
let currentIndex = 0;

carousel.addEventListener('click', function(event) {
    const clickX = event.clientX - carousel.getBoundingClientRect().left;
    if (clickX < clientWidth / 2) {
        prevClient();
    } else {
        nextClient();
    }
});

function showClient(index) {
    const offset = -index * clientWidth;
    clientsContainer.style.transform = `translateX(${offset}px)`;
}

function nextClient() {
    currentIndex++;
    if (currentIndex >= clients.length) {
        currentIndex = 0;
    }
    showClient(currentIndex);
}

function prevClient() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = clients.length - 1;
    }
    showClient(currentIndex);
}

setInterval(nextClient, 5000);