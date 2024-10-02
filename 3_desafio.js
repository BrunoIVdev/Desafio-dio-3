class Nascem {
  constructor(guerreiro, mago, monge, ninja) {
    this.guerreiro = guerreiro;
    this.mago = mago;
    this.monge = monge;
    this.ninja = ninja;
  }

  atacar(espada, magia, artesMarciais, shuriken) {
    console.log(`O ${this.guerreiro} atacou usando ${espada}`);
    console.log(`O ${this.mago} atacou usando ${magia}`);
    console.log(`O ${this.monge} atacou usando ${artesMarciais}`);
    console.log(`O ${this.ninja} atacou usando ${shuriken}`);
  }
}

let equipe = new Nascem(
  "Nascem Guerreiro",
  "Nascem Mago",
  "Nascem Monge",
  "Nascem Ninja"
);

equipe.atacar("espada", "Usou magia", "usou Artes marciais", "usou shuriken");
