/*
 * Blue: People
 * Red: Monsters
 * Green: Party
 * Orange: TODO
 * Yellow: Event
 * Purple: Object
 * Grey: Location
 * Black: TODO
 */

const generalMarkers = [

//Anschluss
{
x:'306',
y:'366',
color:'red',
history:'2',
text:"<b>Behir-infested waters</b>"
},
{
x:'255',
y:'395',
color:'grey',
history:'1',
text:"<b>Dellith</b> <br/> Primary Vechish village"
},
{
x:'244',
y:'348',
color:'grey',
history:'3',
text:"<b>Remains of Bos'shant</b> <br/> Lizardfolk holy site"
},
{
x:'218',
y:'402',
color:'grey',
history:'2',
text:"<b>Hrabkistver</b> <br/> Fenkenkabradon seat of power and mining operation"
},
{
x:'131',
y:'388',
color:'grey',
history:'3',
text:'<b>Grung colony</b>'
},
{
x:'175',
y:'358',
color:'grey',
history:'3',
text:'<b>Uzhegh-kanon</b> <br/> Achask stronghold'
},
{
x:'233',
y:'317',
color:'grey',
history:'4',
text:'<b>Arrav\'tur</b> <br/> Duthru trade hub'
},
{
x:'276',
y:'320',
color:'grey',
history:'4',
text:'<b>Gazananots\'y</b> <br/> Lushenk breeding grounds'
},
{
x:'276',
y:'320',
color:'grey',
history:'7',
text:'<b>Vacharrel</b> <br/> Shargurd temple'
},
{
x:'174',
y:'420',
color:'grey',
history:'4',
text:'<b>Keghtsvats</b> <br/> Urthec greatforge and mining operation'
},
{
x:'221',
y:'353',
color:'grey',
history:'4',
text:'<b>Aghbyury</b> <br/> Imral nexus of power'
},
{
x:'276',
y:'320',
color:'grey',
history:'4',
text:'<b>Patcharr</b> <br/> Lulthusoc council chambers'
},
{
x:'143',
y:'422',
color:'red',
history:'5',
text:'<b>Peldrad and Ryne</b> <br/> Bronze dragons <br/> Revered as deities by the Urthec'
},
{
x:'124',
y:'348',
color:'red',
history:'7',
text:'<b>Rersom</b> <br/> Black dragon'
},
{
x:'295',
y:'294',
color:'red',
history:'9',
text:'<b>Undir</b> <br/> Black dragon'
},


//Evedale
{
x:'452',
y:'359',
color:'grey',
history:'2',
text:"<b>Old Aldmorrow</b> <br/> Began a civil war with sister city Foxwynne in 9935, was destroyed by demons, and was eventually reclaimed as a part of greater Foxwynne"
},
{
x:'293',
y:'437',
color:'yellow',
history:'1',
text:"<b>Opening to Underdark</b> <br/> 9936: Drow emerge from Underdark <br/> 9941: Blackfrost Treaty signed <br/> 9995: Undead emerge from Underdark"
},
{
x:'301',
y:'450',
color:'grey',
history:'6',
text:'<b>Haedleigh</b> <br/> Historically has had an unusual amount of werewolf activity'
},
{
x:'265',
y:'472',
color:'purple',
history:'8',
text:'<b>Feygate</b>'
},
{
x:'339',
y:'555',
color:'purple',
history:'4',
text:'<b>Feygate</b>'
},
{
x:'310',
y:'441',
color:'grey',
history:'2',
text:'<b>Ruins of Valeyard Keep</b>'
},
{
x:'231',
y:'482',
color:'red',
history:'7',
text:'<b>Zuvaele</b> <br/> Red dragon lich'
},
{
x:'234',
y:'469',
color:'red',
history:'5',
text:'<b>Zalrym</b> <br/> Red dragon'
},


//Hartland
{
x:'661',
y:'407',
color:'grey',
history:'4',
text:"<b>Kamidryma</b> <br/> Arcane academy"
},
{
x:'731',
y:'458',
color:'red',
history:'1',
text:"<b>Goblin cave</b>"
},
{
x:'639',
y:'436',
color:'blue',
history:'1',
text:"<b>Fellmen</b> <br/> Bandit group based just outside Corwald"
},
{
x:'750',
y:'494',
color:'blue',
text:"<b>Steelbourne Collective</b> <br/> Large bandit alliance"
},
{
x:'622',
y:'418',
color:'grey',
history:'1',
text:'<b>Ruins of Three Water Keep</b>'
},
{
x:'657',
y:'407',
color:'purple',
history:'6',
text:'<b>Feygate</b>'
},
{
x:'931',
y:'494',
color:'blue',
history:'1',
text:'<b>Vyllelth</b> <br/> Pirate queen'
},
{
x:'849',
y:'484',
color:'blue',
history:'4',
text:'<b>Azura</b> <br/> Captain of The Widower\'s Remorse'
},
{
x:'671',
y:'513',
color:'green',
history:'5',
text:'<b>Bragen</b> <br/> Green dragon'
},
{
x:'580',
y:'430',
color:'red',
history:'6',
text:'<b>Lathe</b> <br/> Green dragon'
},


//Istovia
{
x:'330',
y:'628',
color:'blue',
history:'4',
text:"<b>Nyokadi</b> <br/> Last known settlement of Light Elves"
},
{
x:'301',
y:'450',
color:'purple',
history:'3',
text:'<b>The Warforge</b> <br/> Production facility for Istovia\'s soldiers'
},
{
x:'461',
y:'655',
color:'grey',
history:'1',
text:'<b>Valspart</b> <br/> National bank and security vault <br/> Sacred site for the worship and protection of religious relics <br/> Seat of the Heald'
},
{
x:'568',
y:'717',
color:'purple',
history:'10',
text:'<b>Feygate</b>'
},
{
x:'566',
y:'719',
color:'red',
history:'8',
text:'<b>Varelle</b> <br/> White dragon'
},
{
x:'298',
y:'690',
color:'red',
history:'6',
text:'<b>Ozurth</b> <br/> Crystal dragon'
},
{
x:'603',
y:'777',
color:'red',
history:'5',
text:'<b>Frindri</b> <br/> Crystal dragon'
},


//Neeru
{
x:'759',
y:'259',
color:'grey',
history:'2',
text:"<b>Ruins of collapsed Magisterium</b>"
},
{
x:'855',
y:'252',
color:'purple',
history:'10',
text:'<b>Feygate</b>'
},
{
x:'853',
y:'227',
color:'red',
history:'10',
text:'<b>Orryss</b> <br/> Amethyst dragon'
},
{
x:'739',
y:'190',
color:'red',
history:'6',
text:'<b>Mivas</b> <br/> Sapphire dragon'
},
{
x:'829',
y:'300',
color:'red',
history:'7',
text:'<b>Hirsontilth</b> <br/> Sapphire dragon'
},


//Qurea
{
x:'487',
y:'312',
color:'grey',
history:'2',
text:"<b>Monitum</b> <br/> Wrakarr research outpost"
},
{
x:'626',
y:'339',
color:'grey',
text:"<b>Saop\'ero Musical Academy</b>"
},
{
x:'497',
y:'382',
color:'grey',
text:"<b>Fields of Glory</b> <br/> Home of Shieldmeet"
},
{
x:'755',
y:'264',
color:'grey',
text:"<b>Archerald</b> <br/> Bastion of Wonderous Knowledge<br/>and Extraordinary Lore <br/><br/> Way of Ways"
},
{
x:'701',
y:'218',
color:'yellow',
history:'3',
text:"<b>First Orcs landed on Aidilon in 3476</b>"
},
{
x:'694',
y:'355',
color:'purple',
history:'2',
text:"<b>Portals to the Feywild</b>"
},
{
x:'744',
y:'252',
color:'grey',
history:'1',
text:"<b>Main route to Neeru</b>"
},
{
x:'670',
y:'310',
color:'yellow',
history:'3',
text:"<b>Lizardfolk massacre of 9945</b>"
},
{
x:'581',
y:'330',
color:'grey',
history:'5',
text:"<b>Multiversal Nexus</b>"
},
{
x:'753',
y:'264',
color:'purple',
history:'1',
text:"<b>Worldbreaker of Nahroh</b> <br/> Legendary greathammer blessed by Edda"
},
{
x:'479',
y:'304',
color:'purple',
history:'7',
text:'<b>Feygate</b>'
},
{
x:'682',
y:'221',
color:'red',
history:'3',
text:'<b>Adreres</b> <br/> Copper dragon <br/> Often "fights" with the Orcs of Grukagg, especially during Urag'
},
{
x:'603',
y:'271',
color:'red',
history:'5',
text:'<b>Simi</b> <br/> Copper dragon'
},
{
x:'560',
y:'304',
color:'red',
history:'7',
text:'<b>Baydheilo</b> <br/> Copper dragon'
},

]
