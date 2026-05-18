#include <stdio.h>
#include <conio.h>

void main() {
    int a, b;

    printf("Enter your A : ");
    scanf("%d",&a);

    printf("Enter your B : ");
    scanf("%d",&b);

    if (a > b) {
        printf("Maximum = %d", a);
    } else {
        printf("Maximum = %d", b);
    }

    getch();
}
