import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BaseModal from '@/components/BaseModal';
import { PATIENT_BASE_FORM_NAME, patientSchema } from '@/validationSchemas/patients';
import { Patient } from '@/types/patients';
import Input from '@/components/Input';
import TextAreaInput from '@/components/TextAreaInput';
import * as SC from './PatientFormModal.styles';
import { useCallback } from 'react';
import { usePatientsStore } from '@/store/patientsStore';
import { FormModesEnum, ToastTypesEnum } from '@/types/common';
import Avatar from '@/components/Avatar';

type Props = {
  isOpen: boolean;
  onClose: (mode?: FormModesEnum, notifType?: ToastTypesEnum) => void;
  patientData?: Patient;
};

const PatientFormModal = ({ isOpen, onClose, patientData }: Props) => {
  const { exists, addPatient, editPatient } = usePatientsStore();
  const formMode = !patientData ? FormModesEnum.ADD : FormModesEnum.EDIT;

  const form = useForm({
    resolver: yupResolver(patientSchema),
    mode: 'onChange',
    defaultValues: {
      [PATIENT_BASE_FORM_NAME]: patientData,
    },
  });

  const title = `${!patientData ? 'Add' : 'Edit'} Patient`;

  const { watch, trigger, reset, formState, setError } = form;
  const formValues = watch(PATIENT_BASE_FORM_NAME) as Patient;
  const { isValid, isDirty } = formState;
  const isAcceptDisabled = !isDirty;

  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const handleConfirm = useCallback(() => {
    // This if statement is just to try out error notifications
    if (formValues.id === '9999') {
      onClose(formMode, ToastTypesEnum.ERROR);
      reset();
      return;
    }

    if (!isValid) {
      trigger(PATIENT_BASE_FORM_NAME);
      return;
    }

    const isExistingId = exists(formValues.id) && formValues.id !== patientData?.id;

    if (isExistingId) {
      setError(
        `${PATIENT_BASE_FORM_NAME}.id`,
        { type: 'custom', message: 'Patient ID already exists' },
        { shouldFocus: true }
      );
      return;
    }

    if (formMode === FormModesEnum.ADD) {
      addPatient({ ...formValues, createdAt: new Date().toISOString() });
      reset();
    } else {
      editPatient(patientData?.id as string, formValues);
      reset({ [PATIENT_BASE_FORM_NAME]: formValues });
    }

    onClose(formMode, ToastTypesEnum.SUCCESS);
  }, [
    formValues,
    isValid,
    exists,
    patientData?.id,
    formMode,
    onClose,
    reset,
    trigger,
    setError,
    addPatient,
    editPatient,
  ]);

  return (
    <FormProvider {...form}>
      <BaseModal
        isOpen={isOpen}
        onClose={handleClose}
        onAccept={handleConfirm}
        isAcceptDisabled={isAcceptDisabled}
        acceptLabel='Confirm'
        title={title}>
        <SC.FieldsWrapper>
          <SC.MainInfoWrapper>
            <Avatar size={160} src={formValues?.avatar} />

            <SC.MainInfo>
              <Input
                type='number'
                label='ID #'
                placeholder='0000'
                name={`${PATIENT_BASE_FORM_NAME}.id`}
                fullWidth={false}
              />
              <Input label='Name' placeholder='Julian Alvarez' name={`${PATIENT_BASE_FORM_NAME}.name`} />
            </SC.MainInfo>
          </SC.MainInfoWrapper>

          <Input label='Profile URL' placeholder='https://...' name={`${PATIENT_BASE_FORM_NAME}.website`} />

          <TextAreaInput
            rows={6}
            label='Notes'
            placeholder='Describe any important information about the patient'
            name={`${PATIENT_BASE_FORM_NAME}.description`}
            disableResize
          />
        </SC.FieldsWrapper>
      </BaseModal>
    </FormProvider>
  );
};

export default PatientFormModal;
