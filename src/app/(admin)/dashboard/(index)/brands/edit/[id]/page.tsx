import FormBrand from "@/components/(index)/brands/form-brand";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";
import { TEdit } from "@/types";

export default async function EditPage({ params }: TEdit) {
  // Await params before accessing its properties
  const resolvedParams = params;

  console.log("Resolved Params:", resolvedParams); // Debugging

  const brand = await getBrandById(resolvedParams.id);

  if (!brand) {
    redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}