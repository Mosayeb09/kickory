import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectItem, SelectTrigger,SelectValue } from "@/components/ui/select";

import { App_NAME } from "@/lib/constants";
 
const categories = ["men","women","kids","accessories","shoes"]



 export default async function Search () {
    return (
        <div>
            <form action="/search" method="Get" className="flex items-stretch  h-9">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r font-bold rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none "> 
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent position="popper" >
                    <SelectItem value="all" >
                        All
                    </SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>


            </Select>
            <Input className="flex-1 rounded-none dark:border-gray-200 text-black bg-gray-100 text-base font-bold h-full" type="search" name="search" placeholder={`SEARCH  ${App_NAME}`}
           
            
            />
            <button type="submit" className="bg-primary text-primary-foreground   rounded-s-none rounded-e-md h-full px-3 py-2">
                <SearchIcon className="h-6 w-6" />
            </button>

            
            
            
            
            
            </form>
        </div>
    );
};


 

// 'use client'; // If using Next.js client components

// import React from 'react';
// import { SearchIcon } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { App_NAME } from "@/lib/constants";

// const categories = ["men", "women", "kids", "accessories", "shoes"];

// function Search() {
//   return (
//     <div>
//       <form action="/search" method="GET" className="flex items-stretch h-10">
//         <Select name="category">
//           <SelectTrigger className="w-auto dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded">
//             <SelectValue placeholder="All" />
//           </SelectTrigger>
//           <SelectContent position="popper">
//             <SelectItem value="all">All</SelectItem>
//             {categories.map((category) => (
//               <SelectItem key={category} value={category}>
//                 {category}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         <Input
//           className="flex-1 rounded-none dark:border-gray-200 text-black bg-gray-100 text-base h-full"
//           type="search"
//           name="search"
//           placeholder={`Search ${App_NAME}`}
//         />

//         <button
//           type="submit"
//           className="bg-primary text-primary-foreground rounded-s-none rounded-e-md h-full px-3 py-2"
//         >
//           <SearchIcon className="h-6 w-6" />
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Search;
