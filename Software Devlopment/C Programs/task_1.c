#include<stdio.h>
#include<conio.h>

void main()
{
	int a,b;
	
	printf("Enter your A :");
	scanf("%d" ,&a);
	printf("Enter your B :");
	scanf("%d", &b);
	
	printf("---calc----");
	printf("\nsum : %d",a+b);
	printf("\nsub : %d",a-b);
	printf("\nmul : %d",a*b);
    printf("\ndivi: %d",a/b);
	
	getch();
}
