(() => {
    function onKeyDown(event){
        if(event.key === '1'){
            document.location.href = './welcome.html'
        }else if(event.key === '2'){
            document.location.href = './rule.html'
        }else if(event.key === '3'){
            document.location.href = './welcome.html'
        }else if(event.key === 'r'){
            document.location.href = './random.html'
        }else if(event.key === 'p'){
            document.location.href = './index.html'
        }else if(event.key === 'f'){
            document.location.href = './index.html'
        }
    }
    function run(){
        document.addEventListener('keydown', onKeyDown);
    }
    run();
})();