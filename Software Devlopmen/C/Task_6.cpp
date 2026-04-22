#include<stdio.h>
#include<conio.h>

int main()
{
	int maths,science,English;
	float total,per;
	
	printf("Enter your Maths marks : ");
	scanf("%d",&maths);
	printf("Enter your Science Marks : ");
	scanf("%d",&science);
	printf("Enter your English Marks : ");
	scanf("%d",&English);
	
	total = maths+science+English;
	per = total/3;
	
	
	printf("------Percentage------");
	printf("\npercentage = %.2f",per);
	
	

    if (maths < 33 || science < 33 || English < 33) {
        printf("\nFail");
    }
    else if (per >= 90) {
        printf("\npass With Grade A");
    }
    else if (per >= 70) {
        printf("\npass With Grade B");
    }
    else if (per >= 50) {
        printf("\npass With Grade C");
    }
    else if("per >= 33"){
    	printf("\npass With Grade D");
	}
    else {
    	printf("-----Result-----");
        printf("\nFail");
    }
	
	
	
	getch();
}
