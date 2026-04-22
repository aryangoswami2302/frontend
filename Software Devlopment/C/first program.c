#include<stdio.h>
#include<conio.h>

void main()
{
    int a;
    int b;
    int sum;
    int sub;
    int mul;
    float div;

    printf("Enter your A : ");
    scanf("%d",&a);

    printf("Enter your B : ");
    scanf("%d",&b);

    sum = a + b;
    sub = a - b;
    mul = a * b;

    if(b != 0)
    {
        div = (float)a / b;
    }
    else
    {
        printf("\nDivision not possible (B = 0)");
    }

    printf("\nA : %d",a);
    printf("\nB : %d",b);
    printf("\nSum : %d",sum);
    printf("\nSubtraction : %d",sub);
    printf("\nMultiplication : %d",mul);
     printf("\nDivision : %.2f",div);


    getch();
}
