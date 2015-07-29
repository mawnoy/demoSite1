'use strict';
// this method still have bug in some major browser
// ref - http://caniuse.com/#feat=datalist

export function autoComplete() {
    // Get the <datalist> and <input> elements.
    var dataList = document.getElementById('json-datalist');
    var input = document.getElementById('auto-search');

    // Create a new XMLHttpRequest.
    var request = new XMLHttpRequest();

    // Handle state change for the request.
    request.onreadystatechange = function(response) {
        if(request.readyState === 4) {
            if(request.status === 200) {
                //Parse the JSON
                var jsonOptions = JSON.parse(request.responseText);

                // Loop over the JSON.
                jsonOptions.forEach(function(item) {
                    //Create new Elem <option>
                    var option = document.createElement('option');

                    //Set the value using item to option
                    option.value = item;

                    //Add <option> to <datalist>
                    dataList.appendChild(option);
                });

                // Update the placeholder text.
                // input.placeholder = 'ssscvcv';
            } else {
                // An  error occured
                input.placeholder = 'Couldn\'t load datalist option';
            }
        }
    };

    // Update the placeholder text.
    input.placeholder = 'Loading options...';

    // Set up and make the request.
    request.open('GET', 'list.json', true);
    request.send();
}
