#include<iostream>
using namespace std;

int main()
{
    // Implicit Conversion
    int a = 10;
    float b;

    b = a;

    cout<<"Implicit Conversion : "<<b<<endl;

    // Explicit Conversion
    float x = 5.8;
    int y;

    y = (int)x;

    cout<<"Explicit Conversion : "<<y;

    return 0;
}
