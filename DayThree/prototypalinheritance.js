class Manusia{
    ManusiaPertama = "Royan";

    sleep(){
        console.log(`${this.name} Sedang Tidur...`);
    }
}

class Perempuan extends Manusia{
    name = "Syifa";

    cantik(){
        console.log(`${this.name} Cantik Banget..`)
    }
}

class LakiLaki extends Manusia{
    name = "Xorainryn";

    ganteng(){
        console.log(`${this.name} Ganteng Banget...`)
    }
}

const perempuan = new Perempuan();
const lakilaki = new LakiLaki();

console.log(`${perempuan.name}`);
perempuan.ganteng();