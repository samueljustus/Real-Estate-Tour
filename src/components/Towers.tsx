import { useState } from 'react';
// import type { Tower } from '../data/towers';
import { towers } from '../data/towers';
import Floors from './Floors';
import Apartments from './Apartments';
import ApartmentDetail from './ApartmentDetail';



const Towers = () => {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<string | null>(null);




  // Back from ApartmentDetail to Apartments
  const handleBackToApartments = () => setSelectedApartment(null);
  // Back from Apartments to Floors
  const handleBackToFloors = () => {
    setSelectedFloor(null);
    setSelectedApartment(null);
  };
  // Back from Floors to Towers
  const handleBackToTowers = () => {
    setSelectedTower(null);
    setSelectedFloor(null);
    setSelectedApartment(null);
  };




  // if an apartment is selected, show the ApartmentDetail view for that apartment.

  if (selectedTower && selectedFloor && selectedApartment) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button onClick={handleBackToApartments} className="mb-4 text-emerald-600 hover:underline font-semibold">&larr; Back to Apartments</button>
        <ApartmentDetail apartmentId={selectedApartment} />
      </div>
    );
  }



  // if a floor is selected, show the Apartments view for that floor.

  if (selectedTower && selectedFloor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button onClick={handleBackToFloors} className="mb-4 text-emerald-600 hover:underline font-semibold">&larr; Back to Floors</button>
        <Apartments floorId={selectedFloor} onSelectApartment={setSelectedApartment} />
      </div>
    );
  }



  // if a tower is selected, show the Floors view for that tower.

  if (selectedTower) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button onClick={handleBackToTowers} className="mb-4 text-emerald-600 hover:underline font-semibold">&larr; Back to Towers</button>
        <Floors towerId={selectedTower} onSelectFloor={setSelectedFloor} />
      </div>
    );
  }




// other wise show the tower selection card


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-emerald-700">Select a Tower</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {towers.map((tower) => (
          <div
            key={tower.id}
            onClick={() => setSelectedTower(tower.id)}
            className={`p-8 rounded-2xl shadow-lg border border-sky-100 cursor-pointer transition-all duration-300 bg-white hover:shadow-xl hover:-translate-y-1
              ${selectedTower === tower.id 
                ? 'bg-emerald-600 text-white scale-105 ring-2 ring-emerald-400' 
                : 'text-slate-900 hover:bg-sky-50'
              }`}
          >
            <h3 className="text-xl font-bold mb-2 tracking-tight">{tower.name}</h3>
            <p className="text-sm opacity-80">{tower.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Towers; 