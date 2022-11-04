document.querySelectorAll('.timetable__selected__button').forEach(btn => {
    btn.addEventListener('click', function(){
      const form = document.getElementById(btn.dataset.timetableId);
      let boxs = document.querySelectorAll('.timetable__calendar');
      for (let elem of boxs){
        elem.classList.add('none');
      }
      form.classList.remove('none')
    })
    
  })

