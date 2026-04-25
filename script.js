const MyHome = {
  entranceOne: {
floorOne:{
  apartmentOne:{
    fullName: 'Александр Петров',
    birthDay: '12.03.1985 - 41'
  }
},
floorTwo:{
  apartmentTwo:{
    fullName: 'Мария Иванова',
    birthDay: '07.11.1990 - 35'
  }
},
floorThree:{
  apartmentThree:{
    fullName: 'Дмитрий Соколов',
    birthDay: '23.06.1978 - 47'
  }
},
floorFour:{
  apartmentFour:{
    fullName: 'Анна Кузнецова',
    birthDay: '15.09.1995 - 30'
  }
},
floorFive:{
  apartmentFive:{
    fullName: 'Сергей Новиков',
    birthDay: '02.01.1982 - 44'
  }
}
},
// ================Two====================
entranceTwo: {
floorOne:{
  apartmentSix:{
    fullName: 'Елена Морозова',
    birthDay: '30.04.1988 - 37'
  }
},
floorTwo:{
  apartmentSeven:{
    fullName: 'Артём Волков',
    birthDay: '18.12.1975 - 50'
  }
},
floorThree:{
  apartmentEight:{
    fullName: 'Ольга Козлова',
    birthDay: '09.07.1993 - 32'
  }
},
floorFour:{
  apartmentNine:{
    fullName: 'Михаил Лебедев',
    birthDay: '25.02.1969 - 57'
  }
},
floorFive:{
  apartmentTen:{
    fullName: 'Наталья Попова',
    birthDay: '14.05.1991 - 34'
  }
}
  },
  // ================Three====================
entranceThree: {
floorOne:{
  apartmentEleven:{
    fullName: 'Павел Зайцев',
    birthDay: '03.10.1987 - 38'
  }
},
floorTwo:{
  apartmentTwelve:{
    fullName: 'Даниил Абрамов',
    birthDay: 'Infinity - 18'
  }
},
floorThree:{
  apartmentThirteen:{
    fullName: 'Владимир Орлов',
    birthDay: '11.03.1974 - 52'
  }
},
floorFour:{
  apartmentFourteen:{
    fullName: 'Татьяна Федорова',
    birthDay: '06.06.1983 - 42'
  }
},
floorFive:{
  apartmentFifteen:{
    fullName: 'Рябов Никита',
    birthDay: '30.05.2008 - 17'
  }
}
  },
  // ================Four====================
  entranceFour: {
floorOne:{
  apartmentSixteen:{
    fullName: 'Ирина Белова',
    birthDay: '17.11.1994 - 31'
  }
},
floorTwo:{
  apartmentSeventeen:{
    fullName: 'Елизавета Калачева',
    birthDay: 'undefined'
  }
},
floorThree:{
  apartmentЕighteen:{
    fullName: 'Светлана Тихонова',
    birthDay: '29.03.1989 - 37'
  }
},
floorFour:{
  apartmentNineteen:{
    fullName: 'Роман Киселев',
    birthDay: '13.09.1986 - 39'
  }
},
floorFive:{
  apartmentTwenty:{
    fullName: 'Людмила Яковлева',
    birthDay: '08.12.1976 - 46'
  }
}
  },
   // ================Five====================
  entranceFive: {
floorOne:{
  apartmentTwentyone:{
    fullName: 'Константин Борисов',
    birthDay: '20.05.1977 - 48'
  }
},
floorTwo:{
  apartmentTwentytwo:{
    fullName: 'Галина Медведева',
    birthDay: '01.02.1998 - 28'
  }
},
floorThree:{
  apartmentTwentythree:{
    fullName: 'Игорь Громов',
    birthDay: '16.10.1973 - 52'
  }
},
floorFour:{
  apartmentTwentyfour:{
    fullName: 'Вера Степанова',
    birthDay: '24.07.1992 - 33'
  }
},
floorFive:{
  apartmentTwentyfive:{
    fullName: 'Евгений Субботин',
    birthDay: '07.04.1984 - 41'
  }
}
  }
}
document.getElementById('main_form').addEventListener('submit', search)

function search(event){
event.preventDefault()

let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value

let searchFullName = firstName + ' ' + lastName

let nameOutput = document.getElementById('rName')
let dateOutput = document.getElementById('rDate')
let infoOutput = document.getElementById('rInfo')

if (firstName === '' || lastName === ''){
  document.getElementById('result').style.display = 'block'
  nameOutput.textContent = 'Ошибка ввода'
  dateOutput.textContent = '-'
  infoOutput.textContent = 'Пожалуйста, заполните имя и фамилию'
  infoOutput.style.color = 'red'
  return
}
if (/\d/.test(searchFullName)) {
document.getElementById('result').style.display = 'block';
  nameOutput.textContent = 'Ошибка ввода'
  dateOutput.textContent = '-'
  infoOutput.textContent = 'Имя и фамилия не могут содержать цифры.'
  infoOutput.style.color = 'red'
  return
}

let foundPerson = null

for (let entrance in MyHome){
  for(let floor in MyHome[entrance]){
    for(let apartment in MyHome[entrance][floor]){
      let person = MyHome[entrance][floor][apartment]
if (person.fullName.toLowerCase() === searchFullName.toLowerCase()){
  foundPerson = person
}
    }
  }
}
if (foundPerson){
  document.getElementById('result').style.display = 'block'
  nameOutput.textContent = foundPerson.fullName
  dateOutput.textContent = 'Дата рождения и возраст: ' + foundPerson.birthDay
  infoOutput.textContent ='Данные успешно найдены в архиве.'
  infoOutput.style.color = 'green'
} else {
  document.getElementById('result').style.display = 'block'
  nameOutput.textContent = searchFullName
  dateOutput.textContent = '-'
  infoOutput.textContent = 'К сожалению ничего не найдено'
  infoOutput.style.color = 'red'
}
document.getElementById('firstName').value = ''
document.getElementById('lastName').value = ''
}
