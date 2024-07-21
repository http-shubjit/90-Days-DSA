package Java.Collection;
import java.lang.annotation.Documented;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;
import java.util.Vector;

abstract class LiistClass {
    public abstract void addElement(List<Integer> aList);

    public abstract void print(List<Integer> aList,String string);
    

}

class Main extends LiistClass {

    @Override
    public void addElement(List<Integer> aList) {
        for (int i = 0; i < 10; i++) {
            aList.add(i);
        }

    }
    @Override
    public void print(List<Integer> aList,String string) {
        System.out.println("This is : "+string +"and Their Element are :");
        for(int i:aList)
        System.out.print(i+" ");

    }

   
    
    
    public static void main(String[] args) {
        Main main = new Main();

        List<Integer> list = new ArrayList<>();
        List<Integer> linkList = new LinkedList<>();
        Vector<Integer> vector = new Vector<>();
        Vector<Integer> stackVector = new Stack<>();

        //Arraylist
        main.addElement(list);
        main.print(list,"Arraylist");



    }



   
}
