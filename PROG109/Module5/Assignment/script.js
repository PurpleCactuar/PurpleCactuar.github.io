let table;
do { table = prompt ("Give me a number between 0 and 10?");
var operator = 'multiplication';
var i = 1;               
var msg = "<h2>Multiplication Table</h2>";   

if (operator === 'multiplication') {
    while (i < 10) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }

}
/*put msg on blkboard*/
var el = document.getElementById('blackboard');
el.innerHTML = msg;
