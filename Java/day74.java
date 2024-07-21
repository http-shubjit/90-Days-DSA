package Java;
class SID {

    SID(int arr[], int key) {
        boolean found = false;
        for (int value : arr) {
            if (key == value) {
                found = true;
                break;
            }
        }
        if (found) {
            System.out.println("FOUND");
        } else {
            System.out.println("NOT FOUND");
        }
    }

    public static void main(String[] args) {
        int arr[] = new int[10];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        SID sid = new SID(arr, 5);
    }
}
