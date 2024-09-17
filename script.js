document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const shoes = document.querySelectorAll('.shoe');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const brand = e.target.getAttribute('data-brand');
            
            shoes.forEach(shoe => {
                if (shoe.getAttribute('data-brand') === brand || !brand) {
                    shoe.style.display = 'block';
                } else {
                    shoe.style.display = 'none';
                }
            });
        });
    });
});