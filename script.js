let tabs = document.querySelectorAll('.tab'),
    tabsButtons = document.querySelectorAll('.tabs-button'),
    answerButton = document.querySelectorAll('.answer-button'),
    emailButton = document.getElementById('emailButton'),
    email = document.getElementById('email'),
    menuButton = document.getElementById('menuButton'),
    closeButton = document.getElementById('closeButton'),
    hiddenBlock = document.getElementById('hiddenBlock');


tabsButtons.forEach(tabsButton => {
    tabsButton.addEventListener('click', function() {
        tabsButtons.forEach(btn => {
            btn.nextElementSibling.classList.remove('active');
        });
        this.nextElementSibling.classList.add('active');
        let dataTargetButton = this.dataset.target;
        tabs.forEach(tab => {
            tab.classList.remove('activeTab');
        });
        for(let i = 0; i < tabs.length; i++) {
            if(tabs[i].id == dataTargetButton) {
                tabs[i].classList.add('activeTab')
            }
        }
    });
});

answerButton.forEach(btn => {
    btn.addEventListener('click', function() {
    let hrs = this.querySelectorAll('.arrow-block hr');
        if(!this.nextElementSibling.classList.contains('answerActive')) {
            this.nextElementSibling.classList.add('answerActive');
            this.parentElement.style.height = '200px';
            this.children[1].style.transform = 'rotate(180deg)'
            hrs.forEach(hr => {
                hr.style.backgroundColor = 'hsl(0, 94%, 66%)';
            })
        } else {
            this.nextElementSibling.classList.remove('answerActive');
            this.parentElement.style.height = '60px';
            this.children[1].style.transform = 'rotate(360deg)'
            hrs.forEach(hr => {
                hr.style.backgroundColor = 'hsl(231, 69%, 60%)';
            })
        }
    })
})


emailButton.addEventListener('click', function(e){
    e.preventDefault();
    let emailValue = email.value.trim();
    let emailLabel = document.getElementById('emailLabel');
    let errorImg = document.getElementById('errorImg');
    if(emailValue === '' || !emailValue.includes('@')) {
        emailLabel.style.display = 'inline-block';
        errorImg.style.display = 'inline-block';
        email.classList.add('errorInput')
    } else {
        emailLabel.style.display = 'none';
        errorImg.style.display = 'none';
        email.classList.remove('errorInput');
        document.querySelector('form').reset();
    }
})

menuButton.addEventListener('click', function() {
    hiddenBlock.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
    hiddenBlock.style.display = 'none';
})