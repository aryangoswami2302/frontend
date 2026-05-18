#include<stdio.h>
#include<conio.h>

void start()
{
    printf("\nCalculator Program\n");
}
void cal()
{
	int a,b;
	printf("Enter your number : ");
	scanf("%d",&a);
	printf("Enter your number : ");
	scanf("%d",&b);
	
	printf("\n sum =%d",a + b);
	printf("\n sub =%d", a - b);
	printf("\n mul=%d", a * b);
	printf("\n divi =%d",a / b);
}



void main()
{
	
	start();
	cal();
	
	
	getch();
}
