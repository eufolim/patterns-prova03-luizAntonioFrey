console.log("Hello, World! 002");

class TV {
    constructor() {
        this.power = false;
    }
    turnOn() {
        this.power = true
        console.log("TV ligada.");
    }
    turnOff() {
        this.power = false
        console.log("TV desligada.");
    }
}

class Controler {
    buttonPress(tv) {
        if (tv.power == true) {
            tv.turnOff();
        } else {
            tv.turnOn();
        }
    }
}

const televisao = new TV;
const controle = new Controler;

controle.buttonPress(televisao)
controle.buttonPress(televisao)


