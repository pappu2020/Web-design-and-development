import java.util.Scanner;
public class basic {
  public static void main(String[] args) {
    System.out.println("Hello World");

    // int x=10;
    // int y = 20;
    // System.out.println("The First num is: " + x);
    // int sum = x+y;
    // System.out.println(sum);
    
    //user Input
    
    Scanner myInput1 = new Scanner(System.in);
    

    System.out.println("Enter the name: ");

    String myname = myInput1.nextLine();

    System.out.println("Name: "+myname);
    
    System.out.println("Enter the number: ");
    int num = myInput1.nextInt();
    System.out.println("Num: "+num);





  }
}