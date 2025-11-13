// File: Stu.java

class Student {
    String name;
    int age;

    // Method to set student details
    void setDetails(String n, int a) {
        name = n;
        age = a;
    }

    // Method to display student details
    void displayDetails() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Stu {
    public static void main(String[] args) {
        // Create objects of Student class
        Student s1 = new Student();
        Student s2 = new Student();

        // Set and display details
        s1.setDetails("Ishwarya", 20);
        s2.setDetails("Raja", 21);

        s1.displayDetails();
        s2.displayDetails();
    }
}
