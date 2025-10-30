//Değişken tanımı üç şekilde yapılır: var, let ve const
/*
ECMASCRİPT standartlaşma dokümanasyonu(ECMA-262)
ECMASCRİPT 6 ve sonrası
*/
/*var adi="Can";
let yas="20";//Değişken değişken tanımlamama
const adres="İzmir";//Sabit değişken tanımlama
//ECMASCRİPT 6 öncesi
function topla(x,y){
    return x+y
}
//ECMASCRİPT 6 sonrası
//Arrow Function
const add=(x,y)=>x+y;
if(x==10){
    console.log("X 10'a eşittir")
}
let total=0
for(let i=0;i<10;i++){
    total+=i
}
//var ile let arasındaki farklar 
//var functipon scope - let ise block scope özelliğine sakiptir.
function topla(){
    let x=10
}
function test(){
    if(true){
        var degisken="Merhaba"
    }
    if(true){
        console.log(degisken)
    }
}
test()
/*Tekrar tanımlama Özelliği
var adi="Can";
var adi="Ahmet";
let yas=20;
let yas=25;
var soyadi="Uzun";
soyadi="Aydın";
let adres="İzmir"
adres="İstanbul"*/
//Hosting
/*adi="Can"
console.log(adi)
var adi;*/
/* let adi="Can"
const adres="İzmir"
adi="Ahmet"
adres="İstanbul" */
/* fuction addEventListener(){
    console.log(arguments)
    let total=0
    for(let i=0;i<arguments,length;i++){
        total+=argumnets[i]
    }
    return total
} */
/* console.log(add(1,2,3,4,5,6)) */
//rest operotörü
/* const add=(...args)=>{
    let total=0;
    for(let i=0;i<args.length;i++) {
        total+=args[i]
    }
    return total;
}
console.log(add(1,2,3,4,5,6)) */
function addToCard(urun_adi,adet,fiyat){

}
addToCard("Elma",2,10)
addToCard("Armut",5,35)
addToCard("Limon",8,65)
let urun=({
    urunadi:"Elma",
    adet:2,
    fiyat:10
},{
    urunadi:"Armut",
    adet:5,
    fiyat:35
},{
    urunadi:"Limon",
    adet:8,
    fiyat:65
},)
function addToCartNew(urunler) {
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)
}
addToCartNew(urunler[0])
//Distracting İşlemi
let bolgeler=["İç Anadolu","Marmara","Karadeniz"]
console.log(bolgeler[2])
let[İcAnadolu,Marmara,Karadeniz]=["İç Anadolu","Marmara","Karadeniz"]
console.log(İcAnadolu)
let[urun_adi,adet,fiyat]=["Limon",3,20]
console.log(urun_adi)

let[urunler_adi,adet,fiyat]=[
    {urun_adi:"Elma",adet:10,fiyat:100}
    {urun_adi:"Armut",adet:5,fiyat:300}
    {urun_adi:"Limon",adet:50,fiyat:10}
]
console.log(urunleradi.urun_adi)
console.log(urunleradi.adet)
//filter
const sayilar=[1,2,3,4,5,6,7,8,9,10]
const teksayiler=sayilar.filter(sayi=>sayi%2===0);
console.log(teksayilar)

//find
const numbers=[1,2,3,4,5,6,7,8,9,10]
const ciftsayilar=numbers.find(function(sayi){
    return sayi%2===0;
});
console.log(ciftsayilar)
//map fonksiyonu
const map=[1,2,3,4,5,6]
const total=numbers.map(num=>num*2)
console.log(katsayi)
//reduce fonksiyonu
const nu=[1,2,3,4,5,6]
const total=nu.reduce((aar,curr)=>acc+curr,0)
console.log(toplam)
//forEach fonksiyonu
const say=[1,2,3,4,5,6]
sayi.forEach(say=>{
    console.log(say)
})
try{
    const result=10/0
    console.log(result)
}
catch{
    console.log("Hata:"+error.mesage)
}
finally{
    console.log("İşlem Tamamlandı")
}
function bolmeislem(x,y){
    if(y===0){
        throw new Error("Sıfıra Bölme Hatası")
    }
    return x/y
}
try{
    const sonuc=bolmeislemi(10,0)
    console.log("Sonuc",sonuc)
}
catch(error){
    console.log("Hata yakalandı"+error.message)
}