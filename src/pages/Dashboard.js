import Ticket from '../components/Ticket';

const Dashboard = () => {
    const tickets = [
        {
            category: 'Q1 2022',
            color: 'purple',
            title: 'Interview prep',
            owner: 'Jennifer Nnadi',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/beau-carnes-gravatar.jpeg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video on how to prep for tech interviews',
            timestamp: '2022-08-06T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'pink',
            title: 'How to invest',
            owner: 'Jennifer Nnadi',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/beau-carnes-gravatar.jpeg',
            status: 'done',
            priority: 3,
            progress: 40,
            description: 'Make a video on how to prep for tech interviews',
            timestamp: '2022-08-06T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'red',
            title: 'DS and algo',
            owner: 'Jennifer Nnadi',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/beau-carnes-gravatar.jpeg',
            status: 'done',
            priority: 2,
            progress: 20,
            description: 'record Leetcode problems',
            timestamp: '2022-08-06T09:36:17+0000'
        }
    ]

    const uniqueCategory = [...new Set( tickets?.map(({category}) => category))];

    return (
        <div className="dashboard">
            <h1> My Projects </h1>
            <div className="ticket-container">
                {tickets && uniqueCategory?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3> {uniqueCategory} </h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                        .map((filteredTicket, _index) => <Ticket
                        id={_index}
                        color={filteredTicket.color}
                        ticket={filteredTicket}
                        /> )

                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
