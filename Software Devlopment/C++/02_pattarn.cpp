/*

*
* *
* * * 
* * * *
* * * * *

1
2 3
4 5 6
7 8 9 10

*/


#include<iostream>
using namespace std;

int main()
{
	int i,j;
	int num=1;
	
	for(i=1;i<=5;i++){
		for(j=1;j<=i;j++){
			cout<<"* ";
		}
		cout<<"\n";
	}
	
		for(i=1;i<=4;i++){
		for(j=1;j<=i;j++){
			cout<<num<<" ";
			num++;
		}
		cout<<"\n";
	}
	
	return 0;
}
