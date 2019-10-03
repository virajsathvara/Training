//Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​ frequent​ ​ item​ ​ of​ ​ an​ ​ array.

let arr = [2,34,12,52,2,12,31,124,1,231,231,1231,4,56,67655,34,34,123,3235,634];

let findFrequent = (arr) => {
    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<arr.length; i++)
    {
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr[i];
                }
        }
        m=0;
    }
    console.log(item+" ( " +mf +" times ) ") ;
}

findFrequent(arr);