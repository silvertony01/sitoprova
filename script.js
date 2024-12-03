document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#cerca').onclick = function(){
        alert('Vuoi effettuare la ricerca?');
    }
// ingrandimento card home
    const card1 = document.querySelector('#myCard1');
    card1.addEventListener('mouseover', () => {
        card1.style.transform = 'scale(1.1)';
    });
    card1.addEventListener('mouseout', () => {
        card1.style.transform = 'scale(1)';
    });

    const card2 = document.querySelector('#myCard2');
    card2.addEventListener('mouseover', () => {
        card2.style.transform = 'scale(1.1)';
    });
    card2.addEventListener('mouseout', () => {
        card2.style.transform = 'scale(1)';
    });

    const card3 = document.querySelector('#myCard3');
    card3.addEventListener('mouseover', () => {
        card3.style.transform = 'scale(1.1)';
    });
    card3.addEventListener('mouseout', () => {
        card3.style.transform = 'scale(1)';
    });

    function apriSchedaProdotto(url) {
        window.open(url, '_blank');
    };
    
});
