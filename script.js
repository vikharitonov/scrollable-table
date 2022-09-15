window.onload = () => {
    const thead = document.getElementById("thead");
    const tbody = document.getElementById("tbody");

    thead.onscroll = () => {
        tbody.scrollLeft = thead.scrollLeft;
    };
    tbody.onscroll = () => {
        thead.scrollLeft = tbody.scrollLeft;
    };
}
