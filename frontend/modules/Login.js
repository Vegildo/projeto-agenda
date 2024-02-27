import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            // alert('Form não foi ENVIADO!');
            this.validate(event);
        });
    }

    validate(event) {
        const el = event.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')

        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(passwordInput.value.length < 5 || passwordInput.value.length > 15) {
            alert('A senha precisa ter entre 5 e 15 caracteres');
            error = true;
        }

        if(!error) el.submit();

        // console.log(emailInput.value);
        // console.log(passwordInput.value);
    }
};