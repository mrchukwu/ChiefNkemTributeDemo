//get DOM elements
const tributes = document.querySelector('.custom-blog-row');


// initialize contentful client
const client = contentful.createClient({
    space: 'zwqj3hckwf7s',
    accessToken: 'xDaG_q9VkKMylmzAoHmIvrgRmZqxGlogEjevlwwJ6Ec',

})

// add content to DOM function
const addContentToDOM = (items) =>{
    items.forEach(item =>{
        // create card div
        const card = document.createElement("div");
        card.classList.add("custom-blog-card");

        // create img element
        const cardImg = document.createElement("img");
        cardImg.classList.add('custom-blog-card-img')
        cardImg.src = 'assets/images/blog/blog-01.jpg';
        cardImg.alt = '';

        // append img to card
        card.appendChild(cardImg);

        // create title element
        const title = document.createElement("h5");
        title.innerText = item.fields.title;

        // append title to card
        card.appendChild(title);

        // create paragrpah
        const paragraph = document.createElement('p');
        paragraph.innerText = item.fields.message.content[0].content[0].value;

        // append paragrpah to card
        card.appendChild(paragraph);

        // create author area div
        const authorArea = document.createElement("div");
        authorArea.classList.add('custom-blog-card-author-area');

        // create authorName div
        const authorName = document.createElement("p");
        authorName.innerText = item.fields.name;

        // append author name to author area div
        authorArea.appendChild(authorName);

        // append author area div to card
        card.appendChild(authorArea);

        // append card to tributes div
        tributes.appendChild(card);

        // console.log(card);
    })
}


// get entries from contentful client
client.getEntries().then(function(entries){
    addContentToDOM(entries.items);
});