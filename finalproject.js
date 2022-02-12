let btn3= document.querySelector('.button3');
btn3.addEventListener('click', function()
{
  alert('On December 3rd, 1994; Sony decided to release a console called the "PlayStation", which would sell for $299 on release.This would be the official start of the Playstation lineup. The PlayStation would be a huge success and sell over 36 million units. ');
});


btn3.addEventListener('click', function()
{
  alert('On March 4th, 2000, Sony released the successor to the PlayStation, the PlayStation 2. The PlayStation 2 sold for $299 and was a huge success, selling over 159 Million units.');
});

btn3.addEventListener('click', function()
{
  alert('On November 11th, 2006; Sony released the PlayStation 3. The release of PS3 was sort of a flop by selling at a minimum of $499 due to many useless features that were on the PS3, The PS3 tried to be an "All in one" console that could combine stuff like Blu-ray players. But people wanted the PS3 purely for gaming. Compared to the Xbox 360 selling for a minimum of $299, the 360 was a obvious choice.');

});


btn3.addEventListener('click', function()
{
  alert('The PlayStation 4 was released on November 15th, 2013 and was a huge success. This time the PS4 was superior to the Microsoft competitor, the Xbox One');

});




let myForm2=document.querySelector('.form2');
let pDisplay2=document.querySelector('.display4');

myForm2.addEventListener('submit',function(e){
e.preventDefault();
  let name1=document.querySelector('.inputName2').value;
 if(parseInt(name1)){
   alert(`${name1} Please Enter a correct email `)
 }
 else if(name1==''){
   alert('Please Enter a correct email')
 }
 else
   pDisplay2.innerHTML=`Welcome to the program ${name1} we hope you enjoy our products` ;

});
