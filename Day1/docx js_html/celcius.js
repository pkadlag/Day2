function myFunction()
{
    var y = document.getElementById("txt1").value;
    if(y.length<1)
    {
        window.alert("Invalid Input");
        return false;
    }
    if(isNaN(y))
    {
        window.alert("Please enter numeric values");
        return false;
    }
    var z=(y-32)*(5/9);
    document.getElementById("txt2").value = z;
}