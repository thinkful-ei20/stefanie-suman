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

objNameAndJob.forEach(person => {
    console.log(person.name + "-- "+ person.jobTitle);
});
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
    let result = '';
    for (let i = 0, n = arr.length; i < n; i++) {
      let first = arr[i][0];
      let offset = ' ';
      let keys = Object.keys(decoding);
      if (keys.includes(first)) {
        offset = decoding[first];
      }
      let letter = ' ';
      if (typeof offset === 'number') {
        letter = arr[i][offset-1];
      }
      result += letter;
    } // close for loop
    console.log(result);    
}
decode(message,decoding);

// function decode(message,decoding){
//     let arr = message.split(" ");
//     function alpha(element){   
//         let firstLetter = element.charAt(0);        
//         let keys = Object.keys(decoding); 
//         if(keys.includes(firstLetter)){
//             console.log(decoding[firstLetter]);
//         }
//     }
    
    //     if( element.charAt(0) === Object.keys(decoding))    
//     let result =[];
//     arr.forEach(element => alpha(element));
//     console.log(result);
// }
/*
function decode2(word) {
    const cipher = {
        'a': word[1],
        'b': word[2],
        'c': word[3],
        'd': word[4],
    }
    return cipher[word[0]] || ' ';
}

function decodeWord(string) {
    return string.split(' ').reduce((acc, word) => {
        return acc + decode2(word);
    }, '')
}
*/
//=============================================================
function createCharacter(name,nickName,race,origin,attack,defense){
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,       
        describe: function(){
            console.log(`${this.name} is ${this.race} from ${this.origin}`);
        },
        evaluateFight: (obj)=>{
            let x = (obj.defense - obj.attack) > 0 ? 0 : obj.attack - obj.defense;
            let y = (this.defense - this.attack) > 0 ? 0 : this.attack - this.defense;
            console.log(`Your opponent take ${x} damange and you receive ${y} damage`);
        }
    }
}
let characters = [ createCharacter('Gandalf','gandalf','wizard','middle earth',10,6),
createCharacter('Bilbo Baggins','Bilbo','Hobbit','The Shrie',2,1),
createCharacter('Frodo Baggins','Frodo','Hobbit','The Shrie',3,2),
createCharacter('Aragorn','Aragon','Man','wizard',6,8),
createCharacter('Legolas','Legolas','Elf','WoodLand Realm',8,5),
];
characters.push(createCharacter('Arwen Undomiel','Arwen','Half-Elf','Riverdell',10,2));
let findResult = characters.find((character)=>{
    if(character.nickName === 'Aragon'){
        return true;
    }
});
findResult.describe();
let filterResult = characters.filter((character)=>{
    if(character.race === 'Hobbit'){
        return true;
    }
});
console.log(filterResult);
let filterResultAttack = characters.filter((character)=>{
    if(character.attack > 5){
        return true;
    }
});
console.log(filterResultAttack);
function updatedCreateCharacter(name,nickName,race,origin,attack,defense,weapon){
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        weapon,       
        describe: function(){
            console.log(`${this.name} is ${this.race} from ${this.origin} who uses a ${this.weapon}`);
        },
        evaluateFight: (obj)=>{
            let x = (obj.defense - obj.attack) > 0 ? 0 : obj.attack - obj.defense;
            let y = (this.defense - this.attack) > 0 ? 0 : this.attack - this.defense;
            console.log(`Your opponent take ${x} damange and you receive ${y} damage`);
        }
    }
}