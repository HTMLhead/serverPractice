const id = document.querySelector(".id");
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
const formData = document.querySelector('.my-form');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

btn.addEventListener("click", ()=> {
  fetch("/login", {
    method: "POST",
    headers : myHeaders,
    body: JSON.stringify({"id" : id.value})
  })
  .then((res, rej) => res.json())
  .then((res, rej) => {
    formData.style.display = 'none';
    title.innerHTML = res.title;
  });
})

