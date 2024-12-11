//Tipos primitivos: boolean, number, string
let ligado: boolean = true;
let nome: string = 'Rhayssa';
let idade: number = 33;
let altura: number = 1.65;

//null e undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos Especiais: any e void
let qualquer: any = 'qualquer coisa'; //qualquer tipo de dado
let vazio: void = undefined;

//Tipos Estruturados: object, array e tuplas
//objeto - sem previsibilidade
let produto: object = {
    nome: 'Notebook',
    preco: 3000
};

//objeto tipado - com previsibilidade
type ProdutoLoja={
    nome: string,
    preco: number,
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: 'Notebook',
    preco: 3000,
    unidades: 5
}

//array - sem previsibilidade
let dados: string[] = ['Rhayssa', '33', '1.65'];
let dados2: Array<string> = ['Rhayssa', '33', '1.65'];

//array multitipos - com previsibilidade
let infos: (string | number)[] = ['Rhayssa', 33, '1.65'];
let produtos: ProdutoLoja[] = [
    {
        nome: 'Notebook',
        preco: 3000,
        unidades: 5
    },
    {
        nome: 'Mouse',
        preco: 50,
        unidades: 10
    }
];

//tuplas (tem que respeitar a ordem)
let boleto: [number, string] = [123, '123.456.789-00'];


//arrays métodos
dados.pop(); //remove o último elemento

//datas e horas
let aniversario: Date = new Date("2024-01-23 05:00");
console.log(aniversario.toString());