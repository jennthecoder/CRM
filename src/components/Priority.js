
const Priority = ({priority}) => {
    const starPriority = (priority) => {
       let star = [];
       while(star.length < priority ){
           star.push('★')
       }
       return star.join("");
    }
    let stars = starPriority(priority)

    const starColor = (priority) => {
        let color;
        switch(priority){
            case 1:
                color =  'rgb(3, 252, 15)'
                break
            case 2:
                color =  'rgb(252, 231, 3)'
                break
            case 3:
                color = 'rgb(252, 111, 3)'
                break
            case 4:
                color = 'rgb(252, 69, 3)'
                break
            case 5:
                color = 'rgb(252, 11, 3)'
                break
            default:
                color = ''

        }
        return color;
    }
    return (
        <div className="priority-display">
            <div className="star-container">
                <h3 style={{color: starColor(priority)}}>{stars}</h3>
            </div>
        </div>
    );
}

export  default Priority;
