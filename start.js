(() => {
    var scorePoint = 0;
    var img = document.getElementById("scream");
    const canvas = document.getElementById('falling-swon-canvas');
    const body = document.getElementById("body");

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

    function nameRandom(){
        fetch('data.json').then(
            response => response.json()).then(data => {
            // Do something with your data
            var random = data[data.length * Math.random() << 0];
            document.getElementById("employee").innerHTML = random.name
        });
    }
    
    const employeeName = document.getElementById('employeeName');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const point = document.getElementById('point');
    const rules = document.getElementById('rules');
    const ready = document.getElementById('ready');
    const fail = document.getElementById('fail');

    function onKeyDown(event){
        if(event.key === '1'){
            canvas.style.display = "none"
            game.style.display = 'block'
            employeeName.style.opacity = 0
            point.style.display = "none"
            score.style.opacity = 0
            rules.style.display = "none"
        }else if(event.key === '2'){
            canvas.style.display = "none"
            game.style.display = 'none'
            employeeName.style.opacity = 0
            point.style.display = "none"
            score.style.opacity = 0
            rules.style.display = "block"
        }else if(event.key === '3'){ //clear score

            scorePoint = 0
            score.innerText = `SCORE : ${scorePoint}`
            
            canvas.style.display = "none"
            game.style.display = "none"
            point.style.display = "none"
            rules.style.display = "none"
            employeeName.style.opacity = 0
            score.style.opacity = 0
            ready.style.opacity = 1
            fail.style.opacity = 0

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
            // employeeName.style.display = "block"
            // score.style.display = "block"
            nameRandom();
        }else if(event.key === 'r'){
            canvas.style.display = "none"
            employeeName.style.opacity = 1
            fail.style.opacity = 0
            game.style.display = 'none'
            point.style.display = "none"
            score.style.opacity = 1
            rules.style.display = "none"
            nameRandom();
        }else if(event.key === 'p'){
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
            // document.body.style.backgroundColor = 'red';
            scorePoint -= 1
            score.innerText = `SCORE : ${scorePoint}`

            canvas.style.display = "none"
            game.style.display = "none"
            point.style.display = "none"
            rules.style.display = "none"
            employeeName.style.opacity = 0
            score.style.opacity = 0
            fail.style.opacity = 1
            
            var ml5 = {};
            ml5.opacityIn = [0,1];
            ml5.scaleIn = [0.2, 1];
            ml5.scaleOut = 3;
            ml5.durationIn = 800;
            ml5.durationOut = 600;
            ml5.delay = 500;

            anime.timeline({ loop: true })
            .add({
                targets: '.ml5 .letters-1',
                opacity: ml5.opacityIn,
                scale: ml5.scaleIn,
                duration: ml5.durationIn
            }).add({
                targets: '.ml5 .letters-1',
                opacity: 0,
                scale: ml5.scaleOut,
                duration: ml5.durationOut,
                easing: "easeInExpo",
                delay: ml5.delay
            })
        }
    }
    function run(){
        document.addEventListener('keydown', onKeyDown);
        canvas.style.display = "none"
        money();
    }
    run()
})();