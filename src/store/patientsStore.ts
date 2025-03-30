import { Patient, Patients } from '@/types/patients';
import { create } from 'zustand';

type PatientsStore = {
  patients: Patients;
  setPatients: (patients?: Patients) => void;
  addPatient: (patient: Patient) => void;
  editPatient: (id: string, updatedData: Partial<Patient>) => void;
  exists: (id: string) => boolean;
  filters: Record<string, string>;
  setFilters: (filters: Record<string, string>) => void;
};

export const usePatientsStore = create<PatientsStore>((set, get) => ({
  patients: [],
  setPatients: patients => set({ patients }),
  addPatient: patient => set(state => ({ patients: [patient, ...state.patients] })),
  editPatient: (id, updatedData) =>
    set(state => ({
      patients: state.patients.map(patient => (patient.id === id ? { ...patient, ...updatedData } : patient)),
    })),
  exists: id => get().patients.some(patient => patient.id === id),
  filters: {},
  setFilters: filters => set({ filters }),
}));
