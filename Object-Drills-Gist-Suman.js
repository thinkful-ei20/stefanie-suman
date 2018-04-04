const loaf ={
    flour : 300,
    water : 210,
    hydration :  function(){
        let hydLevel = (this.water/this.flour)*100;
        return hydLevel;
    }
}
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
//===========================================
const myObj1= {
    foo: 'Suman',
    bar: 'Bandita',
    fum: 'Samantaray',
    quux: 'Rajaram',
    spam:  'Nayak',
}
for(i in myObj1){
    console.log(i,myObj1[i]);
}
//=========================================
const hobbitMeals ={
    meals : '"breakfast","second breakfast","elevenses","lunch","afternoon tea","dinner","supper"',
}
console.log(hobbitMeals['meals'].split(",")[3]);