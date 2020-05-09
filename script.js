
// for(var i=0; i<document.getElementsByClassName('text').length; i++) {
//  console.log(document.getElementsByClassName('text')[i].length);
//
//
// }

document.getElementById('messageCounter').textContent = document.getElementsByClassName('text').length;

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {

   document.getElementsByClassName('trash')[i].addEventListener("click",
     function(){
       console.log("click sur un paragraphe détécté !");
      this.parentNode.remove();
      document.getElementById('messageCounter').textContent = document.getElementsByClassName('text').length;
     }
   );
}
