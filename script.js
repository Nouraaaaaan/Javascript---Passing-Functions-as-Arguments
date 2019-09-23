
//------------------------------------------Passing Functions as Arguments------------------------------------------------------//

function ArrayCalc(arr,fn)
{
    var ResultArray = [];

    for(var i = 0; i<arr.length; i++)
    {
        ResultArray.push(fn(arr[i]));
    }

    return ResultArray;
}

//NOTE :- CalCulateAge is called call back function.
function CalCulateAge(element)
{
    return 2019 - element;
}


//pass function as an argument
var years = [1990,1965,1937,2005,1998];

var Array = ArrayCalc(years,CalCulateAge);

console.log(Array);

