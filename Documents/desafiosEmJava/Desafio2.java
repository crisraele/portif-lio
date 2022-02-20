package desafiosEmJava;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Desafio2 {

	
	
	  public static boolean senhaValida(String senha) {

        String validar = "^(?=.*[0-9])"
                + "(?=.*[a-z])(?=.*[A-Z])"
                + "(?=.*[!@#$%^&*()-+])"
                + "(?=\\S+$).{6}$";

        Pattern p = Pattern.compile(validar);



     Matcher m = p.matcher(senha);
     
     
 	  if(senha.length() < 6) {   // mínimo 6 digitos
          	int soma = 6 - senha.length();
          	System.out.print(soma);
 	  }

     return m.matches();
       
 	  

         }

	  

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

       
        
        System.out.println("Usuário:");
        String usuario = scan.next();
        System.out.println("Senha:");
        String senha = scan.next();



        System.out.println(senhaValida(senha));
    } 
    }


 





