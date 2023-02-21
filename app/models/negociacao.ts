export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade =  quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data
    }

    get quantidade(){
        return this.#quantidade
    }

    get valor() {
        return this.#valor //não é possivel atribuir valor a um gettr, apenas ler
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}



