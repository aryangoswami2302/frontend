#include<iostream>
#include<cstring>
using namespace std;

class Student{
	private:
		int rollno;
		char name[20];
	public:
//		1)defualt automactily
		Student(){
			cout<<"Enter your Roll no :";
			cin>>rollno;
			cout<<"Enter your Name :";
			cin>>name;
		}
// 		2)parameter 
		Student(int r,const char s[20]){
			rollno = r;
			strcpy(name,s);
		}
		
//		3) copy as reff pass
		Student(Student &sh){
			rollno = sh.rollno;
			strcpy(name,sh.name);
		}
//      4) deconstri
		~Student(){
			cout<<"\nHello This Desconstro Function code delete";
		}
		void display(){
			cout<<"\nYour rollno :"<<rollno;
			cout<<"\nYour Name :"<<name;
		}
};

int main()
{
//	1) defualt
	Student s;
	s.display();
		
//  2) paramter
	Student s1(7,"ketan");
	s1.display();
	
//  3) copy cons
	Student d(s1);
	d.display();
	
	Student s2(5,"sujal");
	s2.display();

	return 0;
}
