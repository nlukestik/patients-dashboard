import { FormModesEnum } from '@/types/common';
import * as yup from 'yup';

export const PATIENT_BASE_FORM_NAME = 'patientForm';

export const patientSchema = yup.object().shape({
  [PATIENT_BASE_FORM_NAME]: yup.object().shape({
    id: yup.string().required('ID is required'),
    name: yup.string().required('Name is required'),
    description: yup.string().optional(),
    website: yup.string().optional(),
    avatar: yup.string().optional(),
  }),
});
