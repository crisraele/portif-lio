package desafiosEmJava;

import java.util.ArrayList;
import java.util.List;

import java.util.Scanner;

public class Desafio1 {

	public static void main(String[] args) {
		

		Scanner valor = new Scanner(System.in);
		List<String> degraus = new ArrayList<>();

		 
        System.out.print("Digite um n�mero: ");
		int qtds = valor.nextInt();

		 

		for (int i = 0; i < qtds; i++) { //operar o modo escada
		degraus.add(" ".repeat(qtds - i) + "*".repeat(i + 1));
		}

	
		for (String qualquer : degraus ) {
		System.out.println(qualquer);
		}
           
	
	}
     
	
	

}

