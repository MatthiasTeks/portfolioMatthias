import React from 'react';
import '../style.css';

let Contact = () => {
    return (
    <div className='contact'>
        <h1>Contactez-moi</h1>
        <hr/>
        <div id="formMain">
            <div id="formDiv">
                <form class="form" id="form1">
                    <p class="name">
                        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                    </p>  
                    <p class="email">
                        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                    </p>
                    <p class="text">
                        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
                    </p>
                    <div class="submit">
                        <input type="submit" value="Envoyer" id="button-blue"/>
                        <div class="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Contact