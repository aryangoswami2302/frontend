#include<iostream>
using namespace std;

int add(int a,int b)
{
    return a+b;
}

int sub(int a,int b)
{
    return a-b;
}

int mul(int a,int b)
{
    return a*b;
}

float divi(int a,int b)
{
    return (float)a/b;
}

int main()
{
    int a,b,choice;

    cout<<"Enter First Number : ";
    cin>>a;

    cout<<"Enter Second Number : ";
    cin>>b;

    cout<<"\n1. Add";
    cout<<"\n2. Subtract";
    cout<<"\n3. Multiply";
    cout<<"\n4. Divide";

    cout<<"\nEnter Choice : ";
    cin>>choice;

    switch(choice)
    {
        case 1:
            cout<<"Addition : "<<add(a,b);
            break;

        case 2:
            cout<<"Subtraction : "<<sub(a,b);
            break;

        case 3:
            cout<<"Multiplication : "<<mul(a,b);
            break;

        case 4:
            cout<<"Division : "<<divi(a,b);
            break;

        default:
            cout<<"Invalid Choice";
    }

    return 0;
}
