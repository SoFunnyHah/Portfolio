/*window.onload = () => {
  const randomnbr = document.getElementsByClassName('random__nbr');
  const letters = ["F", "r", "o", "n", "t", "E", "n", "d", "d", "e", "v", "e", "l", "o", "p", "e", "r"];
  const timer= 15;
  let data = 0;
  let start;
  let counter = 0;
  let parent = document.getElementsByClassName('random')[0];
  let nodeList = parent.querySelectorAll('.random__ltr');

  for (let i = 0; i < randomnbr.length; i++) {
    let change = Math.round(Math.random()*100);
    randomnbr[i].setAttribute('data-change', change);
  };

  const random = () => Math.round(Math.random()*9);
  
  const select = () => Math.round(Math.random()*randomnbr.length+1);
  
  const value = () => {
    let a = document.getElementsByClassName('random__nbr')[select()];
    a.innerHTML = random();
    a.setAttribute('data-number', data);
    data++;
    
    for (let i = 0; i < randomnbr.length; i++) {
      if(parseInt(randomnbr[i].getAttribute('data-number')) > parseInt(randomnbr[i].getAttribute('data-change'))) {
        let index = Array.prototype.indexOf.call(nodeList, randomnbr[i]);
        randomnbr[i].innerHTML = letters[index];
        randomnbr[i].classList.remove('random__nbr');
      }
    }
  };
  
   start = setInterval(value, timer); 
};*/
$(document).ready(function(){
  
  let randomnbr = $('.random__nbr');
  let timer= 15;
  let it;
  let data = 0;
  let index;
  let change;
  let letters = ["F", "R", "O", "N", "T", "E", "N", "D", "D", "E", "V", "E", "L", "O", "P", "E", "R"];

  randomnbr.each(function(){
      
    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*randomnbr.length+1);
  };
  
  function value(){
    let counter = 0;
    $('.random__nbr:nth-child('+select()+')').html(''+random()+'');
    $('.random__nbr:nth-child('+select()+')').attr('data-number', data);
    data++;
    
    randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.random__ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('random__nbr');
        }
    });
    for (let i = 0; i < randomnbr.length; i++) {
      if (randomnbr[i].innerText == letters[i]) {
        counter++;
      }
    }
    if (counter == 17) clearTimeout(it);
  };
    it = setInterval(value, timer);
    
});