import { memo, useCallback } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { Patient } from '@/types/patients';
import * as SC from './PatientCard.styles';
import EditIcon from '@/components/icons/EditIcon';
import Avatar from '@/components/Avatar';

type Props = {
  patient: Patient;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  onEditButton: (patient: Patient) => void;
};

const PatientCard = ({ patient, isExpanded, onExpand, onEditButton }: Props) => {
  const { name, createdAt, id: patientId, avatar, description, website } = patient;

  const handleExpandCard = () => onExpand(patientId);

  const lastAppointment = format(new Date(createdAt), 'dd/MM/yyyy');

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleOpenModal = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onEditButton(patient);
    },
    [onEditButton, patient]
  );

  const isValidWebsite = !!website && !website.split(/^https?:\/\//)?.[1]?.includes('//');

  return (
    <>
      <SC.CardWrapper $isExpanded={isExpanded} onClick={handleExpandCard}>
        <SC.MainInfoWrapper>
          <Avatar size={40} src={avatar} />

          <SC.PatientMainInfo>
            <SC.PatientName $isEmpty={!name}>{name || 'Not Assigned'}</SC.PatientName>
            <SC.PatientDetails>Last Appoinment: {lastAppointment}</SC.PatientDetails>
          </SC.PatientMainInfo>
        </SC.MainInfoWrapper>

        <SC.MoreInfoWrapper>
          <b>Patient ID: #{patientId}</b>

          {isValidWebsite && (
            <Link href={website} target='_blank' rel='noopener noreferrer' passHref onClick={stopPropagation}>
              View Profile
            </Link>
          )}
          {!!description && (
            <SC.PatientDetails>
              <b>Notes: </b>
              {description}
            </SC.PatientDetails>
          )}
        </SC.MoreInfoWrapper>

        <SC.ActionsWrapper>
          <SC.ActionButton onClick={handleOpenModal}>
            <EditIcon />
          </SC.ActionButton>
          <SC.ActionButton>
            <ArrowIcon id='expand-icon' />
          </SC.ActionButton>
        </SC.ActionsWrapper>
      </SC.CardWrapper>
    </>
  );
};

export default memo(PatientCard);
