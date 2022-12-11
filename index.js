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

let isModalOpen =  false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open";

}