import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="mission-container">
          {missions.map((element) => (
            <MissionCard
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
              key={ element.name }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default Missions;
