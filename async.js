let favNum = 10;
let URL = "http://numbersapi.com";

//1.

async function part1_1() {
    let data = await $.getJSON(`${URL}/${favNum}?json`);
    console.log(data)
}

part1_1();

//2.

async function part2_2() {
    const favNums = [2, 8, 52]
    let data = await $.getJSON(`${URL}/${favNums}?json`)
    console.log(data)
}

part2_2();

//3.

async function part3_3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${URL}/${favNum}?json`))
    );
    facts.forEach(data => {
        let newFact = $('<li>'); // Create a new <li> element
        newFact.text(data.text); // Set the text content of the <li> element

        // Append the new <li> element to an existing element with id "factList"
        $('ul').append(newFact);
    });
}

part3_3();