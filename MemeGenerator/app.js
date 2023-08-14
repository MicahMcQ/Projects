const form = document.querySelector('#form');
const photo = document.querySelector('input[name="memeImage"]');
const results = document.querySelector('#results');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newMeme = makeMeme(photo.value);
    results.appendChild(newMeme);
});

function makeMeme(imageURL) {
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-container');

    const meme = document.createElement('img');
    meme.classList.add('final_image');
    meme.src = imageURL;
    memeContainer.appendChild(meme);
    meme.id = 'meme'

    const topTextElement = document.createElement('div');
    topTextElement.classList.add('text-overlay');
    topTextElement.innerText = topText.value;
    memeContainer.appendChild(topTextElement);

    const bottomTextElement = document.createElement('div');
    bottomTextElement.classList.add('text-overlay');
    bottomTextElement.innerText = bottomText.value;
    memeContainer.appendChild(bottomTextElement);

    meme.addEventListener('click', function() {
        memeContainer.remove();
    });

    return memeContainer;
};
