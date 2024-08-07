// import java.lang.reflect.Array;
// import java.util.Arrays;

// interface InnerCoinChange {
// public void Change(int a[],int amount);
    
// }

// public class CoinChange implements InnerCoinChange{

//     @Override
//     public void Change(int[] a, int amount) {
//         Arrays.sort(a);
//         if (amount <= 0)
//             System.out.println("You Have No Amount");
//         else {
//             for (int i =  a.length-1; i >=0; i--) {

//                 while (amount >= a[i]) {
//                     amount = amount - a[i];
//                     System.out.println(a[i]);
                    
//                 }
//             }
//         }

//     }


// }


// class Main {

//     public static void main(String[] args) {
//         CoinChange coinChange = new CoinChange();
//         int arr[]={1,2,5,10,20,50,100};
//         coinChange.Change(arr, 10);
        
//     }
// }
