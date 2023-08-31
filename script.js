var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
listaFilmes.push("Harry Potter");
listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");

console.log(listaFilmes.length);

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<h2>" + listaFilmes[indice] + "</h2>");
}
