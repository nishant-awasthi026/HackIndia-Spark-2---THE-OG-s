 // Get the checkbox element
 const checkbox1 = document.getElementById('temp-btn');
 const checkbox2 = document.getElementById('gas-btn');
 var tmpdata = document.getElementById('temp-data');
 var gasdata = document.getElementById('gas-data');
 var tmpstatus =document.getElementById('tep-status');
 var gasstatus =document.getElementById('gas-status');
 var FlagGas=1;
 var FlagTmp=1;

 // Add an event listener for the change event
 checkbox1.addEventListener('change', function() {
     // Check if the checkbox is checked
     if (checkbox1.checked) {
         console.log('The checkbox is checked.');
         tmpdata.innerHTML = `33<sup>°C</sup>`;
         document.getElementById('temp').style.backgroundColor='#2196F3';
         document.getElementById('temp').style.color='#efefef';
        (FlagTmp=1)?tmpstatus.innerHTML=`normal`: tmpstatus.innerHTML=`danger`; 
        

     } else {
         console.log('The checkbox is not checked.');
         tmpdata.textContent = 'NA';
         document.getElementById('temp').style.backgroundColor='#ccc';
         document.getElementById('temp').style.color='#000000';
         tmpstatus.innerHTML=`!`;
        
     }
 });

 checkbox2.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (checkbox2.checked) {
        console.log('The checkbox is checked.');
        gasdata.innerHTML = `12%`;
        document.getElementById('gas').style.backgroundColor='#2196F3';
        document.getElementById('gas').style.color='#efefef';
        (FlagGas=1)?gasstatus.innerHTML=`normal`: gasstatus.innerHTML=`danger`; 

    } else {
        console.log('The checkbox is not checked.');
        gasdata.textContent = 'NA';
        document.getElementById('gas').style.backgroundColor='#ccc';
        document.getElementById('gas').style.color='#000000';
        gasstatus.innerHTML=`!`;
       
    }
});