var arr1 = [
    [],
    [],
    []
];

var arr2 = [
    [],
    [],
    []
];

var arr3 = [
   // [0,0,0],
   // [0,0,0],
   // [0,0,0]
];

function add(){
arr1[0][0] = document.getElementById("a_0_0").value;
arr1[0][1] = document.getElementById("a_0_1").value
arr1[0][2] = document.getElementById("a_0_2").value
arr1[1][0] = document.getElementById("a_1_0").value
arr1[1][1] = document.getElementById("a_1_1").value
arr1[1][2] = document.getElementById("a_1_2").value
arr1[2][0] = document.getElementById("a_2_0").value
arr1[2][1] = document.getElementById("a_2_1").value
arr1[2][2] = document.getElementById("a_2_2").value


arr2[0][0] = document.getElementById("b_0_0").value
arr2[0][1] = document.getElementById("b_0_1").value
arr2[0][2] = document.getElementById("b_0_2").value
arr2[1][0] = document.getElementById("b_1_0").value
arr2[1][1] = document.getElementById("b_1_1").value
arr2[1][2] = document.getElementById("b_1_2").value
arr2[2][0] = document.getElementById("b_2_0").value
arr2[2][1] = document.getElementById("b_2_1").value
arr2[2][2] = document.getElementById("b_2_2").value
   document.write("<h1>Sum of Matrix:</h1><br>");
   
   
   for(i=0; i<3; i++)
{
  // sub = [];
for(j=0; j<3; j++)
{
    // arr1[i][j] = (arr1[i][j] == '') ? 0 : arr1[i][j];
    // arr2[i][j] = (arr2[i][j] == '') ? 0 : arr2[i][j];

    
    arr3[i] = (Number(arr1[i][j])  + Number(arr2[i][j])); 
    document.write (arr3[i]);  
    
}
document.write("<br>")

}
}

//subtraction of matrix
function sub(){
   arr1[0][0] = document.getElementById("a_0_0").value;
   arr1[0][1] = document.getElementById("a_0_1").value
   arr1[0][2] = document.getElementById("a_0_2").value
   arr1[1][0] = document.getElementById("a_1_0").value
   arr1[1][1] = document.getElementById("a_1_1").value
   arr1[1][2] = document.getElementById("a_1_2").value
   arr1[2][0] = document.getElementById("a_2_0").value
   arr1[2][1] = document.getElementById("a_2_1").value
   arr1[2][2] = document.getElementById("a_2_2").value
  
  
   arr2[0][0] = document.getElementById("b_0_0").value
   arr2[0][1] = document.getElementById("b_0_1").value
   arr2[0][2] = document.getElementById("b_0_2").value
   arr2[1][0] = document.getElementById("b_1_0").value
   arr2[1][1] = document.getElementById("b_1_1").value
   arr2[1][2] = document.getElementById("b_1_2").value
   arr2[2][0] = document.getElementById("b_2_0").value
   arr2[2][1] = document.getElementById("b_2_1").value
   arr2[2][2] = document.getElementById("b_2_2").value
      document.write("<h1>Subtraction of Matrix:</h1><br>");
      
      
      for(i=0; i<3; i++)
  {
      //sub = [];
   for(j=0; j<3; j++)
   {
    arr1[i][j] = (arr1[i][j] == '') ? 0 : arr1[i][j];
    arr2[i][j] = (arr2[i][j] == '') ? 0 : arr2[i][j];

    
    arr3[i] = (Number(arr1[i][j])  - Number(arr2[i][j])); 
    document.write (arr3[i]);   
  }
  document.write("<br>")
  
  }
  }
  
  //Multipication of matrix
function mul(){
   arr1[0][0] = document.getElementById("a_0_0").value;
   arr1[0][1] = document.getElementById("a_0_1").value
   arr1[0][2] = document.getElementById("a_0_2").value
   arr1[1][0] = document.getElementById("a_1_0").value
   arr1[1][1] = document.getElementById("a_1_1").value
   arr1[1][2] = document.getElementById("a_1_2").value
   arr1[2][0] = document.getElementById("a_2_0").value
   arr1[2][1] = document.getElementById("a_2_1").value
   arr1[2][2] = document.getElementById("a_2_2").value
  
  
   arr2[0][0] = document.getElementById("b_0_0").value
   arr2[0][1] = document.getElementById("b_0_1").value
   arr2[0][2] = document.getElementById("b_0_2").value
   arr2[1][0] = document.getElementById("b_1_0").value
   arr2[1][1] = document.getElementById("b_1_1").value
   arr2[1][2] = document.getElementById("b_1_2").value
   arr2[2][0] = document.getElementById("b_2_0").value
   arr2[2][1] = document.getElementById("b_2_1").value
   arr2[2][2] = document.getElementById("b_2_2").value
      document.write("<h1>Multipication of Matrix:</h1><br>");
      
      
      for(i=0; i<3; i++)
  {
      sub = [];
   for(j=0; j<3; j++)
   {
    arr1[i][j] = (arr1[i][j] == '') ? 0 : arr1[i][j];
    arr2[i][j] = (arr2[i][j] == '') ? 0 : arr2[i][j];

    arr3[i] = (Number(arr1[i][j])  * Number(arr2[i][j])); 
    document.write (arr3[i]);    
  }
  document.write("<br>")
  
  }
  }

  //Division of matrix
function div(){
   arr1[0][0] = document.getElementById("a_0_0").value;
   arr1[0][1] = document.getElementById("a_0_1").value
   arr1[0][2] = document.getElementById("a_0_2").value
   arr1[1][0] = document.getElementById("a_1_0").value
   arr1[1][1] = document.getElementById("a_1_1").value
   arr1[1][2] = document.getElementById("a_1_2").value
   arr1[2][0] = document.getElementById("a_2_0").value
   arr1[2][1] = document.getElementById("a_2_1").value
   arr1[2][2] = document.getElementById("a_2_2").value
  
  
   arr2[0][0] = document.getElementById("b_0_0").value
   arr2[0][1] = document.getElementById("b_0_1").value
   arr2[0][2] = document.getElementById("b_0_2").value
   arr2[1][0] = document.getElementById("b_1_0").value
   arr2[1][1] = document.getElementById("b_1_1").value
   arr2[1][2] = document.getElementById("b_1_2").value
   arr2[2][0] = document.getElementById("b_2_0").value
   arr2[2][1] = document.getElementById("b_2_1").value
   arr2[2][2] = document.getElementById("b_2_2").value

      document.write("<h1>Divisiion of Matrix:</h1><br>");
      
      
      for(i=0; i<3; i++)
  {
      //sub = [];
   for(j=0; j<3; j++)
   {
      arr1[i][j] = (arr1[i][j] == '') ? 0 : arr1[i][j];
      arr2[i][j] = (arr2[i][j] == '') ? 0 : arr2[i][j];
  
      arr3[i] = (Number(arr1[i][j])  / Number(arr2[i][j])); 
      document.write (arr3[i]);   
  }
  document.write("<br>")
  
  } 
  }





