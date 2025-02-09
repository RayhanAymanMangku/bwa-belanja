import { redirect } from 'next/navigation';
import React from 'react'
import { getCategoryById } from '../../lib/data';
import FormCategory from '@/components/(index)/category/form-category';

type Tparams = {
  id: string;
}

interface EditPageProps {
  params: Tparams;
}
export default async function EditPage({ params }: EditPageProps) {
  const data = await getCategoryById(params.id);

  if (!data) {
    return redirect('/dashboard/categories');
  }

  console.log(data);

  return (
    <FormCategory type='EDIT' data={data} />
  );
}