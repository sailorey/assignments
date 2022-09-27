const readlineSync = require(`readline-sync`)


//1. Console must greet player with a fun message
console.log(`\n'Tis be a tale of the Captain that stole from the blackbeards chest,\nye be encountering pirates that are going to be attacking you\nas well as sharks a giant squid and sirens that'll try to lure you with their beautiful song\n`)

//2. Console must ask for the player's name and store it
const pirateName = readlineSync.question(`What be your pirate name lad? `);
console.log(`Aye!!  ${pirateName}!`);

let pirate = {
    name: pirateName,
    hp: 100,
    attack: 10,
    defense: 10,
}

let pirateInventory ={
    apple: 0,
    rum: 0,
    medicine: 0,
    compass: 0
}

let lootTable = [{
    item: `Apple`,
    healValue: 10
}, {
    item: `Rum`,
    healValue: 25
}, {
    item: `Medicine`,
    healValue: 50
}, {
    item: `compass`,
    healValue: 0
}]

console.log(`Best be prepared for these waters lad... \naye ${pirateName} be your name..`)
console.log(`we gon be in for a long one fer sure`)
console.log(`${pirateName}, are you ready?`)
console.log(`Captain: alright lads we be settn sail!`)
console.log(`Reaaaaaddy UP gentlemen!`)
console.log(`You set sail and ready for adventure!\n`)


function printStats(){
    console.log(`\npirate:  ${pirateName} \nCurrent HP: ${pirateName} \nCurrent Items: `)
    console.log(pirateInventory)
}

function menu(){
    baseQuestion = readlineSync.question('\nWhat ye like to do? S - Sail | I - Inventory | Q = Quit)');
    if (baseQuestion === `S` || baseQuestion === `s`){
        sail()
    } else if (baseQuestion === `I` || baseQuestion === `i`){
        mySatchel()
    } else if (baseQuestion === `Q` || baseQuestion === `q`){
        pirate.hp = 0
        console.log(`\nSo long lad.\n`)
    } else if (baseQuestion === `p` || baseQuestion === `P` || baseQuestion === `PRINT` || baseQuestion === `Print` || baseQuestion === `print`){
        printStats()
    } else {
        console.log(`\nAre you drunk? Theres only three letters to pick\n`)
        menu()
    }
}

function mySatchel(){
    if (pirateInventory.apple + pirateInventory.rum + pirateInventory.rum + pirateInventory.medicine + pirateInventory.compass === 0){
        console.log(`\nThere aint nothing in your satchel boy\n`)
    } else {
        console.log(`\nYou open your satchel.\nAll you got is:`)
        console.log(pirateInventory)
        let displayActions = readlineSync.questionInt(`\nWould you like to use something?\n1) to eat an apple.\n2) to drink some rum.\n3) to take medicine.\n4) to look at your Compass.\n5) to close the backpack.\n`)
        if (displayActions === 1){
            console.log(`\n Yummy \n`)
        } else if (displayActions === 2){
            console.log(`\n Suddenly everything looks hazy \n`)
        } else if (displayActions === 3){
            console.log(`\n Gross but ye Health went up ! \n`)
        } else if (displayActions === 4){
            console.log(`\n Compass be pointing the wrong way? maybe it be broken \n`)
        } else if (displayActions === 5){
            console.log(`\nBags Closed\n`)
        }
    }
}

function sail(){
    if (Math.floor(4 * Math.random()) < 1){
        console.log(`\nYou've been attacked!`)
        swordFight()
    } else {
        console.log(sailMsg1 [Math.floor( 10 * Math.random())])
    }
}

function swordFight(){
    let someBadGuy = Math.floor(4 * Math.random())
    let swordAttack
    let enemyDamage    
    function attacked(){
        swordAttack = Math.floor(Math.random() * (pirates[someBadGuy].maxDmg - pirates[someBadGuy].minDmg) + pirates[someBadGuy].minDmg);
    }
    function hit(){
        enemyDamage = Math.floor(Math.random() * ((pirate.attack + 5) - (pirate.attack -5)) + (pirate.attack - 5));
    }
    console.log(pirates[someBadGuy].name + ` comes at you!`)
    for(let i = 0; pirates[someBadGuy].hp > 0 && pirate.hp > 0; i++){
        let fightCommand = readlineSync.question('\nWhat you wanna do lad??\nHit em with your Sword? (H)?\nor \nRun away like a coward (R)?\n')
        if (fightCommand === `H` || fightCommand === `h`) {
            hit();
            console.log(i)
            if ( i === 0 ) {
                console.log(`\nARRR you hurt ` + pirates[someBadGuy].name + ` and deal ` + enemyDamage + ` damage`)
            } else {
                console.log(`\nTHAT ALL YOU GOT MATE?\nYou Hit the ` + pirates[someBadGuy].name + ` and deal ` + enemyDamage + ` damage`)
            }
            pirates[someBadGuy].hp = pirates[someBadGuy].hp - enemyDamage
            attacked();
            console.log(`\nThe ` + pirates[someBadGuy].name + ` lunges at you, dealing ` + swordAttack + ` damage.`)
            pirate.hp = pirate.hp - swordAttack;
            if (pirate.hp < 1){
                dead()
            } else if (pirates[someBadGuy].hp < 1){
                console.log(`\nGood job lad, you defeated ` + pirates[someBadGuy].name + ` with ` + pirate.hp+ ` HP remaining.`)
                let lootDecide = Math.floor(4 * Math.random())
                let itemDropped = lootTable[lootDecide].item
                console.log(`Looks like the ` + pirates[someBadGuy].name + ` dropped a ` + itemDropped + `.\nYou take the ` + itemDropped + ` in your inventory`)
                afterBattleHeal = Math.floor(Math.random() * (20 - 5) + 5)
                pirate.hp = pirate.hp + afterBattleHeal
                console.log(`You feel yourself slowly recover as you regain ` + afterBattleHeal + ` HP.\nYou now have ` + pirate.hp + ` HP.`)
                if ( lootDecide === 0){
                    pirateInventory.apple = pirateInventory.apple + 1
                } else if (lootDecide === 1){
                    pirateInventory.rum = pirateInventory.rum + 1
                } else if (lootDecide === 2){
                    pirateInventory.medicine = pirateInventory.medicine + 1
                } else {
                    pirateInventory.compass = pirateInventory.compass + 1
                }
            }
        } else if (fightCommand === `R` || fightCommand === `r` || fightCommand === `Run` || fightCommand === `run` || fightCommand === `RUN`){
            let sailAway = Math.floor(2 * Math.random())
            if (sailAway < 1){
                console.log(`\nthe enemy blocks your path: you thought you can get away?`)
                attacked();
                console.log(`The ` + pirates[someBadGuy].name + ` lunges at you, dealing ` + swordAttack + ` damage.`)
                pirate.hp = pirate.hp - swordAttack;                
                console.log(`\nYour current HP ` + pirate.hp + `\n`)
            } else {
                console.log(`\nYou get away from the enemy  \nYou're now seen as a coward.\nbut at least you got away\n`)
                pirates[someBadGuy].hp = 0;
                fightCommand = ``
            }
        } else {
            console.log(`\nyou drunk? its either Attack (A)? or Run (R)?\n`)
        }
    }
    pirates[0].hp = 21
    pirates[1].hp = 45
    pirates[2].hp = 54
}

let pirates = [{
    name: `Pirate Captain Jack Sparrow`,
    hp : 30,
    minDmg: 1,
    maxDmg: 9
}, {
    name: `Siren`,
    hp : 40,
    maxDmg: 14,
    minDmg: 4
}, {
    name: `Blackbeard`,
    hp : 50,
    minDmg: 7,
    maxDmg: 19
}, {
    name: `Shark`,
    hp : 20,
    minDmg: 10,
    maxDmg: 13
}, {
    name: `Giant Squid`,
    hp : 100,
    minDmg: 20,
    maxDmg: 36
}]


const sailMsg1 = [`\nAs you smooth sailing\nyou start feeling a bit sea sick\nnot sure what be going on right now`, 
`\nwhat was i doing again?\nhmm....`,
`\nyou start hearing voices.. \nis that a song i hear?\nyour crew yells put your earplugs in! cover your ears it could be a siren!!`,
`\nas you be sitting there sipping some rum \nrealizing this aint too bad\nsong is playing in the background"\n"yoho yoho a pirates life for me"`,
`\nis that an island i see?? \nMEN! lets set sail to the island.\ni bet they have plenty of rum there! maybe some supplies!`,
`\nas you overhear some of the men talking\n"ya know theres huge sharks in these waters...."`,
`\nas theres nothing goin on nearby you start to think "its bound to happen any minute now"`,
`\n you see the men just partying and drinking sailing away\nSo you join in..`,
`\n"yoho yoho a pirates life for me.... man i love this song!"`,
`\n"yoho yoho a pirates life for me.... man i love this song!"`
];

function stillPlaying(){
    let playAgain = readlineSync.question(`\nLETS SET SAIL AGAIN!\n`);
    if (playAgain === `Y`){
        pirate.hp = 100
        console.log(pirate.hp)
        restart()
    } else if (playAgain === `N`){
        return (`\nso ye never were a pirate were ya`)
    } else {
        console.log(`(Y or N)`);
        stillPlaying();
    }
}

function start() {
    while (pirate.hp > 0){
        menu()
    }
}

function restart(){
    console.log(`\nON ABOARD LADS!!!\n`)
    start()
}

start()

if (pirate.hp < 0) {
    dead()
}






function dead(){
    console.log(`\nas you die as a pirate fighting for what you believe in the other pirates take notice and they start to sing..`);
    stillPlaying()
}