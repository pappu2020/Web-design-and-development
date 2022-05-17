import java.util.Scanner;
public class multiplicationTable { 
    public static void main(String[] args) {
        Scanner Myinput = new Scanner(System.in);
        
        System.out.print("Enter the Number: ");
        int input = Myinput.nextInt();
        System.out.println("");
        System.out.println("");
        


        System.out.println("Multiplication table of: " + input);
        System.out.println("=================================");
        System.out.println("");
        System.out.println("");
        int x;
        for(x=1;x<=10;x++){
          System.out.println(input + "*" + x + "=" + input*x);
        }
    }
}
