import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayerCard = (props) => {
    const  player  = props.player;

    return(
        <div className="card-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCtc-GeYMpP-Frm5gXXkPd_lTwlK3w2kF6w&usqp=CAU" alt="" />
            <div className="desc">
           
                <h2>
                    <Link to={`/show-player/${player._id}`}>
                        { player.name }
                    </Link>
                </h2>
                <h3>{player.age}</h3>
                <p>{player.description}</p>
            </div>
        </div>
    )
};

export default PlayerCard;