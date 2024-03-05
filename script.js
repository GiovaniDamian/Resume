document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toogleBtn');

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
});
