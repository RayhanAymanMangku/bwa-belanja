import { redirect } from 'next/navigation';
import React from 'react'
import { getCategoryById } from '../../lib/data';
import FormCategory from '@/components/(index)/locations/form-category';
import { TEdit } from '@/types';


export default async function EditPage({ params }: TEdit) {
  const data = await getCategoryById(params.id);

  if (!data) {
    return redirect('/dashboard/locations');
  }

  console.log(data);

  return (
    <FormCategory type='EDIT' data={data} />
  );
}