#include<stdio.h>
#include<conio.h>

void main()
{
	int a,b;
	char operator;
	
	printf("Enter Your A Number : ");
	scanf("%d",&a);
	printf("Enter Your B Number : ");
	scanf("%d",&b);
	
	printf("Enter Your Operator(+,-,*,/):");
	scanf(" %c",&operator);
	
	switch(operator){
		case'+':
			printf("%d",a + b);
			break;
		case'-':
			printf("%d",a - b);
			break;
		case'*':
			printf("%d",a * b);
			break;
		case'/':
			printf("%d",a / b);
			break;
	}
	
	
	getch();
}
