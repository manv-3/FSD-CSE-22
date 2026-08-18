function book(bookData){
const div=document.createElement("div");
div.setAttribute("class","book");
const img=document.createElement("img");
img.setAttribute("src",bookData.img || "https://m.media-amazon.com/images/I/81t9cbIICUL.jpg");
img.setAttribute("height","200px");
img.setAttribute("width","200px");

const h2=document.createElement("h2");
h2.innerText="Price:"+bookData.price+"/-";
h2.style.color="blue";


const bt=document.createElement("button");
bt.innerText="add to cart";
div.appendChild(img);
div.appendChild(h2);
div.appendChild(bt);
return div;
}

const bookdata=[
    {
        img:"",price:345
    },
    {
        img:"",price:465
    },
    {
        img:"",price:565
    },
    {
        img:"",price:665
    }
];

const parent=document.getElementById("books");
const books=bookdata.map((bookData)=>book(bookData));
parent.append(...books);

