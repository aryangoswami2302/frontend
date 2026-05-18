#include<iostream>
using namespace std;

class A{
	public:
		void Data()
		{
			cout<<"\nThis is class A";
		}
};

class B: public A{
	public:
		void Data1()
		{
			cout<<"\nThis is class B";
		}
};
class c{
	public:
		void Data2()
		{
			cout<<"\nThis is class c";
		}
};

class D: public B, public c
{
	public:
		void data3()
		{
			cout<<"\nThis is Class D";
		}
};




int main()
{
	D ob;
	ob.Data();
	ob.Data1();
	ob.Data2();
	ob.data3();
	
	return 0;
}
