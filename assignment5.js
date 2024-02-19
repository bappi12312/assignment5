let DecreasingSeat = document.querySelector('#dynamic');
let increaseingSeat = document.querySelector('#increase');

const sameValue = document.querySelectorAll('#same')


const copoun = document.querySelector('#copuon');

const inputNameValue = document.querySelector('#name')

const nextButton = document.querySelector('#nextbutton')

const inputNumberValue = document.querySelector('#number')


const inputEmailValue = document.querySelector('#emailid')

const copounButton = document.querySelector('#copuonvalue');

const totalValue = document.querySelector('#totalprice');

const grandtotal = document.querySelector('#grandvalue');

const appendChild = document.querySelector('#appendChild');

let count = 0
let decresingValue = 40;
let isSelected = true;

for (const sameValues of sameValue) {
  sameValues.addEventListener('click', (e) => {

    count += 1;

    increaseingSeat.innerHTML = count;
    decresingValue -= 1;
    DecreasingSeat.innerHTML = decresingValue;

    const allSameValue = e.target.innerText;

    if (count <= 4 && e.target.innerText == e.target.innerText) {

      if (isSelected) {
        sameValues.classList.add('bg-[#11d445]')
        appendChild.innerHTML += `
    <div class="flex justify-between">
    <h3>${allSameValue}</h3>
    <h3>Economey</h3>
    <h3>550</h3>
    </div>
    `;
    isSelected = false;
      }


    }
    else {
      alert('You can select maximam of seat number 4')
    }





  })
}








