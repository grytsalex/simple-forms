import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

export const MyForm = () => {
    const { register, handleSubmit, errors } = useForm();

   const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" name="email" ref={register({ required: true })}/>
            <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: "PASSWORD REQUIRED", minLength: {value: 8, message: "TOO SHORT"} })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" name="submit" />
        </form>
       )
}

export const MyFormWithWatch = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const likeAnimals = watch("likeAnimals")

    const onSubmitLikeAnimals = (data) => alert(JSON.stringify(data))

    return (
        <form onSubmit={handleSubmit(onSubmitLikeAnimals)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text"  name="name" id="name" ref={register ({ required: true })}/>
                {errors.name && <p>Fill this field!</p>}
            </div>
            <div>
                <label htmlFor="likeAnimals">Likes Animals: </label>
                <input type="checkbox" name="likeAnimals" id="likeAnimals" ref={register}/>
            </div>
            {
                likeAnimals && (
                    <div>
                        <label htmlFor="favouriteAnimals">Favourity Animals: </label>
                        <select id="favouriteAnimals" name="favouriteAnimals" ref={register}>
                            <option value="dog">Собака</option>
                            <option value="cat">Кот</option>
                            <option value="mercedes">Мерседес</option>
                            <option value="beaver">Бобер</option>
                        </select>
                    </div>
                )
            }
            <button>Submit</button>
        </form>
    )
}


export const FormWithTrigger = () => {
    const { register, errors, trigger, handleSubmit  } = useForm();

    const onKeyPress = useCallback(
        event => {
            if (event?.key === 'Enter') {
                event.preventDefault();
                trigger();
            }
        },
        [trigger],
    );


    return(
     <form className="trigger-form" onSubmit={handleSubmit(onKeyPress)}>
         <h4>Trigger</h4>
         <div className="fields">
             <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                ref={register({ required: true, minLength: 5})}
            />
             {errors.email && <p>Email is required!</p>}
         </div>
         <div className="fields">
             <label htmlFor="password">Password: </label>
             <input
                 type="password"
                 id="password"
                 name="password"
                 ref={register({ required: true, minLength: 5 })}
             />
             {errors.password && <p>Password is required!</p>}
         </div>
         <div className="fields">
             <label htmlFor="retypePassword">Retype password</label>
             <input
                 type="password"
                 id="retypePassword"
                 name="retypePassword"
                 ref={register({ required: true, minLength: 5 })}
             />
             {errors.retypePassword && <p>Retype password is required!</p>}
         </div>
         <div className="fields">
             <label htmlFor="phone">Phone</label>
             <input
                 type="tel"
                 id="phone"
                 name="phone"
                 onKeyPress={onKeyPress}
             />
         </div>
         <div className="buttons">
            <button
                type="button"
                onClick={async () => {
                    const result = await trigger(["password", "retypePassword"]);
                    if (result) {
                    console.log("valid input")
                }
            }}>Trigger Result</button>
             <input
                 type="submit"
                 value="Sign Up"
             />
         </div>
     </form>
    )
}