package Java;

// class Day79 extends Thread{
//     public void run() {
//         System.out.println("Inside the class and outside from main method");
//     }

//     public static void main(String[] args) {
//         Thread myrunThread = new Thread(()-> {
//                     System.out.println("Inside the class and main method");

//         });
//         Thread thread = new Day79();

//         myrunThread.start();
//         thread.start();
    

// }
    
// }



class Counter extends Thread{
    
   static int count = 0;

    public static void inc(){
        count += 1;
    }
    
    public void run() {
        inc();
    }
    
    public static int getcount() {
        return count;
    }
    

    public static void main(String[] args) {
      
        Thread[] threads = new Thread[8];
        for (int i = 0; i < 8; i++) {
            threads[i] = new Counter();
            threads[i].start();
        }

        for (int i = 0; i < 8; i++) {
            try {
                threads[i].join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

System.out.println(getcount());        

    }
}