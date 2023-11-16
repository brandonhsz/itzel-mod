import { create } from "zustand";

export interface UserState {
  user: User;
  setUser: (user: User) => void;
}

export interface User {
  email: string;
  token: string;
  userType: string;
  id: string;
}

export interface PatientState {
  patient: Patient;
  setPatient: (patient: Patient) => void;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  weight: number;
  phone: string;
  doctorId: string;
  userId: string;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    email: "",
    token: "",
    userType: "",
    id: "",
  },
  setUser: (user: User) => set({ user }),
}));

export const usePatientStore = create<PatientState>((set) => ({
  patient: {
    id: "",
    name: "",
    age: 0,
    weight: 0,
    phone: "",
    doctorId: "",
    userId: "",
  },
  setPatient: (patient: Patient) => set({ patient }),
}));
