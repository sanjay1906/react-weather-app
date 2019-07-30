import React from 'react'

const form = props =>(
    <div>
    <form onSubmit={props.getWeather}>
            <div className="row">
                <div className="col s12 m4">
                <input type="text" name="city" placeholder="city"/>
                </div>
                <div className="col s12 m4">
                <input type="text" name="country" placeholder="country"/>
                </div>
                <div className="col s12 m4">
                <button className="btn">Get weather</button>
                </div>
            </div>
            </form>
    </div>
)

export default form;
