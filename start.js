(() => {
    var scorePoint = 0;
    var img = document.getElementById("scream");
    const canvas = document.getElementById('falling-swon-canvas');
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

    function onKeyDown(event){
        if(event.key === '1'){
            canvas.style.display = "none"
            game.style.display = 'block'
            employeeName.style.display = "none"
            point.style.display = "none"
            score.style.display = "none"
            rules.style.display = "none"
        }else if(event.key === '2'){
            canvas.style.display = "none"
            game.style.display = 'none'
            employeeName.style.display = "none"
            point.style.display = "none"
            score.style.display = "none"
            rules.style.display = "block"
        }else if(event.key === '3'){ //clear score
            scorePoint = 0
            score.innerText = `SCORE : ${scorePoint}`
            canvas.style.display = "none"
            employeeName.style.display = "block"
            game.style.display = 'none'
            point.style.display = "none"
            score.style.display = "block"
            rules.style.display = "none"
            nameRandom();
        }else if(event.key === 'r'){
            canvas.style.display = "none"
            employeeName.style.display = "block"
            game.style.display = 'none'
            point.style.display = "none"
            score.style.display = "block"
            rules.style.display = "none"
            nameRandom();
        }else if(event.key === 'p'){
            canvas.style.display = "block"
            point.style.display = "block"
            score.style.display = "block"
            employeeName.style.display = "none"
            game.style.display = "none"
            rules.style.display = "none"
            scorePoint += 1
            score.innerText = `SCORE : ${scorePoint}`
        }else if(event.key === 'f'){
            document.location.href = './index.html'
        }
    }
    function run(){
        document.addEventListener('keydown', onKeyDown);
        canvas.style.display = "none"
        money();
    }
    run()
})();