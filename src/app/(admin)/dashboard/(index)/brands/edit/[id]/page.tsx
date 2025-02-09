import FormBrand from "@/components/(index)/brands/form-brand";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";
import { resolveParams } from "@/lib/resolveParams";
import { TEdit } from "@/types";

export default async function EditPage({ params }: TEdit) {
  const resolvedParams = await resolveParams(params);

  console.log("Resolved Params:", resolvedParams); // Debugging

  const brand = await getBrandById(resolvedParams.id);

  if (!brand) {
    redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}