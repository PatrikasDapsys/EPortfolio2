let isModalOpen =  false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList +=  " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_tro2hpl',
            'template_b6k9xcc',
            event.target,
            'JjmDr3ETYEd2mYjNo'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email servive is temporarily unavailable. Please contact me directly on patrikas.dapsys@gmail.com"
            )
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open";

}