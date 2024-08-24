function scrollTo() {
    let a = document.querySelector('#mainBtn');
    let b = document.querySelector('#aboutBtn');
    let c = document.querySelector('#skillsetBtn');
    let d = document.querySelector('#faqsBtn');
    let e = document.querySelector('#backgroundBtn');
    let f = document.querySelector('#priceBtn');
    
    let aa = document.querySelector('#main');
    let bb = document.querySelector('#about');
    let cc = document.querySelector('#skillset');
    let dd = document.querySelector('#faqs');
    let ee = document.querySelector('#background');
    let ff = document.querySelector('#price');


    a.addEventListener('click', function(e) {
        e.preventDefault()
        window.scroll({
            top: aa.offsetTop - 120,
            left: 0,
            behavior: "smooth",
          });
    })
    b.addEventListener('click', function(e) {
        e.preventDefault()
        window.scroll({
            top: bb.offsetTop - 120,
            left: 0,
            behavior: "smooth",
          });
    })
    c.addEventListener('click', function(e) {
        e.preventDefault()
        window.scroll({
            top: cc.offsetTop - 120,
            left: 0,
            behavior: "smooth",
          });
    })
    d.addEventListener('click', function(e) {
        e.preventDefault()
        window.scroll({
            top: dd.offsetTop - 120,
            left: 0,
            behavior: "smooth",
          });
    })
    e.addEventListener('click', function(ev) {
        ev.preventDefault()
        window.scroll({
            top: ee.offsetTop,
            left: 0,
            behavior: "smooth",
          });
    })
    f.addEventListener('click', function(ev) {
        ev.preventDefault()
        window.scroll({
            top: ff.offsetTop,
            left: 0,
            behavior: "smooth",
          });
    })
}

scrollTo()