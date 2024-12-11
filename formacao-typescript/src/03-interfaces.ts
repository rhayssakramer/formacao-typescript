//interfaces (type x interface)
type robot = {
    id: number | string,
    name: string,
}

//propriedade readonly, é somente leitura para que não seja alterada
interface robot2 { 
    readonly id: number | string,
    name: string,
}

const bot1: robot = {
    id: 1,
    name: 'Wall-E'
}

const bot2: robot2 = {
    id: 1,
    name: 'Wall-E'
}

console.log(bot1);
console.log(bot2);

class Pessoa1 implements robot { 
    id: number | string;
    name: string;

    constructor(id: number | string, name: string){
        this.id = id;
        this.name = name;
    }
}

class Pessoa implements robot2{
    id: number | string;
    name: string;

    constructor(id: number | string, name: string){
        this.id = id;
        this.name = name;
    }
}