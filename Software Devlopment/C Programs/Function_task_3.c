#include<stdio.h>
#include<conio.h>

void prime(int n){
	int i;
	if(n <= 1){
		printf("This is NOT Prime Number");
		return;
	}
	for(i = 2;i <= n/2;i++){
		if(n % i == 0){
			printf("This is NOT Prime Number");
			return;
		}
	}
	printf("This is Prime Number");
}

void main()
{
	int num;
	
	printf("Enter Your Numner : ");
	scanf("%d",&num);
	
	prime(num);
	getch();
}
