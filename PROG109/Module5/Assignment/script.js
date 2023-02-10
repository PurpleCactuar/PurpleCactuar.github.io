/*asks user for number, table unit*/
let table;
do { table = prompt ("Give me a number between 0 and 10?");
} while (Number(table) === NaN || table < 0 || table > 10)
  
  /*initial value*/
var i = 1;                
var msg = "<h2>Multiplication Table</h2>";   

} else {
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }

}
/*put msg on blkboard*/
var el = document.getElementById('blackboard');
el.innerHTML = msg;
