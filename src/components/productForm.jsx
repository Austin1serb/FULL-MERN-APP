import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default props => {

    const navigate = useNavigate()

    const [formData, setFormData]=useState({
        title:'',
        price: "",
        description: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(e.target.value)
        setFormData(currentData => ({ ...currentData, [name]: value }))


    }

    const onSubmitHanlder = e =>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products`,formData)
        .then(res=>{
            setFormData({
                title:"",
                price: "",
                description: "",
            })
        })
        .catch(err=>console.log("Error: ", err))
    }

    return(
        <div>
            <form >
                <p>
                    <label >Title: </label>
                    <input type="text" value={formData.title}  onChange={handleChange} />
                </p>
                <p>
                    <label >Price: </label>
                    <input type="text" value={formData.price}  onChange={handleChange} />
                </p>
                <p>
                    <label >Description: </label>
                    <input type="text" value={formData.description} onChange={handleChange} />
                </p>
                <input type="submit" onSubmit={onSubmitHanlder} />

            </form>
        </div>
    )



}