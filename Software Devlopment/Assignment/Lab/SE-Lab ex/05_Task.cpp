#include<iostream>
using namespace std;

int main()
{
    int a = 10;
    float b = 5.5;
    char ch = 'A';

    const int x = 100;

    cout<<"Integer Value : "<<a<<endl;
    cout<<"Float Value : "<<b<<endl;
    cout<<"Character Value : "<<ch<<endl;

    cout<<"Constant Value : "<<x<<endl;

    cout<<"Addition : "<<a + x<<endl;
    cout<<"Multiplication : "<<a * 2<<endl;

    return 0;
}
