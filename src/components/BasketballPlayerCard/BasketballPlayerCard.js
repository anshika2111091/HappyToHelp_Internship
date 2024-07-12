import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
    const defaultStats = {
        pointsPerGame: 0,
        assistsPerGame: 0,
        reboundsPerGame: 0
    };

    const finalStats = stats || defaultStats;

    return (
        <div className="player-card">
            <img src={image} alt={`${name}`} className="player-image" />
            <h2 className="player-name">{name}</h2>
            <p className="player-position">{position}</p>
            <div className="player-stats">
                <p>Points per Game: {finalStats.pointsPerGame}</p>
                <p>Assists per Game: {finalStats.assistsPerGame}</p>
                <p>Rebounds per Game: {finalStats.reboundsPerGame}</p>
            </div>
        </div>
    );
};

BasketballPlayerCard.defaultProps = {
    stats: {
        pointsPerGame: 0,
        assistsPerGame: 0,
        reboundsPerGame: 0
    }
};

export default BasketballPlayerCard;
