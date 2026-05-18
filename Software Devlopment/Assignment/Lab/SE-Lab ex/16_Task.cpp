#include<iostream>
using namespace std;

class Calculator
{
    public:

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
};

int main()
{
    Calculator c;

    cout<<"Addition : "<<c.add(10,5)<<endl;
    cout<<"Subtraction : "<<c.sub(10,5)<<endl;
    cout<<"Multiplication : "<<c.mul(10,5)<<endl;
    cout<<"Division : "<<c.divi(10,5);

    return 0;
}
