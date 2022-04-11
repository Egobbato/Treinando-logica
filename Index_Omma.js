//Requisitos
//1. Precisamos armazenar o nome da empresa, e sempre que for executado o
//sistema ( Execução do arquivoindex.js) deve exibirno console esse nome.
//Essa informação nunca deve ser alterada durante o uso do sistema.

const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

//2. Precisamos armazenar a lista de receitas em nosso sistema chamada
//receitas: Para isso iremos usar o recurso de Arrays do Javascript. Essa lista
//deve ter acesso global para todas as funcionalidades do sistema.
//3. Deveremos previamente deixar cadastrada uma receita dentro da nossa
//lista de receitas, o cliente deixará livre a escolha de qual receita será. Além
//disso, uma receita será representada por um objeto e deverá ter os
//seguintesatributos:
//a. Um identificador único que não pode se repetir no sistema
//b.titulo da receita
//c. nível dificuldade ( com a escala de simples, moderada e complexa)
//d. lista de ingredientes já com a medida (Ex: 1 colher de açúcar)
//e. instruções de preparo
//f. link do video de preparo
//g. se é vegana ou não

let listaDeReceitas = [
  {
    id: 1,
    titulo: "cachorro quente",
    dificuldade: "facil",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    Modopreparo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "http://youtube.com",
    vegano: false,
  },
];

//4. Será preciso criar uma função que permita cadastrar uma receita dentro
//da lista de receitas, seguindo os padrões do objeto estipulado na etapa
//anterior. A função deve se chamar cadastrarReceita e deverá receber
//cada informação da receita porparâmetro devolver um feedback no
// que o cadastro foi concluído.

const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  Modopreparo,
  link,
  vegano
) => {
  const novaReceita = {
    id: id,
    titulo: titulo,
    dificuldade: dificuldade,
    ingredientes: ingredientes,
    Modopreparo: Modopreparo,
    link: link,
    vegano: vegano,
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da Receita ${titulo} Cadastro feito com sucesso!`);
};

cadastrarReceita(
  2,
  "Ovo Frito",
  "médio",
  " 1 ovo, sal e frigideira",
  "Quebre o ovo, e frite, sal a gosto",
  "https://google.com.br",
  "false"
);

//5.Devemos criar uma função chamada exibirReceitas que irá listar no
//console, todas as receitas cadastradas. Porém ao exibir cada receita deve
//apenas os seguintes atributos devem ser mostrados:
//a.Titulo da Receita
//b.Lista de Ingredientes
//c.Se é vegana ou não

function exibirReceitas(receitas) {
  for (let index = 0; index < receitas.length; index++) {
    const element = receitas[index];

    console.log(`Titulo: ${element.titulo}`);
    console.log(`Ingredientes: ${element.ingredientes}`);
    console.log(`Vegana: ${element.vegano ? "Sim" : "Não"}`);
  }
}
exibirReceitas(listaDeReceitas);

//6.Devemos criar uma função que nos permita deletar uma receita, e o nome
//serádeletarReceita ela irá receber como parâmetroo identificador da
//receita. Caso o identificador não seja encontrado deve exibir a seguinte
//mensagem:“Receita não encontrada”. Se a receita forencontrada deve
//ser deletada da lista e exibir uma mensagem de sucesso no console.

function deletarReceita(id) {
  const novaListadeReceitas = listaDeReceitas.filter((item) => item.id !== id);
  if (novaListadeReceitas.length === listaDeReceitas.length) {
    console.log("Receita não Encontrada");
  } else {
    listaDeReceitas = novaListadeReceitas;
    console.log("Item Deletado com Sucesso!");
  }
}
deletarReceita(10);
