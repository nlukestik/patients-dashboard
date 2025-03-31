import { Patient, Patients as IPatients } from '@/types/patients';
import * as SC from './Patients.styles';
import { ComponentProps, useCallback, useEffect, useMemo, useState } from 'react';
import PatientCard from './PatientCard';
import AddIcon from '../../icons/AddIcon';
import PatientFormModal from './PatientFormModal';
import { usePatientsStore } from '@/store/patientsStore';
import Filters from '@/components/Filters';
import EmptyState from '@/components/EmptyState';
import { debounce } from '@/utils';
import ToastNotification from '@/components/ToastNotification';
import { useNotification } from '@/hooks/useNotification';
import { FormModesEnum, ToastDurationsEnum, ToastTypesEnum } from '@/types/common';

type Props = {
  patients: IPatients;
};

const searchInputProps = { searchInputProps: { placeholder: 'Search patients by ID, Name or Notes' } };

const notificationMessages = {
  [FormModesEnum.ADD]: {
    [ToastTypesEnum.SUCCESS]: 'Patient added successfully.',
    [ToastTypesEnum.ERROR]: 'Error adding patient.',
  },
  [FormModesEnum.EDIT]: {
    [ToastTypesEnum.SUCCESS]: 'Patient edited successfully.',
    [ToastTypesEnum.ERROR]: 'Error editing patient.',
  },
};

const Patients = ({ patients: patientsData }: Props) => {
  const { patients, setPatients, filters, setFilters } = usePatientsStore();
  const { notification, closeNotification, showNotification } = useNotification();

  const [isPatientModalOpen, setIsPatientModalOpen] = useState<boolean>(false);
  const [patientData, setPatientData] = useState<Patient | undefined>(undefined);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  useEffect(() => {
    setPatients(patientsData);
  }, [setPatients, patientsData]);

  const handleOnExpand = useCallback((id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  }, []);

  const handleOpenModal = useCallback((patient?: Patient) => {
    setIsPatientModalOpen(true);
    setPatientData(patient);
  }, []);

  const handleAddPatient = useCallback(() => {
    handleOpenModal();
    setPatientData(undefined);
  }, [handleOpenModal]);

  const handleOnModalClose: ComponentProps<typeof PatientFormModal>['onClose'] = useCallback(
    (mode, notifType) => {
      setIsPatientModalOpen(false);

      if (!mode || !notifType) return;

      const message = notificationMessages[mode][notifType];
      showNotification(message, notifType, ToastDurationsEnum.MEDIUM);
    },
    [showNotification]
  );

  const filteredPatients = useMemo(() => {
    const { search } = filters || {};
    if (!search) return patients;

    const searchLower = search.toLowerCase();
    return patients.filter(({ id, name, description }) => {
      const searchFields = [id, name, description];
      return searchFields.some(field => field.toLowerCase().includes(searchLower));
    });
  }, [patients, filters]);

  const handleFiltersOnChange = useMemo(() => {
    return debounce((filters: Record<string, string>) => {
      setFilters(filters);
    });
  }, [setFilters]);

  return (
    <SC.Wrapper>
      <SC.HeaderContainer>
        <Filters {...searchInputProps} onChange={handleFiltersOnChange} />

        <SC.AddPatientButton onClick={handleAddPatient}>
          <AddIcon />
          <SC.AddPatientButtonLabel>Add patient</SC.AddPatientButtonLabel>
        </SC.AddPatientButton>
      </SC.HeaderContainer>

      <SC.GridContainer $isEmpty={!filteredPatients.length}>
        {!filteredPatients.length ? (
          <EmptyState message='No patients found' />
        ) : (
          filteredPatients.map((item, index) => {
            const isExpanded = expandedCardId === item.id;

            return (
              <PatientCard
                key={`${index}-${item.id}`}
                isExpanded={isExpanded}
                patient={item}
                onExpand={handleOnExpand}
                onEditButton={handleOpenModal}
              />
            );
          })
        )}
      </SC.GridContainer>

      <PatientFormModal
        key={`patient-${patientData?.id || 'new'}`}
        isOpen={isPatientModalOpen}
        onClose={handleOnModalClose}
        patientData={patientData}
      />

      <ToastNotification notification={notification} closeNotification={closeNotification} />
    </SC.Wrapper>
  );
};

export default Patients;
