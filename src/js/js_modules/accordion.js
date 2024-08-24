function myAccordion() {
    let acc = document.querySelectorAll('.faqs__card');
    

    acc.forEach(ac => {
        ac.addEventListener('click', ()=> {
        ac.classList.toggle('acc-open')
            
        })
    })
}
myAccordion()