#include<stdio.h>
#include<conio.h>

void main()
{
	int num;
	printf("Enter your Number : ");
	scanf("%d",&num);
	
	if(num % 2 == 0){
		printf("This is Even Number...");
	}
	else{
		printf("This is Odd Number...");
	}
	
	
	
	getch();
}
