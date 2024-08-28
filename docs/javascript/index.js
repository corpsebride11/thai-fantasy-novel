var jsonData;

window.addEventListener('load', function () {
    assignNovel();
})

async function loadData() {
    try {
        const response = await fetch('resources/data.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

async function assignNovel() {
    let informationBox = document.querySelector('.informationBox');

    try {
        const data = await loadData();
        // console.table(data.novel)

        for (let novel in data) {
            for (let eachData in data[novel]){
                let eachNovel = data[novel][eachData];

                let title = eachNovel.title_name;
                let author = eachNovel.author;
                let summary = eachNovel.summary;

                let genres = eachNovel.genre;
                let genreArr = genres.split(', ');

                let card = document.createElement('div');
                let cardBody = document.createElement('div')

                let cardImgBox = document.createElement('div');
                let cardImg = document.createElement('img');

                let cardTitle = document.createElement('h4');
                let cardAuthor = document.createElement('h5');
                let cardTag = document.createElement('ul');
                
                let cardText = document.createElement('p');

                let cardBtn = document.createElement('a');

                // Main Card
                card.classList.add('card');
                cardBody.classList.add('card-body');

                cardImgBox.classList.add('card-img');
                cardImg.classList.add('card-img-top');

                cardAuthor.classList.add('card-author');
                cardTitle.classList.add('card-title');
                cardTag.classList.add('card-tag');
                
                cardText.classList.add('card-text');

                cardBtn.classList.add('btn', 'btn-primary', 'viewMoreBtn');
        
                cardTitle.textContent = title;
                cardAuthor.textContent = author;
                cardText.textContent = summary;
                cardImg.src = 'https://placehold.it/300x250';

                cardBtn.textContent = 'ดูเพิ่มเติม';


                for (let genre of genreArr) {
                    let cardTagLi = document.createElement('li');

                    cardTagLi.classList.add('card-tag-list');
                    cardTagLi.textContent = genre;

                    setColorTag(cardTagLi);

                    cardTag.appendChild(cardTagLi);
                }
                
                cardImgBox.appendChild(cardImg);
                
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardAuthor);
                cardBody.appendChild(cardTag);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardBtn);

                card.appendChild(cardImgBox);
                card.appendChild(cardBody);

                informationBox.appendChild(card)
            }
        }
    } catch (e) {
        console.log(e)
    }
}

function setColorTag(tag) {
    let colorTag;

        let genre = tag.innerHTML;

        if (genre === 'Action') {
            colorTag = '#110344';
        } else if (genre === 'Sci-Fi') {
            colorTag = '#123310';
        } else if (genre === 'Romance') {
            colorTag = '#890074';
        } else if (genre === 'Comedy') {
            colorTag = '#eea509';
        } else if (genre === 'Dystopian') {
            colorTag = '#5b2b00';
        } else if (genre === 'Historical Fiction') {
            colorTag = '#47382c';
        } else if (genre === 'High Fantasy') {
            colorTag = '#006142';
        } 

        tag.style.backgroundColor = colorTag;
}