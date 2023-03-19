const cards = document.querySelector(".wrapper")

cards.addEventListener("click", function(e){
    console.log(e)
    if(e.target.isTrusted === 'true'){
        e.target.classlist.add("clicked");
    }
})