
import java.util.PriorityQueue;
import java.util.Queue;

interface InterQueClass {
    void addElement(Queue<Integer> queue);

    void removeElement(Queue<Integer> queue);

    void println(Queue<Integer> queue);

    
}


class QueClass implements InterQueClass {

    @Override
    public void addElement(Queue<Integer> queue) {
        for (int i = 0; i < 10; i++) {
            queue.add(i);
    }
    }

   

    @Override
    public void removeElement(Queue<Integer> queue) {
        System.out.println(queue);
       
    }

    @Override
    public void println(Queue<Integer> queue) {
        queue.remove(0);
        queue.remove(1);
     
    }

}

class Main {
    public static void main(String[] args) {
        QueClass queClass = new QueClass();

        Queue<Integer> queue = new PriorityQueue();

        queClass.addElement(queue);
        queClass.println(queue);
        queClass.removeElement(queue);
        queClass.println(queue);
    }
}
