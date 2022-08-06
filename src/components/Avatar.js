import blankAvatar from '../images/blank-profile.png';

const Avatar = ({ticket}) => {
    return (
        <div className="avatar-container">
            <div className="img-container">
                <img src={ticket.avatar ? ticket.avatar: blankAvatar} alt={`${ticket.owner}`}/>
            </div>
        </div>
    );
}

export  default Avatar;
