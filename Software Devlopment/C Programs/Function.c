#include<stdio.h>
#include<conio.h>

 void Start()
 {
 	printf("Hello Aryan");
 }
 void star()
 {
 	int A,B;
 	for(A=1;A<=5;A++){
 		for(B=1;B<=A;B++){
 			printf("* ");
		 }
		 printf("\n");
	 }
 }


void main()
{
	star();
	Start();
	
	getch();
}
