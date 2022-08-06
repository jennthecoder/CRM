import {Link} from 'react-router-dom';
import Avatar from './Avatar';
import Status from './Status';
import Progress from './Progress';
import Priority from './Priority';
import Delete from './Delete';

const Ticket = ({color, ticket}) => {
    return (
        <div className="ticket-card">
             <div className='ticket-color' style={{backgroundColor: color}}></div>
            <Link to={`/ticket/${ticket.documentId}`} id='link'>
                <h3> {ticket.title} </h3>
                <Avatar ticket={ticket}/>
                <Status status={ticket.status}/>
                <Priority />
                <Progress />
            </Link>
            <Delete />
        </div>
    );
}

export  default Ticket;
