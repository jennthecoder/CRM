const Progress = ({progress}) => {
    const getColor = (progress) => {
        let progressColor;
        if(progress <= 25){
            progressColor = 'rgb(252, 69, 3)'
        }else if(progress > 25 && progress <=50){
            progressColor = 'rgb(252, 111, 3)'
        }else if(progress > 50 && progress <= 75){
            progressColor = 'rgb(252, 231, 3)'
        }else{
            progressColor = 'rgb(3, 252, 15)';
        }
        return progressColor;
    }

    return (
        <div className="progress-bar-display">
            <div className="progress-bar">
                <div className="progress" style={{width:`${progress}%`, backgroundColor: getColor(progress)}}></div>
            </div>
        </div>
    );
}

export  default Progress;
