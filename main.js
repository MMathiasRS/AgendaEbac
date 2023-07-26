const form = document.querySelector("form");
      
form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("Name");
    const NameValue = name.value;
    const NameSplit = NameValue.split(" ");
    const Number = document.getElementById("Tel");
    const NumberValue = Number.value;


    if (NameSplit.length >= 2 && NumberValue.length === 9) {
        let linha = "<tr>";
        linha += `<td>${NameValue}</td>`;
        linha += `<td>${NumberValue}</td>`;
        linha += "</tr>";

        const Table = document.querySelector("tbody");

        Table.innerHTML = linha;
        form.reset()
        
    } else {
       document.querySelector('p').innerHTML='Your information is invalid'
       document.querySelector('p').style.color='red'
       document.querySelector('p').style.paddingTop='20px'
       form.reset()
    }
});