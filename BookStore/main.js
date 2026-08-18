function book(){
const div=document.createElement("div");
div.setAttribute("class","book");
const img=document.createElement("img");
img.setAttribute("src","https://m.media-amazon.com/images/I/81t9cbIICUL.jpg");
img.setAttribute("height","200px");
img.setAttribute("width","200px");

const h2=document.createElement("h2");
h2.innerText="Price:"+dataPrice+"/-";
h2.style.color="blue";


const bt=document.createElement("button");
bt.innerText="add to cart";
div.appendChild(img);
div.appendChild(h2);
div.appendChild(bt);
}
bookdata.map((b)=>(
book(b))
const parent=document.getElementById("book")
parent.appendChild(div);



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
]

