const myH1 = document.querySelector("#saludo");
//Insertar texto con HTML JS
// myH1.innerHTML = "<em>Miguel Angel</em>";
//Insertar texto con y convertir el HTML en texto JS
// myH1.innerText = "<em>Miguel Angel</em>";



myH1.insertAdjacentHTML("afterbegin", "<em>Miguel Angel <mark>1</mark></em>");
myH1.insertAdjacentHTML("beforeend", "<em>Miguel Angel <mark>2</mark></em>");
myH1.insertAdjacentHTML("beforebegin", "<em>Miguel Angel <mark>3</mark></em>");
myH1.insertAdjacentHTML("afterend", "<em>Miguel Angel <mark>4</mark></em>");

myH1.insertAdjacentText("afterbegin", "<em>Miguel Angel Texto 1</em>");
myH1.insertAdjacentText("beforeend", "<em>Miguel Angel Texto 2</em>");
myH1.insertAdjacentText("beforebegin", "<em>Miguel Angel Texto 3</em>");
myH1.insertAdjacentText("afterend", "<em>Miguel Angel Texto 4</em>");


let nodo = Object.values(myH1.children);
nodo.forEach((nodoText, id) => {if(nodoText.nodeName!="EM"){ nodo.splice((id+1)) }});
console.log(nodo);
// while (nodo.length) {
//     // if(nodo.unshift() != myH1.firstChild){
//     //     myH1.removeChild(myH1.firstChild);
//     // }
//     break;
// }





// //Selecionar etiqueta (id, name, class, Attibute) JS
// console.group("Selectores JS");
// const myH1Id = document.getElementById("saludo");
// console.log("document.getElementById", myH1Id);
// const myH1Name = document.getElementsByName("SALUDO");
// console.log("document.getElementsByName", myH1Name);
// const myH1Class = document.getElementsByClassName("myClase");
// console.log("document.getElementsByClassName", myH1Class);
// const myH1Tag = document.getElementsByTagName("H1");
// console.log("document.getElementsByTagName", myH1Tag);
// console.groupEnd("Selectores JS");

// //Selecionar etiqueta (id, name, class, Attibute) ECM
// console.group("Selectores ECM");
// const myH1IdECM = document.querySelector("#saludo");
// console.log(`document.querySelector("#")`, myH1IdECM);
// const myH1ClassECM = document.querySelector(".myClase");
// console.log(`document.querySelector(".")`, myH1ClassECM);
// const myH1NameECM = document.querySelector(`[name="SALUDO"]`);
// console.log(`document.querySelector("[name=""]")`, myH1NameECM);
// const myH1AtributoECMAll = document.querySelectorAll(`h1[nombre="Miguel"]`);
// console.log(`document.querySelectorAll("Etiqueta[Atributo="Valor"]")`, myH1AtributoECMAll);
// console.groupEnd("Selectores ECM");


// //Selecionar NODOtexto de la etiqueta '<h1 id="saludo">'
// console.group("children[0]");
// console.log(document.body.children[0].innerHTML);
// console.log(document.body.children[0].innerText);
// console.log(document.body.children[0].outerHTML);
// console.log(document.body.children[0].outerText);
// console.log(document.body.children[0].textContent);
// console.groupEnd("children[0]");
// //Selecionar NODOtexto de la etiqueta '<h1 id="saludo">'
// console.group("children.saludo");
// console.log(document.body.children.saludo.innerHTML);
// console.log(document.body.children.saludo.innerText);
// console.log(document.body.children.saludo.outerHTML);
// console.log(document.body.children.saludo.outerText);
// console.log(document.body.children.saludo.textContent);
// console.groupEnd("children.saludo");