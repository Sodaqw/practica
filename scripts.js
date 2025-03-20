document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function() {
        let x = phoneInput.value.replace(/\D/g, '').substring(1);
        let formatted = '+7 (';

        if (x.length > 0) {
            formatted += x.substring(0, 3);
        }
        if (x.length >= 3) {
            formatted += ') ' + x.substring(3, 6);
        }
        if (x.length >= 6) {
            formatted += '-' + x.substring(6, 8);
        }
        if (x.length >= 8) {
            formatted += '-' + x.substring(8, 10);
        }

        phoneInput.value = formatted;
    });

    phoneInput.addEventListener('focus', function() {
        if (phoneInput.value === '') {
            phoneInput.value = '+7 (';
        }
    });

    phoneInput.addEventListener('blur', function() {
        if (phoneInput.value === '+7 (') {
            phoneInput.value = '';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Позиционирование на верхней части элемента
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const infos = document.querySelectorAll('.block10 .info');

    infos.forEach(info => {
        info.addEventListener('click', () => {
            info.classList.toggle('active');
        });
    });
});