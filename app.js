const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open("GET", NEWS_URL , false);

ajax.send();

const newsFeed = JSON.parse(ajax.response); // json 응답을 객체 형식으로 parse 해서 newsFeed 에 저장
const ul = document.createElement('ul');

for(let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    const a = document.createElement('a');
    
    // li.innerHTML = newsFeed[i].title
    a.href="#";
    a.innerHTML = newsFeed[i].title

    li.appendChild(a);
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);