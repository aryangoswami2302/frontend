#include<iostream>
using namespace std;

int main()
{
    int arr[5], sum = 0;
    float avg;

    cout<<"Enter 5 Numbers : "<<endl;

    for(int i=0;i<5;i++)
    {
        cin>>arr[i];
        sum = sum + arr[i];
    }

    avg = sum / 5.0;

    cout<<"Sum : "<<sum<<endl;
    cout<<"Average : "<<avg;

    return 0;
}
