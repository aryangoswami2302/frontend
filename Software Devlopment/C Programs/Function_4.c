#include<stdio.h>
#include<conio.h>

void febo(int n){
	int a = 0,b = 1,c,i;
	
	if( n <= 0){
		printf("Invalid input");
		return;
	}
	printf("Febonacci series : ");
	for(i = 1; i<=n;i++){
		printf("%d",a);
		c = a + b;
		a =b;
		b =c;
	}
}

void main()
{
	int num;
	
	printf("Enter Your Number : ");
	scanf("%d",&num);
	
	febo(num);
	getch();
}
