document.addEventListener('DOMContentLoaded', function () {
    const estagioTab = document.getElementById('estagio');
    const empregoTab = document.getElementById('emprego');
    const cards = document.querySelectorAll('.card');

    estagioTab.addEventListener('click', function () {
        estagioTab.classList.add('active');
        empregoTab.classList.remove('active');
    });

    empregoTab.addEventListener('click', function () {
        empregoTab.classList.add('active');
        estagioTab.classList.remove('active');
    });

    const filtro = document.getElementById('filtro');
    filtro.addEventListener('change', function () {
        const categoria = filtro.value;
        console.log(`Filtro selecionado: ${categoria}`);
    });
});