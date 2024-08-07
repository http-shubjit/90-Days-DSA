class Binarysearch {
  int binarysearch(int arr[], int start, int end, int k) {
        if (end >= start) {
            int mid = start + end / 2;
            if (arr[mid] == k) {
                return mid;
            }
            if (arr[mid] > k) {
                binarysearch(arr, start, mid - 1, k);
            }
        if (arr[mid]<k) {
            binarysearch(arr, mid + 1, end, k);
        }
        }
        
        return -1;
    }
    public static void main(String[] args) {
        
        int arr[] = { 2, 3, 4, 10, 40 };
        int start = 0;
        int end = arr.length - 1;

        int k=4;
        Binarysearch ob = new Binarysearch();
        int res = ob.binarysearch(arr, start, end, k);
    System.out.println("Index No :"+res);

    }
    
}
