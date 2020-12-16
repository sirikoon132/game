(() => {
    var scorePoint = 0;
    var img = document.getElementById("scream");
    const canvas = document.getElementById('falling-swon-canvas');
    const body = document.getElementById("body");
    var randomEmp = [];
    var category = [
                    {'label':'แฟนดารา Hiso','json':'dara.json'}
                    ,{'label':'จังหวัดในประเทศไทย','json':'country.json'}
                    ,{'label':'ต่างประเทศ','json':'foreign.json'}
                    ,{'label':'อาหาร','json':'food.json'}
                    ,{'label':'ขนมหวาน','json':'dessert.json'}
                    ,{'label':'สถานที่ Shopping','json':'shopping_mall.json'}
                   ];
    
    var categorySelected = {};
    var time = 60;
    var timeLeft = time;
    var count = false;
    var timerClass;

    document.getElementById("1").onclick = function() {initCategory(0); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };
    document.getElementById("2").onclick = function() {initCategory(1); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };
    document.getElementById("3").onclick = function() {initCategory(2); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };
    document.getElementById("4").onclick = function() {initCategory(3); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };
    document.getElementById("5").onclick = function() {initCategory(4); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };
    document.getElementById("6").onclick = function() {initCategory(5); 
    $('#employeeName #msg.employee').text(categorySelected.label+' is') };


    function setup(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        return {
            canvas, 
            canvascontext: canvas.getContext('2d'),
            numberOfSnowBall: 250
        }
    }
    function random(min, max){
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    function createSnowBall(canvas, numberOfSnowBall){
        return [...Array(numberOfSnowBall)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 1),
                redius: random(2,4),
                speedX: random(-5, 5),
                speedy: random(1,3)
            }
        })
    }
    function moveSnowBall(canvas, snowBall){
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedy;

        if(snowBall.x > canvas.width){
            snowBall.x = 0
        }else if(snowBall < 0){
            snowBall.x = canvas.width
        }

        if(snowBall.y > canvas.height){
            snowBall.y = 0
        }
    }
    function imgMoney(canvascontext, snowBall){
        canvascontext.beginPath();
        canvascontext.drawImage(img, snowBall.x, snowBall.y)
    }
    function money(){
        const {canvas, canvascontext, numberOfSnowBall} = setup();
        const snowBall = createSnowBall(canvas, numberOfSnowBall);

        setInterval(() => {
            canvascontext.clearRect(0, 0, canvas.width, canvas.height);
            snowBall.forEach((snowBall) => imgMoney(canvascontext, snowBall))
            snowBall.forEach((snowBall) => moveSnowBall(canvas ,snowBall));
        }, 15)
    }
    
    const employeeName = document.getElementById('employeeName');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const point = document.getElementById('point');
    const rules = document.getElementById('rules');
    const ready = document.getElementById('ready');
    const fail = document.getElementById('fail');
    const timer = document.getElementById('timer');
    const categoryStyle = document.getElementById('category')
    const thegame = document.getElementById('the-game');

    function onKeyDown(event){
        if(event.key === '1'){
            canvas.style.display = "none"
            game.style.display = 'block'
            employeeName.style.opacity = 0
            point.style.display = "none"
            score.style.opacity = 0
            rules.style.display = "none"
            categoryStyle.style.opacity = 0
            timer.style.opacity = 0
        }else if(event.key === '2'){
            canvas.style.display = "none"
            game.style.display = 'none'
            employeeName.style.opacity = 0
            point.style.display = "none"
            score.style.opacity = 0
            rules.style.display = "block"
            categoryStyle.style.opacity = 0
            timer.style.opacity = 0
        }else if(event.key === '3'){ //clear score
            timeLeft = 60;
            count = false;
            scorePoint = 0
            score.innerText = `SCORE : ${scorePoint}`
            randomEmp = [];
            
            canvas.style.display = "none"
            game.style.opacity = 0
            point.style.opacity = 0
            rules.style.opacity = 0
            categoryStyle.style.opacity = 0
            employeeName.style.opacity = 0
            score.style.opacity = 0
            ready.style.opacity = 1
            fail.style.opacity = 0
            timer.style.opacity = 1
            thegame.style.display = "block";

            var ml4 = {};
            ml4.opacityIn = [0,1];
            ml4.scaleIn = [0.2, 1];
            ml4.scaleOut = 3;
            ml4.durationIn = 800;
            ml4.durationOut = 600;
            ml4.delay = 500;

            var animation =  anime.timeline({ loop: 1 })
            .add({
                targets: '.ml4 .letters-1',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-1',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            }).add({
                targets: '.ml4 .letters-2',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-2',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            }).add({
                targets: '.ml4 .letters-3',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-3',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay,
            }).add({
                targets: '.ml4',
                opacity: 0,
                duration: 500,
                delay: 500
            }).add({
                targets: '#employeeName',
                opacity: 1,
                scale: [0.2, 1],
                duration: 500
            }).add({
                targets: '#score',
                opacity: 1,
                scale: [0.2, 1],
                duration: 500
            })

            console.clear();
            var messenger = new Messenger($('#messenger'));
            setTimeout(() => {
                console.log('time');
                if(!timerClass){
                    timerClass = new Countdown($('#timer'));
                }
                count = true;
            }, 5500);
            
        }else if(event.key === '4'){
            timeLeft = time;
            categoryStyle.style.opacity = 1
            canvas.style.display = "none"
            game.style.opacity = 0
            employeeName.style.opacity = 0
            point.style.opacity = 0
            score.style.opacity = 0
            rules.style.opacity = 0
            timer.style.opacity = 0
            thegame.style.display = "none";

        }else if(event.key === 'r'){
            canvas.style.display = "none"
            employeeName.style.opacity = 1
            fail.style.opacity = 0
            game.style.display = 'none'
            point.style.display = "none"
            score.style.opacity = 1
            rules.style.display = "none"
            console.clear();
            var messenger = new Messenger($('#messenger'));

            if(!timerClass){
                timerClass = new Countdown($('#timer'));
            }
            count = true;
        }else if(event.key === 'p'){
            count = false;
            canvas.style.display = "block"
            point.style.display = "block"
            fail.style.opacity = 0
            score.style.opacity = 1
            employeeName.style.opacity = 0
            game.style.display = "none"
            rules.style.display = "none"
            scorePoint += 1
            score.innerText = `SCORE : ${scorePoint}`
        }else if(event.key === 'f'){
            count = false;
            scorePoint -= 1
            score.innerText = `SCORE : ${scorePoint}`

            canvas.style.display = "none"
            game.style.display = "none"
            point.style.display = "none"
            rules.style.display = "none"
            employeeName.style.opacity = 0
            score.style.opacity = 1
            fail.style.opacity = 1
            
            var ml5 = {};
            ml5.opacityIn = [0,1];
            ml5.scaleIn = [0.2, 1];
            ml5.scaleOut = 1;
            ml5.durationIn = 800;
            ml5.durationOut = 600;
            ml5.delay = 500;

            anime.timeline({ loop: 1 })
            .add({
                targets: '.ml5 .letters-1',
                opacity: ml5.opacityIn,
                scale: ml5.scaleIn,
                duration: ml5.durationIn
            }).add({
                targets: '.ml5 .letters-1',
                opacity: 1,
                scale: ml5.scaleOut,
                duration: ml5.durationOut,
                easing: "easeInExpo",
                delay: ml5.delay
            })
        }else if(event.key === '0'){
            scorePoint -= 1
            score.innerText = `SCORE : ${scorePoint}`
        }
    }

    var Messenger = function(el){
        'use strict';
        var m = this;
        m.codeletters = "&#*+%?£@§$";
        m.current_length = 0;
        m.fadeBuffer = false;
        m.init = function(){
            fetch(categorySelected.json).then(
                response => response.json()).then(data => {
                    let index = m.randomEmployee(data);
                    if(index != null){
                        m.message = index;
                        m.messages = data
                        setTimeout(m.animateIn, 100);
                    }else{
                        console.log("Game Over");
                    }
                });
            };
        m.randomEmployee = function(data){
            if(data.length != randomEmp.length){
                let rand = data.length * Math.random() << 0;
                let index = randomEmp.findIndex(p => p == data[rand].name);
                if(index == -1){
                    randomEmp.push(data[rand].name);
                    return rand;
                }else{
                    return m.randomEmployee(data);
                }
            }else{
                return null;
            }
        };
        m.generateRandomString = function(length){
            var random_text = '';
            while(random_text.length < length){
            random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
            } 
            return random_text;
        };
        m.animateIn = function(){
            if(m.current_length < m.messages[m.message].name.length){
                m.current_length = m.current_length + 2;
                if(m.current_length > m.messages[m.message].name.length) {
                    m.current_length = m.messages[m.message].name.length;
                }
                var message = m.generateRandomString(m.current_length);
                $(el).html(message);
                
                setTimeout(m.animateIn, 20);
            } 
            else { 
                setTimeout(m.animateFadeBuffer, 20);
            }
        };
        m.animateFadeBuffer = function(){
            if(m.fadeBuffer === false){
                m.fadeBuffer = [];
                for(var i = 0; i < m.messages[m.message].name.length; i++){
                    m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].name.charAt(i)});
                }
            }
            var do_cycles = false;
            var message = ''; 

            for(var i = 0; i < m.fadeBuffer.length; i++){
            var fader = m.fadeBuffer[i];
                if(fader.c > 0){
                    do_cycles = true;
                    fader.c--;
                    message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
                } else {
                    message += fader.l;
                }
            }
            $(el).html(message);
            
            if(do_cycles === true){
            setTimeout(m.animateFadeBuffer, 50);
            } 
        };
        m.init();
    }

    function initCategory(index){
        categorySelected = category[index];
    }

    var Countdown = function(el){
        var timer = document.getElementById('timer');
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
            if(count){
                timer.innerText = `Time : ${timeLeft}`

                timeLeft = timeLeft == 0 ? 0 : timeLeft-1;
            }
        }
    }
        
    function run(){
        document.addEventListener('keydown', onKeyDown);
        canvas.style.display = "none"
        money();
        // initCategory(0);
    }
    run()
})();