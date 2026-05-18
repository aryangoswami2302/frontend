#include<iostream>
#include<string.h>
using namespace std;

int main()
{
//	char name[40];
	string name;
	int l;
	
	cout<<"Enter your Name : ";
//	cin>>name;
	getline(cin,name);
	
	cout<<"Your name : "<<name;
	
	l = name.length();
	cout<<"\nString length : "<<l;
	
	return 0;
}
