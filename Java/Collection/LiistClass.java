import java.lang.annotation.Documented;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.Vector;

abstract class LiistClass {
    public abstract void addElement(List<Integer> aList);

    public abstract void print(List<Integer> aList, String string);

    public abstract void removeElement(List<Integer> aList);

}


class ArrayListCreation extends LiistClass {

    @Override
    public void addElement(List<Integer> aList) {
        for (int i = 0; i < 10; i++) {
            aList.add(i);
        }

    }

    @Override
    public void print(List<Integer> aList, String string) {
        System.out.println("This is a " + string );
            System.out.print(aList+"\n");

    }

    @Override
    public void removeElement(List<Integer> aList) {
        aList.remove(0);
        aList.remove(1);
        aList.remove(2);
        aList.remove(3);

    }

}

class LinkedListCreation extends LiistClass {

    @Override
    public void addElement(List<Integer> aList) {
        for (int i = 0; i < 10; i++) {

            aList.add(i);
        }

    }

    @Override
    public void print(List<Integer> aList, String string) {
        System.out.println("This is a " + string);
        System.out.print(aList + "\n");
    }

    @Override
    public void removeElement(List<Integer> aList) {
        aList.remove(0);
        aList.remove(1);
        aList.remove(2);
        aList.remove(3);

    }

}

class VectorCreation extends LiistClass {

    @Override
    public void addElement(List<Integer> aList) {
        for (int i = 0; i < 10; i++) {

            aList.add(i);
        }

    }

    @Override
    public void print(List<Integer> aList, String string) {
        System.out.println("This is a " + string);
        System.out.print(aList + "\n");
    }

    @Override
    public void removeElement(List<Integer> aList) {
        aList.remove(0);
        aList.remove(1);
    }
    
}

class StackCreation extends LiistClass {

    @Override
    public void addElement(List<Integer> aList) {
        for (int i = 0; i < 10; i++) {

            aList.add(i);
        }        
      
    }

    @Override
    public void print(List<Integer> aList, String string) {
        System.out.println("This is a " + string);
        System.out.print(aList + "\n");

    }

    @Override
    public void removeElement(List<Integer> aList) {
        aList.remove(0);
        aList.remove(1);
    
    
    }
    
} 

class Main  {

    
    public static void main(String[] args) {
        ArrayListCreation arrayListCreation = new ArrayListCreation();
        LinkedListCreation linkedListCreation = new LinkedListCreation();
        VectorCreation vectorCreation = new VectorCreation();
        StackCreation stackCreation = new StackCreation();



        ArrayList<Integer> list = new ArrayList<>();
        LinkedList<Integer> linkList = new LinkedList<>();
        Vector<Integer> vector = new Vector<>();
        Stack<Integer> stack = new Stack<>();
        

        // //Arraylist
        // arrayListCreation.addElement(list);
        // arrayListCreation.print(list, "Arraylist and Their Element are :");
        // arrayListCreation.removeElement(list);
        // arrayListCreation.print(list, "Arraylist after remove element");

        //Linkedlist
        // linkedListCreation.addElement(linkList);
        // linkedListCreation.print(linkList, "Linkedlist and Their Element are :");
        // linkedListCreation.removeElement(linkList);
        // linkedListCreation.print(linkList, "LinkList after remove element");

        //Vector
        // vectorCreation.addElement(vector);
        // vectorCreation.print(vector, "Vector and Their Element are :");
        // vectorCreation.removeElement(vector);
        // vectorCreation.print(vector, "Vector after remove element");

        //Stack
        // stackCreation.addElement(stack);
        // stackCreation.print(stack, "Stack and and Their Element are ");
        // stackCreation.removeElement(stack);
        // stackCreation.print(stack, "Stack after remove element");

        





    }
   



   
}
