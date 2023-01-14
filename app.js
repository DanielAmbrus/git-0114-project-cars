const btn = document.getElementById("btn");
const result = document.querySelector(".result");

window.addEventListener("load", async () =>

{
    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    let output = "";
    data.map(car =>{

        output +=`
        <div class="car">
            <h2>Márka: ${car.Márka}</2>
            <h3>Típus: ${car.Típus}</3>
            <h3>Évjárat: ${car.Évjárat}</3>
        </div>
        `

    })
   result.innerHTML=output;
}
)