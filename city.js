//"use strict";
////console.log('city.js = ' + localStorage.getItem('selected-state'))
//exports.RONY = function(SQL, assert) {
//    var fs = require('fs');
//    var path = require('path');
//    var initSqlJs = require('sql-wasm.js');
//    var filebuffer = fs.readFileSync(path.join(__dirname, 'RONY.db'));
//    // Opens the DB
//    var db = new SQL.Database(filebuffer);
//
//    var res = db.exec("SELECT DISTINCT city, state FROM restaurants");
//    assert.deepEquals(res, [{"columns":["id","content"],"values":[["0","hello"],["1","world"]]}])
//}
//
//
//if (module == require.main) {
//	const target_file = process.argv[2];
//  const sql_loader = require('./load_sql_lib');
//  sql_loader(target_file).then((sql)=>{
//    require('test').run({
//      'test node file': function(assert){
//        exports.test(sql, assert);
//      }
//    });
//  })
//  .catch((e)=>{
//    console.error(e);
//    assert.fail(e);
//  });
//}
//

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
var supported_states = "AZ, PA, NV, OH, NC, WI, SC, IL, NY, NM"
var AZ = ["Phoenix","Scottsdale","Peoria","Goodyear","Sun City","Cave Creek","Tempe","Litchfield Park","Chandler","Glendale","Avondale","Gilbert","Surprise","Paradise Valley","Tolleson","Laveen","Fountain Hills","Queen Creek","Youngtown","Carefree","Buckeye","Laveen Village","Sun Lakes","Mesa","Cave Creek","Higley","Sun City West","El Mirage","Queen creek","Ahwatukee","Central City","Anthem"];
var PA = ["Pittsburgh","Wexford","West Homestead","Bethel Park","Canonsburg","Allison Park","Monroeville","Wilmerding","Pittsburg","Homestead","New Kensington","Irwin","Carnegie","Coraopolis","Crafton","Bridgeville","Millvale","McKeesport","Murrysville","Pleasant Hills","West Mifflin","Hampton Township","Wilkinsburg","Avalon","Monongahela","McMurray","Oakmont","Oakdale","Castle Shannon","Aspinwall","North Versailles","Tarentum","Harrison City","Gibsonia","Plum","Robinson Township","Moon Township","Forest Hills","Upper Saint Clair","Munhall","Pine","McKees Rocks","Sewickley","Peters Township","Imperial","Leetsdale","Elrama","Heidelberg","Presto","Braddock","North Strabane Township","Emsworth","Mcmurray","Penn Hills","Clinton","Sharpsburg","East McKeesport","Dravosburg","Brentwood","East Mc Keesport","Rural Ridge","Glenshaw","White Oak","Verona","Turtle Creek","Finleyville","Duquesne","Elizabeth","McCandless Township","East Liberty","Bellevue","Moon","Springdale","Kennedy Township","Mc Kees Rocks","Rostraver","Ben Avon","Harmarville","Ross Township","Oakland"];
var NV = ["Las Vegas","Henderson","North Las Vegas","Boulder City","Nellis AFB","Paradise","Enterprise","West Henderson","Blue Diamond","Spring Valley"];
var OH = ["Bedford","Mentor","Brunswick","Willoughby","Streetsboro","Parma Heights","Cuyahoga Falls","Solon","Mayfield Heights","Medina","Chesterland","Cleveland","North Ridgeville","Parma","Strongsville","Stow","Northfield","Amherst","Brecksville","Chardon","Westlake","Bay Village","Olmsted Falls","Lyndhurst","Aurora","Twinsburg","Warrensville Heights","Geauga","Concord","Grand River","Sheffield Village","North Olmsted","Independence","Akron","Kent","Highland Heights","Painesville","Hinckley","Beachwood","Chagrin Falls","Lakewood","Macedonia","Orange Village","Avon","Rocky River","Norton","South Euclid","North Randall","North Royalton","Montrose","Avon Lake","Richfield","Fairview Park","Cleveland Heights","University Heights","Tallmadge","Burton","Lorain","Middlefield","Hudson","Brook Park","Elyria","Seven Hills","Kirtland","Orange","Brooklyn","Fairlawn","Medina Township","Garfield Heights","Berea","Fairport Harbor","Willowick","Broadview Heights","Shaker Heights","Euclid","Wickliffe","Mayfield","Middleburg Heights","Bainbridge","Columbia Station","Moreland Hills","Richmond Heights","Woodmere","Willoughby Hills","Wadsworth","Valley View","Eastlake","lyndhurst","Copley","Mayfield Village","Bainbridge Township","East Cleveland","Peninsula","Bedford Heights","Oakwood Village","Maple Heights","Newbury","Pepper Pike","Hyland Heights","Chargrin Falls","Munroe Falls"];
var NC = ["Gastonia","Charlotte","Indian Trail","Matthews","Pineville","Davidson","Cornelius","Montgomery","Mint Hill","Stallings","Concord","Huntersville","Denver","Harrisburg","Mount Holly","Cramerton","Belmont","Stanley","Midland","Kannapolis","Mt Holly","Waxhaw","Monroe","Locust","Wesley Chapel","Indian land","Dallas","Mooresville","Weddington","North Charlotte"];
var WI = ["Middleton","Oregon","Madison","Sun Prairie","Verona","Windsor","Waunakee","Fitchburg","Monona","Stoughton","DeForest","McFarland","Cottage Grove","Deforest","Mount Horeb","Cross Plains","Columbus","Shorewood Hills","Deerfield"];
var SC = ["Fort Mill","Rock Hill","Indian Land","Lake Wylie","Tega Cay","Clover","Charlotte"];
var IL = ["Champaign","Urbana","Rantoul","Savoy","Mahomet","Homer","Monticello"];
var NY = ["Rouses Point"];
var NM = ["Las Vegas"];

/*initiate the autocomplete function based on the state that the user selected on the previous page (state.html) on the "myInput" element, and pass along the state array with cities within that state as possible autocomplete values:*/
if(localStorage.getItem('selected-state') == '04'){
  autocomplete(document.getElementById("myInput"), AZ);
}
else if(localStorage.getItem('selected-state') == '42'){
  autocomplete(document.getElementById("myInput"), PA);
}
else if(localStorage.getItem('selected-state') == '32'){
  autocomplete(document.getElementById("myInput"), NV);
}
else if(localStorage.getItem('selected-state') == '39'){
  autocomplete(document.getElementById("myInput"), OH);
}
else if(localStorage.getItem('selected-state') == '37'){
  autocomplete(document.getElementById("myInput"), NC);
}
else if(localStorage.getItem('selected-state') == '55'){
  autocomplete(document.getElementById("myInput"), WI);
}
else if(localStorage.getItem('selected-state') == '46'){
  autocomplete(document.getElementById("myInput"), SC);
}
else if(localStorage.getItem('selected-state') == '17'){
  autocomplete(document.getElementById("myInput"), IL);
}
else if(localStorage.getItem('selected-state') == '36'){
  autocomplete(document.getElementById("myInput"), NY);
}
else if(localStorage.getItem('selected-state') == '35'){
  autocomplete(document.getElementById("myInput"), NM);
}
else {
  //alerts the user that the state they chose is not supported, and redirects them to the state selection page
  alert("The state you have selected is not yet implemented.\n"
   + "Supported States:\n" + supported_states);
  window.document.location= "./state.html";
}