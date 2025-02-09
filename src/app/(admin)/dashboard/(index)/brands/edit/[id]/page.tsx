import FormBrand from "@/components/(index)/brands/form-brand";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";

interface BrandPageProps {
  params: {
    id: string;
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const brand = await getBrandById(params.id);

  if (!brand) {
    return redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}