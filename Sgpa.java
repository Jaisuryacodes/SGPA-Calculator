import java. util. *;
class Main{
    public static void main (String[] a){
        Scanner obj = new Scanner(System. in) ;
        System.out.println("HI Guys  ");
        System.out.println();
        System.out.println("  Note :");
        System.out.println("     Grade points based on as follows :");
          System.out.println();
        System.out.println(" O - 10 | A+ - 9 | A - 8 | B+ - 7 | B - 6 | C - 5 | U- RA / 0 ");
          System.out.println();
        System.out.println("  ** Enter the  no of Subject including 1 Credit Also **");
        System.out.print("  Enter no of Subject :_");
        int n=obj.nextInt();
        float Total=0,totalCredit=0;
        for(int i=1;i<=n;i++){
            System.out.print("Credit of SUBJECT "+i+" :");
            int subCredit=obj.nextInt();
            System.out.print("Grade of SUBJECT "+i+" :");
            int subGrade=obj.nextInt();
            totalCredit+=subCredit;
            Total+=subGrade*subCredit;
        }
        System.out.println("Your Current Semester SGPA :"+ Total/totalCredit);
          System.out.println();
        System.out.println("               © Application Developed By   ");
          System.out.println();
        System.out.println("                                  | js ~ FirstBenchers | ");
          System.out.println();
        System.out.println("    Share to your Friends and help to Calculate the CGPA / SGPA of current semester    ");
          System.out.println("                                Thankyou Guys  keep in Supporting");
    }
    
}
