function displayResult(){
    var rating=document.querySelector('input[name="num"]:checked').value;
    document.getElementById('rating-text').innerText= "You selected " + rating + " out of 5";
}


function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d1.style.display == "" )
   {  
      d1.style.display = "none";
      d2.style.display = "flex"; 
   }
   displayResult();

}
