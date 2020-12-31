var list=[];
function submit()

{
first=document.getElementById("n1").value;
second=document.getElementById("n2").value;
third=document.getElementById("n3").value;
fourth=document.getElementById("n4").value;

list.push(first);
list.push(second);
list.push(third);
list.push(fourth);


console.log(list);
document.getElementById("output").innerHTML=list;

}


function sort ()
{
    list.sort();
    console.log(list);
    document.getElementById("output").innerHTML=list;
}