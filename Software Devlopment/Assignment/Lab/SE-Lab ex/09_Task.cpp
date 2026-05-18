#include<iostream>
using namespace std;

int main()
{
    int number = 50;
    int guess;

    while(guess != number)
    {
        cout<<"Guess Number Between 1 to 100 : ";
        cin>>guess;

        if(guess > number)
        {
            cout<<"Too High"<<endl;
        }
        else if(guess < number)
        {
            cout<<"Too Low"<<endl;
        }
        else
        {
            cout<<"Correct Guess!";
        }
    }

    return 0;
}
