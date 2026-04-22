#include<stdio.h>
#include<conio.h>

void main()
{
	int a,b;
	printf("Enter your A :");
	scanf("%d",&a);
	printf("Enter your B :");
	scanf("%d",&b);
	
	int max;
	
	max = a > b;
	int min = a < b;
	int equal = a == b;
	
	
	printf("max:%d",max);
	printf("\nmin:%d",min);
	printf("\nequal:%d",equal);
	
	
	
	getch();
}
