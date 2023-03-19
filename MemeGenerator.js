
const image = document.getElementById('image');
const form = document.querySelector('#form')
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]')
const photo = document.querySelector('input[name="memeImage"]');
const results = document.querySelector('#results');


form.addEventListener('submit', function(e){
  e.preventDefault();
  const newMeme = makeMeme(
    photo.value
    
  );
  results.appendChild(newDiv)
})

function makeDiv(){
  const div = document.createElement('div');
  div.setAttribute('name', 'container')
  div.innerText('penis')
}


function makeMeme(image){
  const meme = document.createElement('img');
  meme.src = image;
  meme.setAttribute('name','true')
  return meme;
}

results.addEventListener('click', function(e){
  console.log(e.target)
  if(e.target.name === 'true'){
    e.target.remove()
  }
  })

