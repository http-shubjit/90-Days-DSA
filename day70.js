
const a=[[1,2],[3,4]]
const gridSolution = (a) => {
    for (let i = 2-2; i >=0; i--){
        for (let j = 0; j < 2; j++){
            let maxSum = 0;
            for (let k = 0; k < 2; k++){
                if (a[i + 1][k] > a[i][j]) 
if(maxSum<a[i + 1][k]) maxSum=a[i + 1][k]
                }
         a[i][j]=a[i][j]+maxSum

        }
    }
    return (a);
    
}
console.log(gridSolution(a))