const grid = new Muuri('.grid', {
    layout: {
        rounding: false,
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('loads');

    //Listener para filtrar barra de busqueda

    document.querySelector('#bar-search').addEventListener('input', (e) => {
        const search = e.target.value;
        grid.filter((item) => item.getElement().dataset.etiqueta.includes(search));
    });

})
