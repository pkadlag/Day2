
function f1(a)
{
    console.log(a);
 a();
}
/*i=100;
f1(i);*/
/*function f2()
{
    console.log("Hello");
}*/
f1(function(){console.log("Hello")});

