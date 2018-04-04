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
//============================================
const objNameAndJob = [
    {name : 'suman', jobTitle : 'Developer', boss : 'Bandita'},
    {name : 'bandita', jobTitle : 'Architect', boss : 'Samantaray'},
    {name : 'samantaray', jobTitle : 'QA', boss : 'Rajaram'},
    {name : 'rajaram', jobTitle : 'Project Manager', boss : 'Nayak'},
    {name : 'nayak', jobTitle : 'Team Lead'},
]

for(let i =0; i< objNameAndJob.length; i++){
    console.log(objNameAndJob[i].name + "-- " + objNameAndJob[i].jobTitle);
}

// objNameAndJob.forEach(person => function(person){
//     console.log(person.name + "-- "+ person.jobTitle);
// });
//======================================================
for(let i =0; i< objNameAndJob.length; i++){
    if(objNameAndJob[i].boss)
        console.log(objNameAndJob[i].jobTitle + " " + objNameAndJob[i].name + " reports to " + objNameAndJob[i].boss);
    else
        console.log(objNameAndJob[i].jobTitle + " " + objNameAndJob[i].name + " doesn't reports to anybody. ");
}
//===================================================================================================================
//Cracking Code
const message = 'craft block argon meter bells brown croon droop';
const decoding ={
    a : 2,
    b : 3,
    c : 4,
    d : 5,
}
function decode(message,decoding){
    let arr = message.split(" ");
    function alpha(element){   
        let firstLetter = element.charAt(0);        
        let keys = Object.keys(decoding); 
        for(firstLetter in keys){
           console.log(decoding.firstLetter);
        }
    }
    
    //     if( element.charAt(0) === Object.keys(decoding))    
    let result =[];
    arr.forEach(element => alpha(element));
    console.log(result);
}
decode(message,decoding);