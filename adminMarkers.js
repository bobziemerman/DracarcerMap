/* Color legend
 *  *
 *   * Blue: People
 *    * Red: Monsters
 *     * Green: Party
 *      * Orange: TODO
 *       * Yellow: Event
 *        * Purple: Object
 *         * Grey: Location
 *          * Black: TODO
 *           */

/* History values
 *  *
 *   * -: Anyone from anywhere would know of this
 *    * 1: If you get near the area, everyone knows (basic facts)
 *     * 2: Discoverable, but requires asking specific questions
 *      * 3: Technically public record; but often forgotten
 *       * 4: Obscure; may be culture or occupation specific knowledge
 *        * 5: Known only to those it is immediately relevant to
 *         * 6: Loosely guarded secret
 *          * 7: Need-to-know basis
 *           * 8: Protected secret
 *            * 9: Only a handful of people know
 *             * 10: Lore nearly impossible to find out about
 *              */


const adminMarkers = [

//Anschluss
{
x:'174',
y:'358',
color:'blue',
text:'<b>Jha</b> <br/> Disguised adult green dragon leading the Achask'
},
{
x:'178',
y:'371',
color:'blue',
text:'<b>Lulthusoc Eshdrith</b> <br/> Disguised couatl leading the Lulthusoc'
},


//Evedale
{
x:'393',
y:'376',
color:'purple',
text:"<b>Bloodwell</b>"
},
{
x:'352',
y:'427',
color:'purple',
text:"<b>Veil of Night</b> <br/> In Evaire, Underdark"
},
{
x:'380',
y:'426',
color:'blue',
text:"<b>Vitiate/Necromancer stronghold</b>"
},
{
x:'234',
y:'469',
color:'red',
alt:true,
text:'<b>Zalrym and Asilyl</b> <br/> Red dragons'
},


//Hartland
{
x:'580',
y:'430',
color:'red',
alt:true,
text:'<b>Lathe and Hymress</b> <br/> Green dragons'
},

//Istovia
{
x:'298',
y:'690',
color:'red',
alt:true,
text:'<b>Ozurth and Alrir</b> <br/> Crystal dragons'
},
{
x:'330',
y:'630',
color:'red',
text:'<b>Eveo, Irryn, Namas, and Adhe</b> <br/> Silver dragons'
},


//Neeru
{
x:'657',
y:'174',
color:'purple',
text:"<b>Upwelling</b> <br/> At the edge of Neeru territory"
},
{
x:'853',
y:'227',
color:'red',
alt:true,
text:'<b>Orryss and Udyt</b> <br/> Amethyst dragons'
},


//Qurea
{
x:'625',
y:'339',
color:'purple',
text:"<b>Wellspring</b>"
},


//Wrakarr
{
x:'394',
y:'46',
color:'purple',
text:"<b>Akamptos' gate</b> <br/> Unbeing, death, entropy"
},
{
x:'462',
y:'223',
color:'grey',
text:"<b>Exhousia's palace</b> <br/> Strength, energy"
},
{
x:'443',
y:'214',
color:'purple',
text:"<b>Eirin's gate</b> <br/> Peace, harmony, rest"
},
{
x:'531',
y:'223',
color:'purple',
text:"<b>Fos' gate</b> <br/> Light, knowledge"
},
{
x:'331',
y:'212',
color:'purple',
text:"<b>Skotadi's gate</b> <br/> Darkness, secrets, confusion"
},
{
x:'375',
y:'240',
color:'purple',
text:"<b>Polemos' gate</b> <br/> War, fire, chaos, descruction"
},
{
x:'374',
y:'199',
color:'purple',
text:"<b>Edafos' gate</b> <br/> Earth, land, solids"
},
{
x:'580',
y:'111',
color:'purple',
text:"<b>Thalassa's gate</b> <br/> Water, oceans, liquid"
},
{
x:'213',
y:'121',
color:'purple',
text:"<b>Anemos' gate</b> <br/> Air, movement, gases"
},
{
x:'238',
y:'132',
color:'purple',
text:'<b>Feygate</b>'
},

]
