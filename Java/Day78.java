package Java;

// String Manipulation:Convert*Pointer to->Pointer

public class Day78

{

    public static String solution(String OldCode)

    {

      int cmtPartIndex = OldCode.indexOf("//");
      if (cmtPartIndex != -1) {
        String codePart = OldCode.substring(0, cmtPartIndex);
        String comPart = OldCode.substring(cmtPartIndex);
        codePart=codePart.replace("*", "->");
        return codePart + comPart;
      }
      else {
       return OldCode.replace("*", "->");
      }

    }

    public static void main(String[] args)

    {

    System.out.println(solution("*j = l * k; //Store sum in *j"));
           

    }

}