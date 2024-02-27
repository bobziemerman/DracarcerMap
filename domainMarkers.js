/* Color legend
 *  * Red: Safe for tier 4
 *  * Green: Safe for tier 1
 *  * Orange: Safe for tier 3
 *  * Yellow: Safe for tier 2
 */


//Template
/*
{
x:'',
y:'',
color:'green',
text:'<b></b>'
},
*/


const domainMarkers = [

//feyboughs
{
x:'540',
y:'375',
color:'yellow',
text:'<b>Nyramox, F young red dragon</b>'
},
{
x:'510',
y:'358',
color:'green',
text:'<b>The Iron Lions</b>'
},
{
x:'480',
y:'341',
color:'green',
text:'<b>The Iron Lions</b>'
},
{
x:'480',
y:'375',
color:'yellow',
text:'<b>The Long Mirage</b>'
},
{
x:'480',
y:'236',
color:'green',
text:'<b>Arcgis</b>'
},
{
x:'270',
y:'288',
color:'yellow',
text:'<b>Ryne, F adult bronze dragon</b>'
},
{
x:'301',
y:'306',
color:'yellow',
text:'<b>Ryne, F adult bronze dragon</b>'
},
{
x:'300',
y:'341',
color:'yellow',
text:'<b>Ryne, F adult bronze dragon</b>'
},
{
x:'420',
y:'340',
color:'green',
text:'<b>Azuroc</b>'
},
{
x:'450',
y:'360',
color:'green',
text:'<b>Azuroc</b>'
},
{
x:'390',
y:'324',
color:'green',
text:'<b>Azuroc</b>'
},
{
x:'420',
y:'307',
color:'green',
text:'<b>Azuroc</b>'
},
{
x:'419',
y:'376',
color:'green',
text:'<b>Azuroc</b>'
},
{
x:'509',
y:'428',
color:'green',
text:'<b>The Red River Riders</b>'
},
{
x:'571',
y:'392',
color:'green',
text:'<b>Magzir, M young copper dragon</b>'
},
{
x:'271',
y:'255',
color:'green',
text:'<b>Rakesk</b>'
},
{
x:'350',
y:'238',
color:'green',
text:'<b>Lucis</b>'
},
{
x:'420',
y:'238',
color:'orange',
text:'<b>Archerald</b>'
},
{
x:'450',
y:'254',
color:'orange',
text:'<b>Archerald</b>'
},
{
x:'449',
y:'226',
color:'orange',
text:'<b>Archerald</b>'
},
{
x:'537',
y:'140',
color:'green',
text:'<b>Sebassa</b>'
},
{
x:'630',
y:'251',
color:'yellow',
text:'<b>Monitum</b>'
},
{
x:'513',
y:'383',
color:'yellow',
text:'<b>Fortis</b>'
},
{
x:'448',
y:'461',
color:'yellow',
text:'<b>Saeculum</b>'
},


//wasteland
{
x:'661',
y:'98',
color:'orange',
text:'<b>The Infinite Library</b>'
},
{
x:'690',
y:'80',
color:'orange',
text:'<b>The Infinite Library</b>'
},
{
x:'729',
y:'131',
color:'orange',
text:'<b>The Lake Gate</b>'
},
{
x:'750',
y:'139',
color:'red',
text:'<b>Amber Gate Memorial Dragons</b>'
},
{
x:'832',
y:'171',
color:'red',
text:'<b>The Stone Gate</b>'
},
{
x:'953',
y:'28',
color:'red',
text:'<b>The Silent Gate</b>'
},


//badlands
{
x:'749',
y:'325',
color:'yellow',
text:'<b>Grukagg</b>'
},
{
x:'834',
y:'347',
color:'green',
text:'<b>The Lighthouse</b>'
},


//fellwood
{
x:'720',
y:'478',
color:'green',
text:'<b>Corwald</b>'
},
{
x:'691',
y:'462',
color:'green',
text:'<b>Corwald</b>'
},
{
x:'691',
y:'495',
color:'green',
text:'<b>Corwald</b>'
},
{
x:'814',
y:'468',
color:'green',
text:'<b>Linhollow</b>'
},
{
x:'836',
y:'438',
color:'green',
text:'<b>Elnaril</b>'
},
{
x:'690',
y:'530',
color:'green',
text:'<b>Westgarde</b>'
},
{
x:'569',
y:'497',
color:'green',
text:'<b>Zalaria</b>'
},
{
x:'891',
y:'578',
color:'yellow',
text:'<b>Mistharbor</b>'
},
{
x:'930',
y:'637',
color:'yellow',
text:'<b>Freeport</b>'
},
{
x:'721',
y:'661',
color:'green',
text:'<b>Stagwind</b>'
},


//redweald
{
x:'540',
y:'619',
color:'yellow',
text:"<b>The Marquess' Boarding School for Bewitchment</b>"
},
{
x:'512',
y:'562',
color:'yellow',
text:'<b>Aldmorrow</b>'
},
{
x:'488',
y:'651',
color:'yellow',
text:'<b>Fallwinter</b>'
},
{
x:'572',
y:'697',
color:'yellow',
text:'<b>Lazhani</b>'
},
{
x:'570',
y:'737',
color:'green',
text:'<b>Dracwyn</b>'
},
{
x:'600',
y:'722',
color:'green',
text:'<b>Dracwyn</b>'
},
{
x:'389',
y:'565',
color:'orange',
text:'<b>Malaemor</b>'
},
{
x:'477',
y:'789',
color:'green',
text:'<b>Valbarrow</b>'
},


//permafrost
{
x:'150',
y:'597',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'91',
y:'634',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'91',
y:'666',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'30',
y:'706',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'29',
y:'740',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'120',
y:'723',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'58',
y:'793',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'32',
y:'776',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'91',
y:'739',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'121',
y:'756',
color:'grey',
text:'<b>??? TODO</b>'
},

{
x:'327',
y:'740',
color:'green',
text:'<b>Herravor</b>'
},
{
x:'275',
y:'773',
color:'orange',
text:'<b>Icewatch</b>'
},
{
x:'269',
y:'702',
color:'orange',
text:'<b>Valspart</b>'
},
{
x:'300',
y:'687',
color:'green',
text:'<b>Valspart</b>'
},
{
x:'270',
y:'670',
color:'green',
text:'<b>Valspart</b>'
},
{
x:'301',
y:'650',
color:'green',
text:'<b>Vrukh</b>'
},
{
x:'331',
y:'701',
color:'orange',
text:'<b>Minavam</b>'
},
{
x:'328',
y:'670',
color:'orange',
text:'<b>Minavam</b>'
},
{
x:'240',
y:'617',
color:'yellow',
text:'<b>Smallport</b>'
},
{
x:'270',
y:'600',
color:'yellow',
text:'<b>Dzyun</b>'
},
{
x:'298',
y:'582',
color:'yellow',
text:'<b>Dzyun</b>'
},
{
x:'269',
y:'567',
color:'yellow',
text:'<b>Dzyun</b>'
},
{
x:'329',
y:'565',
color:'green',
text:'<b>Nyokadi</b>'
},


//blackmire
{
x:'149',
y:'461',
color:'yellow',
text:"<b>Bos'shant, M young green dragon</b>"
},
{
x:'119',
y:'374',
color:'red',
text:'<b>TODO, F adult red dragon</b>'
},
{
x:'90',
y:'394',
color:'red',
text:'<b>TODO, F adult red dragon</b>'
},
{
x:'90',
y:'355',
color:'red',
text:'<b>TODO, F adult red dragon</b>'
},
{
x:'60',
y:'376',
color:'red',
text:'<b>TODO, F adult red dragon</b>'
},
{
x:'181',
y:'340',
color:'orange',
text:'<b>Rersom, M adult black dragon</b>'
},
{
x:'210',
y:'357',
color:'orange',
text:'<b>Rersom, M adult black dragon</b>'
},
{
x:'150',
y:'356',
color:'orange',
text:'<b>Rersom, M adult black dragon</b>'
},
{
x:'180',
y:'375',
color:'orange',
text:'<b>Rersom, M adult black dragon</b>'
},
{
x:'210',
y:'324',
color:'yellow',
text:'<b>Kesmeldaz, F young bronze dragon</b>'
},
{
x:'150',
y:'427',
color:'orange',
text:'<b>Jha, M ancient green dragon</b>'
},
{
x:'180',
y:'407',
color:'orange',
text:'<b>Jha, M ancient green dragon</b>'
},
{
x:'150',
y:'392',
color:'orange',
text:'<b>Jha, M ancient green dragon</b>'
},
{
x:'120',
y:'410',
color:'orange',
text:'<b>Jha, M ancient green dragon</b>'
},
{
x:'240',
y:'373',
color:'yellow',
text:'<b>Peldrad, M ancient bronze dragon</b>'
},
{
x:'240',
y:'411',
color:'yellow',
text:'<b>Peldrad, M ancient bronze dragon</b>'
},
{
x:'210',
y:'394',
color:'yellow',
text:'<b>Peldrad, M ancient bronze dragon</b>'
},
{
x:'150',
y:'287',
color:'orange',
text:'<b>Cricelas, F adult amethyst dragon</b>'
},
{
x:'120',
y:'272',
color:'orange',
text:'<b>Cricelas, F adult amethyst dragon</b>'
},
{
x:'150',
y:'254',
color:'orange',
text:'<b>Cricelas, F adult amethyst dragon</b>'
},
{
x:'180',
y:'272',
color:'orange',
text:'<b>Cricelas, F adult amethyst dragon</b>'
},
{
x:'59',
y:'306',
color:'green',
text:'<b>Verua, F young bronze dragon</b>'
},
{
x:'90',
y:'428',
color:'green',
text:'<b>Myalren, F young black dragon</b>'
},


//sage islands
{
x:'119',
y:'131',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'149',
y:'150',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'179',
y:'132',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'148',
y:'114',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'89',
y:'148',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'89',
y:'115',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'179',
y:'94',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'207',
y:'115',
color:'grey',
text:'<b>Sage Guild</b>'
},
{
x:'240',
y:'131',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'268',
y:'116',
color:'grey',
text:'<b>??? TODO</b>'
},
{
x:'301',
y:'97',
color:'grey',
text:'<b>??? TODO</b>'
},


//sanguine isles
{
x:'930',
y:'670',
color:'red',
text:'<b>Vylleth, the pirate queen</b>'
},
{
x:'898',
y:'653',
color:'red',
text:'<b>Vylleth, the pirate queen</b>'
},{
x:'960',
y:'653',
color:'grey',
text:"<b>The Widower's Sorrow</b>"
},


//mount svovl
{
x:'928',
y:'323',
color:'red',
text:'<b>Zalrym, M adult red dragon</b>'
},
{
x:'900',
y:'340',
color:'red',
text:'<b>Zuvaele, ancient red dracolich</b>'
},
{
x:'900',
y:'304',
color:'yellow',
text:'<b>Asilyl, F young red dragon</b>'
},



//other
{
x:'240',
y:'306',
color:'orange',
text:'<b>Bronze dragon warzone</b>'
},
{
x:'269',
y:'324',
color:'orange',
text:'<b>Bronze dragon warzone</b>'
},
{
x:'269',
y:'358',
color:'orange',
text:'<b>Bronze dragon warzone</b>'
},
{
x:'239',
y:'341',
color:'orange',
text:'<b>Bronze dragon warzone</b>'
},



]
