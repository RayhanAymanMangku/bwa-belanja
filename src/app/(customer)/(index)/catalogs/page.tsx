import FilterBrands from '@/components/(index)/catalogs/filter-brands'
import FilterCategories from '@/components/(index)/catalogs/filter-categories'
import FilterLocation from '@/components/(index)/catalogs/filter-location'
import FilterPrice from '@/components/(index)/catalogs/filter-price'
import FilterStock from '@/components/(index)/catalogs/filter-stock'
import ProductListing from '@/components/(index)/catalogs/product-listing'
import SearchBar from '@/components/(index)/catalogs/search-bar'
import Navbar from '@/components/navbar'
import React from 'react'

export default function CatalogPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
        <Navbar />
      </header>
      <SearchBar />
      <div id="catalog" className="container max-w-[1130px] mx-auto flex gap-[30px] mt-[50px] pb-[100px]">
        <form action="" className="flex flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-2xl leading-[34px]">Filters</h2>
          <FilterPrice />
          <hr className="border-[#E5E5E5]" />
          <FilterStock />
          <hr className="border-[#E5E5E5]" />
          <FilterBrands />
          <hr className="border-[#E5E5E5]" />
          <FilterLocation />
          <hr className="border-[#E5E5E5]" />
          <FilterCategories />
        </form>
        <div className="w-[780px] flex flex-col bg-white p-[30px] gap-[30px] h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-2xl leading-[34px]">Products</h2>
          <ProductListing />
        </div>
      </div>
    </>
  )
}
