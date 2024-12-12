//classes
class Character{
    name?: string;
    streght: number;
    skill: number;

    constructor(streght: number, skill: number) { 
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.streght} points`);
    }
}

//data mofiiers
//public, private, protected
class Pessoa2{
    private name?: string;
    readonly idade: number;

    constructor(name: string, idade: number) {
        this.name = name;
        this.idade = idade;
    }

    public accion(): void{
        console.log(`${this.name} anda muito rápido!`);
    }
}

//subclasse
class Magician extends Character{
    magicPoints: number;
    constructor(name: string, streght: number, skill: number, magicPoints: number){
        super(streght, skill);
        this.magicPoints = magicPoints;
    }
}

//Impressões
const p1 = new Character(10, 98);
const p2 = new Magician('Rhayssa', 10, 98, 100);
p1.attack();

const pessoa3 = new Pessoa2('Rhayssa', 33);
pessoa3.accion();