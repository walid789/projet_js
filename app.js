
const result=document.getElementById('result')
let i=0;
const getdata= ()=>{
    const search=document.getElementById('search')
    const search1=search.value
    fetch(`https://hn.algolia.com/api/v1/search?query=${search1}`).then(
        response=>response.json())
        .then(data=>setdata(data))
}

const setdata=(data)=>{
    i++;
    data=data.hits
    var res=document.getElementById('result')
    // cette condtion pour rensailser le div apres une autre rechercher 
    if(i>=2){
        res.innerHTML=''
    }
    // parcoure le objet 
    for(elem in data){
        var card = document.createElement('div');
        card.classList.add('card');
        var title=document.createElement('h3')
        title.textContent=data[elem].title
        /* ouvrir url in nouveau tab*/
        const openUrl = (url) => {
            return function() {
              window.open(url, '_blank');
            };
          };
          
        card.addEventListener('click', openUrl(data[elem].url));

        var author=document.createElement('h4')
        author.textContent=data[elem].author

        var date=document.createElement('h5')
        date.textContent=data[elem].created_at
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(date)
        res.append(card)
    }
}