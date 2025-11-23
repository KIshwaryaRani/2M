
class Student {
    String name;
    int age;

   
    void setDetails(String n, int a) {
        name = n;
        age = a;
    }

    void displayDetails() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Stu {
    public static void main(String[] args) {

        Student s1 = new Student();
       
        s1.setDetails("Ishwarya", 20);
        s2.setDetails("Raja", 21);

        s1.displayDetails();
        s2.displayDetails();
    }
}
