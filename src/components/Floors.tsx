import { useState } from 'react';
import { floors, towerDetails } from '../data/floors';
import Apartments from './Apartments';

interface FloorsProps {
  towerId: string;
  onSelectFloor?: (floorId: string) => void;
}



const Floors = ({ towerId, onSelectFloor }: FloorsProps) => {
 
  const [selectedFloor, setSelectedFloor] = onSelectFloor ? [null, () => {}] : useState<string | null>(null);
  

//   Here we Uses the towerId prop to filter the global floors data and get only the floors for the selected tower.

  const towerFloors = floors.filter(floor => floor.towerId === towerId).reverse();
  const details = towerDetails[towerId];

  const handleFloorClick = (floorId: string) => {
    if (onSelectFloor) {
      onSelectFloor(floorId);
    } else {
      setSelectedFloor(floorId);
    }
  };


  // if a floor is selected, show the Apartments view for that floor.

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-emerald-700">Select a Floor</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 mb-10">
        {towerFloors.map((floor) => (
          <div
            key={floor.id}
            onClick={() => handleFloorClick(floor.id)}
            className={`aspect-square flex items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-lg cursor-pointer transition-all duration-300 text-2xl font-bold
              ${selectedFloor === floor.id 
                ? 'bg-emerald-600 text-white scale-105 ring-2 ring-emerald-400' 
                : 'text-slate-900 hover:bg-sky-50 hover:scale-105'
              }`}
          >
            {floor.number}
          </div>
        ))}
      </div>


      {/* Tower Details Section */}

      <div className="bg-white rounded-2xl shadow p-6 mx-auto border border-sky-100">
        <h3 className="text-xl font-bold mb-4 text-emerald-700">Tower Details</h3>
        <div className="space-y-4">
          <div className="bg-sky-50 rounded-lg p-4">
            <div className="text-emerald-600 text-sm">Total Floors</div>
            <div className="text-2xl font-bold text-slate-900">{details.totalFloors}</div>
          </div>
          <div className="bg-sky-50 rounded-lg p-4">
            <div className="text-emerald-600 text-sm">Total Units</div>
            <div className="text-2xl font-bold text-slate-900">{details.totalUnits}</div>
          </div>
          <div className="bg-sky-50 rounded-lg p-4">
            <div className="text-emerald-600 text-sm">Year Built</div>
            <div className="text-2xl font-bold text-slate-900">{details.yearBuilt}</div>
          </div>
        </div>
      </div>

      {/* Only show Apartments if using local state (backward compatibility) */}
      {!onSelectFloor && selectedFloor && <Apartments floorId={selectedFloor} />}
    </div>
  );
};

export default Floors; 