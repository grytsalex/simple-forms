import React from 'react'

export const Task = () => {
    return(
        <div className="container">
            <form className="google" autocomplete="off">
                <div className="input-email">
                    <label htmlFor="email" >Email: </label>
                    <input type="email" name="email" autocomplete="off"/>
                </div>
                <div className="input-password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" autocomplete="off"/>
                </div>
                <div className="button-submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}