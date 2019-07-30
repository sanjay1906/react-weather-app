import React, { Component } from 'react'
import Titles from "./components/Titles";
import Form from "./components/Form";
import  "materialize-css/dist/css/materialize.min.css";
import Weather from "./components/Weather";
const API_KEY   =  "47577f63352d31521b1bf2b637dbffd4";
export default class App extends Component {
    state = {
        id : undefined,
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description: undefined,
        error : undefined
        
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=matric`);
        const data = await api_call.json();

        if (city && country) {
            console.log(data);
        this.setState({
            temperature : data.main.temp,
            id : data.id,
            city : data.name,
            country : data.sys.country,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            error : ""
        })
        }else {
        
        this.setState({
            temperature : undefined,
            city : undefined,
            id : undefined,
            country : undefined,
            humidity : undefined,
            description : undefined,
            error : "pleace enter your City & Country.!"
        })
        }
    }
    render() {
        return (    
            <div className="row col s12 m6 center">
                    <Titles  />
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                        temperature={this.state.temperature}
                        id={this.state.id}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                         />
            </div>
        )
    }
}
