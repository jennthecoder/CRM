const Status = ({status}) => {

    const getColor = (status) => {
        let color;
        switch(status.toLowerCase()) {
            case 'completed':
                color = `rgb(186,255,201)`
                break
            case `in progress`:
                color = `rgb(255,223,186)`
                break
            case `no progress`:
                color = `rgb(255,179,186)`
                break
            default:
                color = `rgb(186, 255, 255)`
        }
        return color;
    }

    return (
        <div className="status-display" style={{backgroundColor: getColor(status)}}>
            <div>{status}</div>
        </div>
    );
}

export  default Status;
