

function StopWatch(){
    let startTime, endTime, duration=0, running;

    this.start = ()=>{
        if(running)
            throw new Error('already running');
        
        running=true;
        startTime= new Date();    
    };

    this.stop =()=>{
        if(!running)
            throw new Error('not started yet');

        running=false;
        endTime=new Date();
        const seconds = (endTime.getSeconds() - startTime.getSeconds());
        duration += seconds;

    };

    this.reset =()=>{
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
    };

    Object.defineProperty(this,'duration',{
        get: ()=>{
            return duration;
        }
    });

}

const stopWatchModel1 = new StopWatch();