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

const grandtotal = document.querySelector('#grandtotal');

const appendChild = document.querySelector('#appendChild');



let count = 0
let decresingValue = 40;
let isSelected = true;
let counter = 0;
let totalCount = 0;

for (const sameValues of sameValue) {
  sameValues.addEventListener('click', (e) => {
    counter += 1;

    if (counter <= 4 && isSelected) {

      count += 1;

      increaseingSeat.innerHTML = count;
      decresingValue -= 1;
      DecreasingSeat.innerHTML = decresingValue;

      const allSameValue = e.target.innerText;

      sameValues.classList.add('bg-[#11d445]')
      appendChild.innerHTML += `
      <div class="flex justify-between">
      <h3>${allSameValue}</h3>
      <h3>Economey</h3>
      <h3>550</h3>
      </div>
  `


      e.target.setAttribute('disabled', 'disabled');

      let addingTotal = totalCount += 550

      totalValue.innerHTML = addingTotal;

      grandtotal.innerText = addingTotal;

       

      if (counter === 4) {
        copounButton.removeAttribute('disabled');
        copoun.removeAttribute('disabled');
        copoun.addEventListener('keyup', (e) => {
          let value = e.target.value;
          copounButton.addEventListener('click', (e) => {
             if (value === 'NEW15') {
              let discount = addingTotal * 15 / 100
              grandtotal.innerText = addingTotal - discount;
             } else if (value === 'Couple 20') {
              let discount = addingTotal * 20 / 100
              grandtotal.innerText = addingTotal - discount ;
             } else {
              alert('you typed worg copoun code')
             }
          })
         })
      }

      inputNumberValue.addEventListener('keyup', (e) => {
        const value3 = e.target.value;

        if (e.target.value && counter >= 1) {
          nextButton.removeAttribute('disabled');
        }
        

        copounButton.addEventListener('click', (e) => {

        })

      })
    }
    if (counter > 4) {
      alert('You can select maximam of seat number 4')
    }





  })
}













