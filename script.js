document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toogleBtn');
    const jumpBtn = document.getElementById('up');
    const crouchBtn = document.getElementById('down');

    toggleButton.addEventListener('click', function() {
    const elementsShow = document.querySelectorAll('[show]');
    const elementsHidden = document.querySelectorAll('[hidden]');
        elementsShow.forEach(element => {
      element.removeAttribute('show');
      element.setAttribute('hidden', '');
            }) ;
        elementsHidden.forEach(element =>{
       element.removeAttribute('hidden');
       element.setAttribute('show', '');
            }
        );
    });
    
   crouchBtn.addEventListener('click', function() {
        document.getElementById("rabbit").style.cssText = 'top:130px; transition: all 0.2s  ease-out; transform : rotate(-95deg);  animation: play1 3s steps(3) infinite;';
setTimeout(function(){document.getElementById("rabbit").style.cssText = 'transition: all 1s  ease-out;'; document.getElementById("rabbit").style.top = "60px";},500);
    })

    jumpBtn.addEventListener('click',function () {
document.getElementById("rabbit").style.cssText = 'transition: all 0.3s  ease-out;'; 
document.getElementById("rabbit").style.top = "-30px";
setTimeout(function(){document.getElementById("rabbit").style.top = "60px";},200);
} )

});
