import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {planets.map((element) => (
            <PlanetCard
              planetName={ element.name }
              planetImage={ element.image }
              key={ element.name }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default SolarSystem;
