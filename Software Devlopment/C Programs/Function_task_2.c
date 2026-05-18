#include<stdio.h>
#include<conio.h>

void oddeven(int n){
	if(n % 2 ==0)
	printf("This is Even Number");
	else
	printf("This is odd Number");
}

void main()
{
	int num;
	printf("Enter Your Number : ");
	scanf("%d",&num);
	
	oddeven(num);
	getch();
}
