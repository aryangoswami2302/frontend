#include<iostream>
using namespace std;

int main()
{
    int a = 10, b = 5;

    // Arithmetic Operators
    cout<<"Arithmetic Operators"<<endl;
    cout<<"Addition : "<<a + b<<endl;
    cout<<"Subtraction : "<<a - b<<endl;
    cout<<"Multiplication : "<<a * b<<endl;
    cout<<"Division : "<<a / b<<endl;

    // Relational Operators
    cout<<"\nRelational Operators"<<endl;
    cout<<(a > b)<<endl;
    cout<<(a < b)<<endl;
    cout<<(a == b)<<endl;

    // Logical Operators
    cout<<"\nLogical Operators"<<endl;
    cout<<((a > b) && (b < 10))<<endl;
    cout<<((a < b) || (b < 10))<<endl;

    // Bitwise Operators
    cout<<"\nBitwise Operators"<<endl;
    cout<<"AND : "<<(a & b)<<endl;
    cout<<"OR : "<<(a | b)<<endl;

    return 0;
}
