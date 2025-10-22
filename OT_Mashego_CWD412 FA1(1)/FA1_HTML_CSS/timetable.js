document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('day-filter');

    filter.addEventListener('change', () => {
        const selectedDay = filter.value;
    });

    modules.forEach(module => {
        module.addEventListener('mouseover', ());
    });
});
