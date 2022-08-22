const selectButton = document.getElementsByClassName('btn-select');
for (const select of selectButton) {
    select.addEventListener('click', function (event) {
        const olList = document.getElementById('ol-list');
        if (olList.childNodes.length <= 5) {
            event.target.setAttribute('disabled', 'disabled');
            const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
            const li = document.createElement('li');
            li.innerText = playerName;
            olList.appendChild(li);
        }
        else {
            alert('You Cannot Select More Than five Players')
        }

    })
}
// if (event.target.innerText === 'SELECT') {
        //     event.target.parentNode.removeChild(event.target)
        // }