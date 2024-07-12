# Basketball Player Card Component

This project includes a React component named `BasketballPlayerCard` which displays information about a basketball player, including their image, name, position, and stats.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository_url>
    ```
2. Navigate to the project directory:
    ```bash
    cd basketball-player-card
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the `BasketballPlayerCard` component in action.

## Example Usage

Here is an example of how to use the `BasketballPlayerCard` component in your React project:

```jsx
import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
    const player = {
        name: "LeBron James",
        image: "https://example.com/lebron.jpg",
        position: "Forward",
        stats: {
            pointsPerGame: 25.4,
            assistsPerGame: 7.1,
            reboundsPerGame: 10.5
        }
    };

    return (
        <div className="App">
            <BasketballPlayerCard 
                name={player.name} 
                image={player.image} 
                position={player.position} 
                stats={player.stats} 
            />
        </div>
    );
}

export default App;
