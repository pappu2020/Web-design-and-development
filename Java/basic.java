import java.util.Scanner;
public class basic {
  
  
  public static void aiub(){
    Scanner aiub = new Scanner(System.in);
    System.out.println("Enter the Number: ");
    double aiubInput = aiub.nextInt();

    if(aiubInput >= 90){
      System.out.println("Result: A+");
    }

    else if(aiubInput >= 85){
      System.out.println("Result: A");
    }

    else if(aiubInput >= 80){
      System.out.println("Result: B+");
    }

    else if(aiubInput >= 75){
      System.out.println("Result: B");
    }

    else if(aiubInput >= 70){
      System.out.println("Result: C+");
    }
    else if(aiubInput >= 65){
      System.out.println("Result: C");
    }
    else if(aiubInput >= 60){
      System.out.println("Result: D+");
    }
    else if(aiubInput >= 50){
      System.out.println("Result: D");
    }
    else{
      System.out.println("Result: FAIL");
    }
  }



  public static void ewu(){
    Scanner ewu = new Scanner(System.in);
    System.out.println("Enter the Number: ");
    double ewuInput = ewu.nextInt();

    if(ewuInput >= 95){
      System.out.println("Result: A+");
    }

    else if(ewuInput >= 90){
      System.out.println("Result: A");
    }

    else if(ewuInput >= 85){
      System.out.println("Result: A-");
    }

    else if(ewuInput >= 80){
      System.out.println("Result: B+");
    }

    else if(ewuInput >= 75){
      System.out.println("Result: B");
    }
    else if(ewuInput >= 70){
      System.out.println("Result: B-");
    }
    else if(ewuInput >= 65){
      System.out.println("Result: C+");
    }
    else if(ewuInput >= 60){
      System.out.println("Result: C");
    }
    else if(ewuInput >= 55){
      System.out.println("Result: C-");
    }
    else if(ewuInput >= 50){
      System.out.println("Result: D+");
    }
   
    else{
      System.out.println("Result: FAIL");
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  public static void main(String[] args) {
    // System.out.println("Hello World");

    // int x=10;
    // int y = 20;
    // System.out.println("The First num is: " + x);
    // int sum = x+y;
    // System.out.println(sum);
    
    //user Input
    
    // Scanner myInput1 = new Scanner(System.in);
    

    // System.out.println("Enter the name: ");

    // String myname = myInput1.nextLine();

    // System.out.println("Name: "+myname);
    
    // System.out.println("Enter the number: ");
    // int num = myInput1.nextInt();
    // System.out.println("Num: "+num);



    //Method/Function/Conditional Statement

    System.out.println("============University Name================");
    System.out.println("1.AIUB");
    System.out.println("2.EWU");
    System.out.println("3.NSU");

    System.out.println("Enter Your Choice");
    Scanner myInput = new Scanner(System.in);

    int uniChoice = myInput.nextInt();
   
   
    if(uniChoice == 1){
      aiub();
    }

    if(uniChoice == 2){
      ewu();
    }
  
   



  }
}