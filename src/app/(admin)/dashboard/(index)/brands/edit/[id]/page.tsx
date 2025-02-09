import FormBrand from "@/components/(index)/brands/form-brand";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";
import { TEdit } from "@/types";

export default async function EditPage({ params }: TEdit) {
  // Await the params if it's a Promise
  const resolvedParams = await params;

  // Access the `id` property after resolving
  const brand = await getBrandById(resolvedParams.id);

  if (!brand) {
    redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}