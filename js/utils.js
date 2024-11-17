const getOffsetHeight = function (el) {
    if (el) return el.offsetHeight;
}

const controlCollapse = function (toggleEl, targetEl) {

    // Stores the expanding state
    let isExpanded = window.getComputedStyle(targetEl).display === 'none'? false: true;

    toggleEl.addEventListener('click', function (e) {
        // Preparing the collapsible element for the height transition
        targetEl.classList.add("collapsing");

        if (isExpanded) {
            const elHeight = getOffsetHeight(targetEl);
            targetEl.style.height = `${elHeight}px`;

            requestAnimationFrame(()=> targetEl.style.height = '0px');

            targetEl.ontransitionend = function(e) {
                targetEl.classList.remove('collapsing');
                targetEl.style.display = 'none';
                targetEl.style.height = "";
                console.log("expanded")
            };
        } else {
            console.log("shrunk")
            targetEl.style.display = 'block';
            const elHeight = getOffsetHeight(targetEl);
            targetEl.style.height = '0px';

            requestAnimationFrame(() => targetEl.style.height = `${elHeight}px`);

            targetEl.ontransitionend = function (e) {
                targetEl.classList.remove("collapsing");
                targetEl.style.height = "auto";
            };
        }

        // Switch off the state
        isExpanded = !isExpanded;

    })
}

export {controlCollapse}