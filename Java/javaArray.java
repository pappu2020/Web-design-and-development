import java.util.Scanner;
public class javaArray {
    public static void main(String[] args){
        // String[] country={"Bangladesh","India","pakistan"};

        // for(int x=0; x<country.length; x++){
        //     System.out.println(country[x]);
        // }



        float[] mySum =new float[10];

        float sum = 0;

        

        System.out.println("Enter the Number: ");

        for(int x=0; x<=mySum.length; x++){
         Scanner myInput = new Scanner(System.in);
         float input= myInput.nextFloat();
         mySum[x] = input;
            sum = sum+mySum[x];


            if(mySum[x] == 0){
                 break;
            }
        }

        System.out.print("Your input value are: " + mySum);
        System.out.print("Result: " + sum);




        
}
}