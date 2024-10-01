"use client";

import BreadCrum from "@/components/BreadCrum";
import FilterBar from "@/components/FilterBar";
import Pagination from "@/components/Pagination";
import ProductsCard from "@/components/ProductsCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [product, setProduct] = useState([]);
  const [getCategoryValue, setGetCategoryValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://97.74.89.204:4000/product/allProducts?pageNo=1&pageSize=100"
        );
        setProduct(data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

 const filterProducts = getCategoryValue
 ? product.filter((item) => item.Category.id == getCategoryValue)
 : product; 


  return (
    <>
      <section class="flex md:flex-row flex-col my-6 w-[95vw] mx-auto">
        {/* <!-- Sidebar --> */}

        <FilterBar setGetCategoryValue={setGetCategoryValue} />

        <main class="w-full md:w-[75%] h-full mt-2 md:mt-0">
          <div class="flex justify-between items-center mb-3 px-3 h-[45px]">
            <div class="flex gap-2 items-center">
              <p class="text-[#808080] text-[14px] hidden md:block">
                Sort By :
              </p>
              <select class="px-[17px] text-[14px] rounded  border border-gray-400 bg-transparent h-[41px] w-[170px] outline-none pl-1">
                <option>Latest</option>
                <option>Featured</option>
                <option>Price low to high</option>
                <option>Price hogh to low</option>
              </select>
            </div>

            <div class="flex gap-2">
              <p class="font-bold text-sm md:text-base">
                   {filterProducts.length}
              </p>
              <p class="text-gray-500 text-sm md:text-base">Results Found</p>
            </div>
          </div>

          {/* <!-- Products --> */}

          <section class=" flex justify-center items-center gap-2 sm:gap-3 flex-wrap md:ml-7 mt-5 ">
            {/* <!-- Cards --> */}

            {filterProducts && filterProducts.map((item) => [
              <ProductsCard key={item.id} product={item} />,
            ])}
          </section>
        </main>
      </section>

      <div className="flex justify-center items-center my-10">
        <Pagination
          totalPages={21}
          currentPage={3}
          onPageChange={(page) => console.log("Go to page", page)}
        />
      </div>
    </>
  );
}



