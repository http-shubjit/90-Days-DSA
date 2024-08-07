
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

import java.util.ArrayList;
import java.util.Scanner;

/**
 * InnerMaxSlidingWindow
 */
interface InterMaxSlidingWindow {

    void Windowposition(ArrayList arrayList);
}

public class MaxSlidingWindow implements InterMaxSlidingWindow {

   

    @Override
    public void Windowposition(ArrayList arrayList) {
        int arr[] = new int[10];
        
        for (int i = 0; i < arrayList.size() - 3; i++) {
            Integer current = (Integer) arrayList.get(i);
            Integer next = (Integer) arrayList.get(i + 1);
            Integer nextNext = (Integer) arrayList.get(i + 2);

            if (current >= next && current >= nextNext) {
                arr[i] = current;
            } else if (next >= current && next >= nextNext) {
                arr[i] = next;

            } else {
                arr[i] = nextNext;
            }
        }
        System.out.println("Array contents:");
        for (int i : arr) {
            System.out.print(i + " ");
        }

    }

}

class Main {
    public static void main(String[] args) {

        MaxSlidingWindow mWindow = new MaxSlidingWindow();

        Scanner scanner = new Scanner(System.in);

        ArrayList arrayList = new ArrayList<Integer>(10);

        System.out.println("Enter the elements of the ArrayList:");
        for (int i = 0; i < arrayList.size(); i++) {
            int num = scanner.nextInt();
            arrayList.add(num);
        }

        mWindow.Windowposition(arrayList);
    }
}