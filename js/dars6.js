const odam = {
    ismi : 'Gulbahor ',
    familiyasi : 'Ergasheva',
    yoshi: '19',
    kasbi: 'dasturchi',
    funksiya: function(){
        console.log(this.ismi + this.familiyasi)
        console.log(this.ismi + this.familiyasi + ' siz ' + this.yoshi + ' yoshdasiz va kelajakda ' + this.kasbi + ' bolmoqchisiz')
    }
}
console.log(odam.funksiya())
odam.ismi = "Familiyasi "
console.log(odam.funksiya())
odam.metod = function(){
    console.log('Yangi metod')
}
console.log(odam)