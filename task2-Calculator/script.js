function show(value)
{
    document.getElementById("result").value += value;
}

function answer()
{
    var x = document.getElementById("result").value;
    document.getElementById("result").value = eval(x);
}

function clearData()
{
    document.getElementById("result").value = "";
}