function addParagraph(){
    const para=document.createElement("p");
    para.inerText="this is the new paragraph";
    para.style.color="red";
    const el=document.getElementById("para");
    el.appendChild(para);
}