import axios from 'axios';
import {useState, useContext, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import CategoriesContext from '../categoryContext';
import OwnerContext from '../ownerContext';

const Tickets = ({editMode}) => {
    const [formData, setFormData] = useState({
        status: 'no progress',
        progress: 0,
        timestamp: new Date().toISOString()
    })

    const {categories} = useContext(CategoriesContext);
    const {owners} = useContext(OwnerContext);


    const navigate = useNavigate()
    let {id} = useParams();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(editMode){
            const response =  await axios.put(`/tickets/${id}`, {data: formData})
            const success =  response.status === 200
            if(success){
                navigate('/');
            }
        }
        if(!editMode){
            const response = await axios.post('/tickets', {
                formData
            });
            const success = response.status === 200;
            if(success){
                navigate('/');
            }
        }

    }

    const fetchData = async() => {
       const response = await axios.get(`/tickets/${id}`)
       setFormData(response.data.data)

    }

    useEffect(() =>{
        if(editMode){
            fetchData()
        }
    }, [])

    const handleChange = (e) => {
        const value =  e.target.value;
        const name = e.target.name;
        setFormData(prevSate => ({
            ...prevSate,
            [name]:value
        }))
    }

    const selectOwner = (e, avatar) => {
        e.preventDefault();
        const value =  e.target.value;
        const name = e.target.name;
        setFormData( prevSate => ({
            ...prevSate,
            [name]:value,
            avatar: avatar
        }))
    }


    return (
        <div className="ticket">
            <h1 className="title" > { editMode ? 'update your ticket': 'create a new ticket' }</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title"> Title </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required={true}
                            value={formData.title}
                            onChange={handleChange}/>

                        <label htmlFor="description"> Description </label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            required={true}
                            value={formData.description}
                            onChange={handleChange}
                        />

                        <label>Category</label>
                        <select
                            id='category'
                            name="category"
                            value={formData.category}
                            required={true}
                            onChange={handleChange}
                        >
                            {categories?.map((category, _index) => (
                                <option key={_index} value={category}>{category}</option>
                            ))}
                        </select>

                        <label htmlFor="new-category"> New category </label>
                        <input
                            id="new-category"
                            name="category"
                            type="text"
                            value={formData.category}
                            onChange={handleChange}
                        />

                        <label>Priority</label>
                        <div className="multiple-input-container">
                        <input
                            id="priority-1"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            required={true}
                            value={1}
                            checked={formData.priority == 1}
                        />
                        <label htmlFor="priority-1">1</label>
                        <input
                            id="priority-2"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            required={true}
                            value={2}
                            checked={formData.priority == 2}
                        />
                        <label htmlFor="priority-2">2</label>
                        <input
                            id="priority-3"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            required={true}
                            value={3}
                            checked={formData.priority == 3}
                        />
                        <label htmlFor="priority-3">3</label>
                        <input
                            id="priority-4"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            required={true}
                            value={4}
                            checked={formData.priority == 4}
                        />
                        <label htmlFor="priority-4">4</label>
                        <input
                            id="priority-5"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={5}
                            required={true}
                            checked={formData.priority == 5}
                        />
                        <label htmlFor="priority-5">5</label>
                        </div>
                        {editMode &&
                        <>
                        <label htmlFor='progress'>Progress</label>
                            <input
                                type="range"
                                id="progress"
                                name="progress"
                                value={formData.progress}
                                min={0}
                                max={100}
                                onChange={handleChange}
                            />
                        <label htmlFor='progress'>Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            required={true}
                            onChange={handleChange}
                        >
                            <option selected={formData.status === 'in progress'}> In progress </option>
                            <option selected={formData.status === 'no progress'}> No progress </option>
                            <option selected={formData.status === 'not started'}> Not started </option>
                            <option selected={formData.status === 'completed'}> Completed </option>
                        </select>
                        </>
                        }
                        <input type="submit" onClick={handleSubmit}/>
                    </section>
                    <section>
                        <label htmlFor='owner'> Owner </label>
                        <div className='owners-list'>
                        {owners?.map((owner, index) =>
                            owner.map( list => (
                            <button  id={index} className='owners' onClick={e => selectOwner(e, list.avatar)} name="owner" value={list.owner}> {list.owner} </button>))
                        )}
                        </div>
                        <label htmlFor='owner'> New owner </label>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.owner}
                        />
                        <label htmlFor='avatar'> Avatar </label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.avatar}
                        />
                        <div className='img-preview'>
                            {formData.avatar && (
                                <img src={formData.avatar} alt={formData.owner}/>
                            )}
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

export  default Tickets;
