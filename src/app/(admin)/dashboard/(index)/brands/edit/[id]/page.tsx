import FormBrand from "@/components/(index)/brands/form-brand";
import { TEdit } from "@/types";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";

export default async function BrandPage({ params }: TEdit) {
  const brand = await getBrandById(params.id);

  console.log(brand);

  if (!brand) {
    return redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}