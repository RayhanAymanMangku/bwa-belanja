import FormBrand from "@/components/(index)/brands/form-brand";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";

export default async function BrandPage({ params }: { params: { id: string } }) {
  const brand = await getBrandById(params.id);

  if (!brand) {
    redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}