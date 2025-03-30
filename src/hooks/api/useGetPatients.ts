import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { api } from '@/utils/api';
import { Patients } from '@/types/patients';
import endpoints from '@/constants/endpoints';

export const GET_PATIENTS = 'GET_PATIENTS';

export const getPatients = async () => {
  return api({
    url: endpoints.patients,
    label: 'Get Patients',
  });
};

const useGetPatients = <T = Patients>(opts?: UseQueryOptions<Patients, AxiosError, T, [typeof GET_PATIENTS]>) => {
  return useQuery([GET_PATIENTS], () => getPatients(), opts);
};

export default useGetPatients;
