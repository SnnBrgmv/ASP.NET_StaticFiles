function toggleAccordion(header) {
    var content = header.nextElementSibling;

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        header.classList.remove('active');
    } else {
        content.style.maxHeight = "500px";
        header.classList.add('active');
    }
}
