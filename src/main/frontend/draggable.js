window.makeDraggable = function(element) {
    let offsetX = 0;
    let isDragging = false;

    element.style.position = "absolute";
    element.style.cursor = "grab";

    // Prepare for dragging when user clicks (mousedown)
    element.addEventListener("mousedown", (event) => {
        event.preventDefault(); // Prevent text selection
        isDragging = true;

        const boxRect = element.getBoundingClientRect();
        offsetX = event.clientX - boxRect.left;

        console.log(
            `MOUSEDOWN:
            event: ${event.clientX}, boxRect.left: ${boxRect.left}, offsetX: ${offsetX}`
        );
    });

    // Compute the new left position when dragging
    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;

        let newLeft = event.clientX - offsetX;

        // Prevent the button from going offscreen
        const minLeft = 0;
        const maxLeft = window.innerWidth - element.offsetWidth;

        newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

        console.log(`MOVING MOUSE: newLeft: ${newLeft}, maxLeft: ${maxLeft}`);
        element.style.left = `${newLeft}px`;
    });

    // On mouseup, the drag action ends
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
};
