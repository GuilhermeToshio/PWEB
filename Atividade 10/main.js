var aluno1 = new Object();

aluno1.ra = "0030482021001";
aluno1.nome = "Joãozinho";
alert("1ª Forma:" +
    "\n\nNome: " + aluno1.nome +
    "\nRA: " + aluno1.ra);

var ra = "ra",
    nome = "nome"
aluno1[ra] = "0030482021002";
aluno1[nome] = "Fulaninho";
alert("2ª Forma:" +
    "\n\nNome: " + aluno1.nome +
    "\nRA: " + aluno1.ra);

aluno1["ra"] = "0030482021003";
aluno1["nome"] = "Zézinho";
alert("3ª Forma:" +
    "\n\nNome: " + aluno1["nome"] +
    "\nRA: " + aluno1["ra"]);