#include<stdio.h>
#include<conio.h>

void main()
{
	int a[2][2],i,j;
	int b[2][2];
	int sub[2][2];
	  
	  for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
	  		printf("\nEnter your element a row : %d & col : %d= ",i,j);
	  		scanf("%d",&a[i][j]);
	  		
		  }
	  }
	
	 for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
	  		printf("\na [%d][%d] :%d ",i,j,a[i][j]);
	  	
	  		
		  }
	  }
	  
	  printf("\n------2d array---------");
	  
	  	  for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
	  		printf("\nEnter your element b row : %d & col : %d= ",i,j);
	  		scanf("%d",&b[i][j]);
	  		
		  }
	  }
	
	 for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
	  		printf("\nb [%d][%d] :%d ",i,j,b[i][j]);
	  	
	  		
		  }
	  }
	  
	  printf("\n---Sub matrix-----");
	  
	  for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
		  sub[i][j] = a[i][j] - b[i][j];
		  		  }
	}
	for (i=0;i<2;i++){
	  	for (j=0;j<2;j++){
	     printf("\nsub[%d][%d] : %d",i,j,sub[i][j]); 		
		  }
	}
	
		  
	  
	  
	  
	  

	
	
	
	
	
	getch();
	
	
}
