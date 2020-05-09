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
