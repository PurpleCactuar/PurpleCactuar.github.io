/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("experience").disabled = true;
})

function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let address = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
        document.getElementById("experience").disabled = false;
        document.getElementById("cust").value = name;
        document.getElementById("visitdate").value = new Date();
    }
    else {
        alert("please fill in all fields");
    }
