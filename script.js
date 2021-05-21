

// 1.) Write a function that will grab the title and change it to a string of your choosing
// Don't forget to actually run your function

let changeTitle = title => {
    document.querySelector("title").textContent = title;
}

changeTitle("Example Title");

// 2.) Write a function, that given a color, will change the background color of the table to that color

let changeTableColor = color => {
    document.querySelector("table").style.background = color;
}

// 3.) Write a function that will take in some values for: name, type, weight, image, and create a new row that displays
// those values.
// for the image use this ----> 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/REPLACE-ME-WITH-A-NUM-1-500.png'

let newRow = (name, type, weight, image) => {
    let row = document.createElement("tr");

    row.innerHTML = `<th class="pokemon">${name}</th>
    <td>${type}</td>
    <td>${weight}</td>
    <td>
        <image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${image}.png'>
        </image>
    </td>`;

    document.querySelector("tbody").append(row);
}

// 4.) Write a function that will delete the last row in the table

let lastRow = document.querySelector("tbody tr:last-child");

lastRow.remove();

/// ******* TIPS **************

// - if the style isnt looking quite right make sure you are adding the appropriate class name.
// - When creating the table row refer to this 

//                     <tr>
                    //     <th class="pokemon">Bulbasaur</th>
                    //     <td>Grass</td>
                    //     <td>12lbs</td>
                    //     <td>
                    //         <image
                    //             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png">
                    //         </image>
                    //     </td>
                    // </tr>