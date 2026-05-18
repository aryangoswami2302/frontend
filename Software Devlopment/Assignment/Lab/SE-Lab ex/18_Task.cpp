#include<iostream>
using namespace std;

class Person
{
    public:
        string name;

        void getName()
        {
            cout<<"Enter Name : ";
            cin>>name;
        }
};

class Student : public Person
{
    public:
        void displayStudent()
        {
            cout<<"Student Name : "<<name<<endl;
        }
};

class Teacher : public Person
{
    public:
        void displayTeacher()
        {
            cout<<"Teacher Name : "<<name;
        }
};

int main()
{
    Student s;
    Teacher t;

    s.getName();
    s.displayStudent();

    t.getName();
    t.displayTeacher();

    return 0;
}
