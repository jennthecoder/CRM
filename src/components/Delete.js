import axios from 'axios';

const Delete = ({documentId}) => {
    const deleteTicket = async() => {
        const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
        const success = response.status === 200
        if(success){
            window.location.reload()
        }

    }

    return (
        <div className="delete-display">
            <button className="delete-btn" id={documentId} onClick={deleteTicket}> ✗ </button>
        </div>
    );
}

export  default Delete;
