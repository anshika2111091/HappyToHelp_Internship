import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard/BasketballPlayerCard';
import { faker } from '@faker-js/faker';
import "./App.css";

function App() {
    const generateRandomPlayer = () => ({
        name: faker.name.fullName(),
        image: faker.image.avatar(),
        position: faker.helpers.arrayElement(['Guard', 'Forward', 'Center']),
        stats: {
            pointsPerGame: faker.datatype.float({ min: 0, max: 30, precision: 0.1 }),
            assistsPerGame: faker.datatype.float({ min: 0, max: 10, precision: 0.1 }),
            reboundsPerGame: faker.datatype.float({ min: 0, max: 15, precision: 0.1 })
        }
    });

    const players = Array.from({ length: 50 }, generateRandomPlayer);

    return (
        <div className="App">
            {players.map((player, index) => (
                <BasketballPlayerCard 
                    key={index}
                    name={player.name} 
                    image={player.image} 
                    position={player.position} 
                    stats={player.stats} 
                />
            ))}
        </div>
    );
}

export default App;
