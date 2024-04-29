const timer = (id, deadline) => {
    //функция добавляющая 0 если число меньше 10
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()), //разница времени между endtime и текущей датой
              //считаем количество секунд, минут, часов и дней
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              days = Math.floor((t / (1000 * 60 * 60 * 24)));

        //возвращаем из функции объект с даенными
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    //определенные значения размещаем в определенных элементах
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000); 
              //сетинтервал, который каждую секундк будет обновлять таймер

        updateClock();
        //функция определяет сколько времени осталось до дедлайна
        function updateClock() {
            //вызываем первую функцию чтобы узнать сколько времени осталось до конца
            const t = getTimeRemaining(endtime);

            //записываем в найденные элементы значения из объекта в getTimeRemaining
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            //если общее количество милисек <= 0, устанавливаем всем значениям 0
            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                //останаливаем таймер
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;