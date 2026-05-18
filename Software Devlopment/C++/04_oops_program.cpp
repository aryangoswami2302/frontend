#include<iostream>
using namespace std;

class student
{
	public:
		string name;
		int age;
		
};

int main()

{
	student s1;
	
	s1.name = "Aryan Goswami";
	s1.age = 20;
	
	cout<<s1.name<<endl;
	cout<<s1.age;
	
	
	return 0;
}
