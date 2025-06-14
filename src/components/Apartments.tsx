import { apartments } from '../data/apartments';

interface ApartmentsProps {
  floorId: string;
  onSelectApartment?: (apartmentId: string) => void;
}

const Apartments = ({ floorId, onSelectApartment }: ApartmentsProps) => {
  const floorApartments = apartments.filter(a => a.floorId === floorId); // to know which is clicked

  return (
    <div className="bg-white rounded-2xl shadow p-8 mx-auto mt-8 border border-sky-100">
      <h3 className="text-2xl font-bold mb-6 text-emerald-700">Available Apartments</h3>
      <div className=" gap-8 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-8">
        {floorApartments.map((apt) => (
          <div
            key={apt.id}
            className="group mt-8 md:mt-0 bg-sky-50 rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch flex-1 cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:bg-sky-100 border border-sky-100"
            onClick={() => onSelectApartment && onSelectApartment(apt.id)}
            tabIndex={0}
          >
            <div className="flex-1 flex items-center justify-center bg-sky-100 transition-colors duration-200 group-hover:bg-sky-200 group-focus-within:bg-sky-200">
              <img
                src={apt.image}
                alt={apt.name}
                className="object-contain w-full h-48 transition-transform duration-200 group-hover:scale-105 group-focus-within:scale-105"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <div className="text-xl font-bold mb-2 text-emerald-700">{apt.name}</div>
              <div className="text-slate-700 mb-1"><span className="font-semibold">Type:</span> {apt.type}</div>
              <div className="text-slate-700 mb-1"><span className="font-semibold">Area:</span> {apt.area}</div>
              <div className="text-slate-700 mb-1"><span className="font-semibold">Bedrooms:</span> {apt.bedrooms}</div>
              <div className="text-slate-700"><span className="font-semibold">Bathrooms:</span> {apt.bathrooms}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments; 