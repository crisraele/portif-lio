package desafiosEmJava;
import java.util.ArrayList;
import java.util.Scanner;



public class Desafio3 {
	
	 
		
		 public static void main(String[] args) {
			    
			 String palavra ="";
			 
			 Scanner par = new Scanner(System.in);
			    ArrayList<String> anagramas = new ArrayList<String>();
			    
			    System.out.print("Digite uma palavra: ");
				 palavra = par.next();
			    
			    for(int i = 0; i <palavra.length(); i++) {
			        for(int l = 1; l < palavra.length(); l++) {
			            if(palavra.charAt(i) == palavra.charAt(l) && i !=l && i < l) {
			                if(palavra.charAt(i) == palavra.charAt(i *(i - 1) /2)) {
			                String x = palavra.substring(i, i + 1);
			                anagramas.add(x);
			                } 
			               
			                
			                else {
			                String um = palavra.substring(i, l);
			                String dois = palavra.substring(i + 1, l + 1);
			                String tres = palavra.substring( i* (i - 1)/2);
			                anagramas.add(tres);
			                anagramas.add(um);
			                anagramas.add(dois);
			                }
			            }
			        }
			    }
			    
			    
			    System.out.println( anagramas);
			    }
			}
	
			
		
	   
	        
			
			 
		
		 
		 
		 
		 

  


   


   
   
   
   
   
   
		




