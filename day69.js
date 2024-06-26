// • Bitwise subsequence

// Input            Output                          Output description
//                                         One possible subsequence is: 5 12
// 5                  2
// 15
// 6
// 5
// 12
// 1


function lenOfLongIncSubArr(arr, n)
{

var max = 1, len = 1;
	
	
	for (var i=1; i<n; i++)
	{
		
		if (arr[i] > arr[i-1])
			len++;
		else
		{if (max < len) 
			{
				max = len;
			}	
            len = 1;
		} 
	}
	
	
	if (max < len)
	{
		max = len;
	}
return max;
}

var arr = [5, 15, 6, 5, 12, 1];
var n = arr.length;
console.log(lenOfLongIncSubArr(arr,n))
