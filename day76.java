import java.util.Arrays;

class Day76 {
    public static void main(String[] args) {
        String str = "listen";
        char arr[] = str.toCharArray();
        Arrays.sort(arr);
        String s = new String(arr);
        System.out.println(s);

        String string = "silent";
        char arr2[] = string.toCharArray();
        Arrays.sort(arr2);
        String s2 = new String(arr2);
        System.out.println(s2);

        if (s.equals(s2)) {
            System.out.println("True");

        }
        else {
            System.out.println("false");
        }

   }
    
}
