   window.onload =()=> {


   //Animate
    document.addEventListener('mousemove', parallax);

    function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerWidth - e.pageY*speed)/100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    //Hide & Show Password
    const PassBtn = document.querySelector('.pass svg');
    PassBtn.addEventListener('click', () => {
        const input = document.querySelector('#password');
        if (input.getAttribute('type')==='password') {
            input.setAttribute('type','text');
            PassBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7366 8.45018C18.8671 9.39091 19.4324 9.86127 19.6876 11.3022C19.7427 11.6131 19.7427 12.3869 19.6876 12.6978C19.4324 14.1387 18.8671 14.6091 17.7366 15.5498C16.1791 16.8458 14.1801 18 12 18C9.81991 18 7.82086 16.8458 6.26343 15.5498C5.13291 14.6091 4.56765 14.1387 4.31236 12.6978C4.25727 12.3869 4.25727 11.6131 4.31236 11.3022C4.56765 9.86127 5.13291 9.39091 6.26343 8.45018C7.82086 7.15422 9.81991 6 12 6C14.1801 6 16.1791 7.15422 17.7366 8.45018Z" stroke="#DDDDDD" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" stroke="#DDDDDD" stroke-width="2"/>
            <path d="M19 5L5 19" stroke="#DDDDDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        } else {
            input.setAttribute('type','password');
            PassBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7366 8.45018C18.8671 9.39091 19.4324 9.86127 19.6876 11.3022C19.7427 11.6131 19.7427 12.3869 19.6876 12.6978C19.4324 14.1387 18.8671 14.6091 17.7366 15.5498C16.1791 16.8458 14.1801 18 12 18C9.81991 18 7.82086 16.8458 6.26343 15.5498C5.13291 14.6091 4.56765 14.1387 4.31236 12.6978C4.25727 12.3869 4.25727 11.6131 4.31236 11.3022C4.56765 9.86127 5.13291 9.39091 6.26343 8.45018C7.82086 7.15422 9.81991 6 12 6C14.1801 6 16.1791 7.15422 17.7366 8.45018Z" stroke="#DDDDDD" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" stroke="#DDDDDD" stroke-width="2"/>
            </svg>`;
        }
    }); 

    //Copyright
    const cpy = document.createElement("a");
    cpy.href = 'https://dribbble.com/itsrehanraihan';
    cpy.setAttribute('target','_blank');
    cpy.style.textDecoration = 'none';
    cpy.innerHTML = `<img style="display:block;width:128px;height:auto;position:fixed;bottom:16px;right:16px;z-index:99999;" src='./assets/logo.png'/>`;
    document.body.append(cpy);
    
}