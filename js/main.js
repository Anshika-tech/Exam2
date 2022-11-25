/* API call */
// btn=document.getElementById("sit");
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let to_search=document.getElementById("searchL").value;
//     document.getElementById("searchL").value="";
//     fetch(URL+to_search).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         displayI(data);
//     })
// });

// function displayI(data){
//     data.forEach((demo)=>{
//         let div=document.createElement("div");
//         let img=document.createElement("img");
//         img.setAttribute("src",demo.show.image.original);
//         img.setAttribute("width","300px");
//         img.setAttribute("height","400px");
//         div.appendChild(img);
//         div.className="image";
//         document.getElementById("add").appendChild(div);
//     });
// }