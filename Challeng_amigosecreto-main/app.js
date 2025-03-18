let nomesparaSorteio = [];

function adicionarAmigo() {
  let listadeNomes = document.querySelector("input").value;
  if (listadeNomes == "") {
    alert("coloquue o nome para o sorteio.");
  } else {
    nomesparaSorteio.push(listadeNomes);
    console.log(nomesparaSorteio);
    nomessoteio();
  }

  deletarCampo();
}

function nomessoteio() {
  let listaAmigo = document.getElementById("listaAmigos").innerHTML;
  listaAmigo += "<li>" + nomesparaSorteio[nomesparaSorteio.length - 1] + "</li>";
  document.getElementById("listaAmigos").innerHTML = listaAmigo;
}

function sortearAmigo() {
  let qtdpessoas = nomesparaSorteio.length;
  let nomesortado = Math.floor(Math.random() * qtdpessoas);
  let pessoassorteadas = nomesparaSorteio[nomesortado];
  console.log(nomesortado);
  console.log(qtdpessoas);

  if (nomesparaSorteio == "") {
    alert("Não foi adicionado nenhum nome");
  } else {
    let resultado = document.getElementById("resultado").innerHTML;
    resultado =
      "<li>" + "O amigo sorteado é: " + pessoassorteadas + "</li>";
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("listaAmigos").innerHTML = "";
    nomesparaSorteio = [];
  }
}

function deletarCampo() {
  listadeNomes = document.querySelector("input");
  listadeNomes.value = "";
}