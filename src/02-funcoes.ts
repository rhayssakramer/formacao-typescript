//funções
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(10, 20);
console.log(soma);


function addToHello(name: string): string {
    return `Olá, ${name}!`;
}
console.log(addToHello('Rhayssa'));

//pode declarar também o any ao invés do number e string
function callToPhone(phone: number | string): number | string {
    return phone;
}
console.log(callToPhone(123456789));

//funções assíncronas
//é uma promise
async function getDatabase(id: number): Promise<string> {
    return "Rhayssa";
}