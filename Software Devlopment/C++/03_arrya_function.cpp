#include<iostream>
using namespace std;

void demo(){
	int i;
	for(i=1;i<=30;i++){
		cout<<"*";
	}
}

int main()
{
	
	int a[5],i;
	
	demo();
	cout<<"\n----Array in C++ ------\n";
	demo();
	cout<<"\nnew Data\n";
	for(i=0;i<5;i++){
		cout<<"Enter your Element : ";
		cin>>a[i];
	}
	
	for(i=0;i<5;i++){
//		printf("\na[%d] : %d",i,a[i]);
		cout<<"\na["<<i<<"] : "<<a[i];
	}
	
		cout<<"\nnew Data\n";
	demo();
	cout<<"\nnew Data\n";
	
	for(i=4;i>=0;i--){
		cout<<"\na["<<i<<"] : "<<a[i];
	}

	return 0;
}
