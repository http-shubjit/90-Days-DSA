public interface Dessert {
}

// Classes that inherit the abstract data type
 class Cake implements Dessert {
}

 class Cookie implements Dessert {
}

 class IceCream implements Dessert {
}

// Good practice to throw an exception if the desired concrete instance is not
// found
 class DessertNotFoundException extends RuntimeException {

   
}

// Factory class that returns the concrete instance
 class DessertFactory {
    public static Dessert getDessert(String dessertType) {
        switch (dessertType) {
            case "cake":
                return new Cake();
            case "cookie":
                return new Cookie();
            case "ice cream":
                return new IceCream();
            default:
                throw new DessertNotFoundException();
        }
    }

    public class Demo {
        public static void main(String[] args) {
            Dessert d1 = DessertFactory.getDessert("cake");
            Dessert d2 = DessertFactory.getDessert("cookie");
            Dessert d3 = DessertFactory.getDessert("ice cream");
            Dessert d4 = DessertFactory.getDessert("candy"); // Throws DessertNotFoundException
        }
    }
}