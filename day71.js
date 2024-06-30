// //   const fetchData = async () => {
// //       try {
// //         const response = await fetch("https://tetratrionofficial.github.io/hosted_api/assignment_dashboard.json");
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }
// //           const data = await response.text();
// //           const strdata = JSON.parse(data)
         
// // } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };
// //  fetchData()

// You are given an unsorted array of integers. Find the maximum sum of a contiguous subarray.


const arr = [9, 3, 4, 2, 10, 45, 2]

const findmaxsum = (arr) => {
  let sum = 0;
  let maxsum=0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i + 1]) {
  sum=sum+arr[i]
    }
    else {
  sum=sum+arr[i]
      if (sum > maxsum)
         maxsum=sum
      sum = 0;
    }
    
  }
  return maxsum;
}
console.log(findmaxsum(arr))