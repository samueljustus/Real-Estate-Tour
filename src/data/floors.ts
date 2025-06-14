export interface Floor {
  id: string;
  number: number;
  towerId: string;
  description: string;
}

export const floors: Floor[] = [
  // Tower A: 10 floors
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `A-${i + 1}`,
    number: i + 1,
    towerId: 'A',
    description: `Floor ${i + 1} - Premium apartments with stunning views`
  })),
  // Tower B: 13 floors
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `B-${i + 1}`,
    number: i + 1,
    towerId: 'B',
    description: `Floor ${i + 1} - Modern waterfront apartments`
  })),
  // Tower C: 15 floors
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `C-${i + 1}`,
    number: i + 1,
    towerId: 'C',
    description: `Floor ${i + 1} - Contemporary city skyline views`
  })),
];

export const towerDetails: Record<string, { totalFloors: number; totalUnits: number; yearBuilt: number }> = {
  A: { totalFloors: 10, totalUnits: 30, yearBuilt: 2014 },
  B: { totalFloors: 13, totalUnits: 39, yearBuilt: 2018 },
  C: { totalFloors: 15, totalUnits: 45, yearBuilt: 2020 },
}; 