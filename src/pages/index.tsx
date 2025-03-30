import Layout from '@/components/Layout';
import Patients from '@/components/Pages/Patients';
import { getPatients, GET_PATIENTS } from '@/hooks/api/useGetPatients';
import { QueryClient } from '@tanstack/react-query';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ComponentProps } from 'react';

export const getStaticProps: GetStaticProps<ComponentProps<typeof Patients>> = async () => {
  const queryClient = new QueryClient();

  const patients = await queryClient.fetchQuery([GET_PATIENTS], () => getPatients());

  return {
    props: {
      patients,
    },
  };
};

export default function Home({ patients }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Patients'>
      <Patients patients={patients} />
    </Layout>
  );
}
