import { apartments } from '../data/apartments';

interface ApartmentDetailProps {
  apartmentId: string;
}

const features = [
  'Modern kitchen with stainless steel appliances',
  'In-unit washer and dryer',
  'Floor-to-ceiling windows',
  'Walk-in closets',
  'Hardwood flooring',
  'Central air conditioning',
];


// Uses the apartmentId prop to find the corresponding apartment object from the global apartments data.

const ApartmentDetail = ({ apartmentId }: ApartmentDetailProps) => {
  const apt = apartments.find(a => a.id === apartmentId);
  if (!apt) return <div>Apartment not found.</div>;



  return (
  
<div className="w-full">
  <div className="grid grid-cols-4 grid-rows-2 gap-4 rounded-2xl overflow-hidden">
    
    {/* Main large image - spans 2 columns and 2 rows */}
    <div className="col-span-2 row-span-2 relative">
      <img 
        src={apt.image} 
        alt={apt.name} 
        className="object-cover w-full h-full  rounded-tl-2xl rounded-tl-2xl" 
      />
    </div>

    {apt.images.map((image) => (             
      <div className="relative">
        <img 
          src={image} 
          alt={apt.name} 
          className="object-cover w-full h-full rounded-2xl" 
        />
      </div>
    ))}

  </div>

  <div className="w-full max-w-2xl my-10">
          <h2 className="text-3xl font-extrabold mb-4 text-emerald-700 tracking-tight drop-shadow">{apt.name}</h2>
          <div className="mb-2 text-lg"><span className="font-semibold text-emerald-700">Type:</span> {apt.type}</div>
          <div className="mb-2 text-lg"><span className="font-semibold text-emerald-700">Area:</span> {apt.area}</div>
          <div className="mb-2 text-lg"><span className="font-semibold text-emerald-700">Bedrooms:</span> {apt.bedrooms}</div>
          <div className="mb-2 text-lg"><span className="font-semibold text-emerald-700">Bathrooms:</span> {apt.bathrooms}</div>
    </div>


     <div className="w-full mb-10 max-w-2xl rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-emerald-700">Description</h3>
          <p className="text-slate-700 text-lg mb-4">
            This beautiful {apt.type} unit features {apt.bedrooms} bedrooms and {apt.bathrooms} bathrooms with a total area of {apt.area}. The apartment offers modern finishes, an open floor plan, and stunning views. Perfect for individuals, couples, or families looking for comfort and style.
          </p>
          <h4 className="text-xl font-bold mb-2 text-emerald-700">Features</h4>
          <ul className="list-disc pl-6 text-slate-700 text-base space-y-1">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

</div>
  );
};

export default ApartmentDetail; 