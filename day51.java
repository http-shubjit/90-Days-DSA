import java.util.ArrayList;

class Query {
    int L;
    int R;

    Query(int L, int R) {
        this.L = L;
        this.R = R;
    }
    
    
}

class GFG {
    
    static void printQuerysums(int arr[], int length, ArrayList<Query> q, int size) {
        for (int i = 0; i < size; i++) {
            int L = q.get(i).L;
            int R = q.get(i).R;
            int sum = 0;
            for (int j = L; j <= R; j++) {
                sum = sum + arr[j];
            }
            System.out.println(L + "+" + R + "=" + sum);

        }
    }
 public static void main(String[] args) {
     int arr[] = { 1, 1, 2, 1, 3, 4, 5, 2, 8 };
     int length = arr.length;
     ArrayList<Query> q = new ArrayList<Query>();
     q.add(new Query(0, 4));
     q.add(new Query(1, 3));
     q.add(new Query(2, 4));
     int size = q.size();
     printQuerysums(arr, length, q, size);
    
 }
}