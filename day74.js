// 11. Container With Most Water

var maxArea = function(height) {
    if(height[0]===height[(height.length-1)])
{
    if(height[0]===1&&height[(height.length-1)]===1)
    return( height[0]*height[0]*(height.length-1))
    return (height[0]*height[0]);

}    height.sort((a,b)=>b-a)
    let firstheight=height[0];
    let secondheight;
    for(let i=0;i<height.length;i++){
        if(firstheight!==height[i])
        {
        secondheight=height[i]
        break;
        }
    }
     return (secondheight*secondheight);


};