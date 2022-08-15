import Ticket from '../components/Ticket';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesContext from '../categoryContext';
import OwnerContext from '../ownerContext';



const Dashboard = () => {
    let navigate = useNavigate()
    const [tickets, setTickets] = useState(null);
    const {setCategories} = useContext(CategoriesContext);
    const  {setOwners } = useContext(OwnerContext);

    useEffect(() => async () => {
        const response = await axios.get('/tickets')
        const dataObj = response.data.data
        const keys = Object.keys(dataObj);
        const dataArray = keys.map(key => dataObj[key])
        const data = [];
        keys.map((key, index) => {
            const formattedData = {...dataArray[index]}
            formattedData["documentId"] = key
            data.push(formattedData)
        })
        console.log(data);
        setTickets(data)
    }, [])

    useEffect(() => {
        setCategories([...new Set( tickets?.map(({category}) => category))])
        const owners = [...new Set(tickets?.map(ticket => ({
            owner: ticket.owner, avatar: ticket.avatar
        })))]
        setOwners([owners])
    }, [tickets])

    const colors = {};

    function generateRandomRgb() {
        let round = Math.round, random = Math.random, range = 255;
        return 'rgb(' + round(random()*range) + ',' + round(random()*range) + ',' + round(random()*range) + ')';
    }
    const uniqueCategory = [...new Set( tickets?.map(({category}) => category))];

    const generateCategoryColor = () => {
        uniqueCategory.forEach( category => !colors[category]? colors[category] = generateRandomRgb(): '');
    }
  generateCategoryColor();

    return (
        <div className="dashboard">
            <div className='header'>
                <h1> My Projects </h1>
                <div className='btn'>
                     <button className='icon-btn' onClick={() => navigate('/ticket')}> ＋ </button>
                </div>

            </div>
            <div className="ticket-container">
                {tickets && uniqueCategory?.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3> {category} </h3>
                        {tickets.filter(ticket => ticket.category === category)
                        .map((filteredTicket, _index) => <Ticket
                        id={_index}
                        color={colors[category]}
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
