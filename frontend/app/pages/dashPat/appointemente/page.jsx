// "use client";
// import { useForm } from "react-hook-form";
// import { Calendar  } from "@/components/ui/calendar";

// import { IoCheckmarkCircleOutline } from "react-icons/io5";

// import {  useState } from "react";
// import Image from 'next/image';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// // import { useParams } from "next/navigation";
// import Link from "next/link";
// // import "@/styles/calendar.css"; // Optional for custom styles

export default function Page() {
//   const [success ,setSucce ] = useState(false)
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [Open , SetOpen]  = useState(false)
//   const [docDetails, setDocDetails] = useState({
//     createdAt: "2024-12-29T17:56:11.086Z",
//     id : 2  , 
//     DoctorName: "Kayla Kuhlman",
//     image: "https://loremflickr.com/640/480/people",
//     speciality: "speciality 1",
//     date: 1735504479,
//     rate: 22,
//     availableDates: [
//       "2024-01-01", "2024-01-05", "2024-01-10", "2024-01-15", "2024-01-20",
//       "2024-01-25", "2024-01-30", "2024-02-03", "2024-02-07", "2024-02-12",
//       "2024-02-17", "2024-02-22", "2024-02-27", "2024-03-05", "2024-03-10",
//       "2024-03-15", "2024-03-20", "2024-03-25"
//     ],
//     occupiedDates: [
//       "2024-01-03", "2024-01-07", "2024-01-12", "2024-01-18", "2024-01-22",
//       "2024-01-28", "2024-02-01", "2024-02-06", "2024-02-10", "2024-02-15",
//       "2024-02-20", "2024-02-25", "2024-03-02", "2024-03-08", "2024-03-12",
//       "2024-03-18", "2024-03-22", "2024-03-28"
//     ]   ,
//     comment: [],
//     location: "Moline",
//     certificate: "https://loremflickr.com/640/480/technics",
//     location_cordonates: ["-88.3645", "-144.8659"],
//     expyear: 69,
//     adressImage: "https://loremflickr.com/640/480/city",
//     id: "1",
//   });

//   const [selectedDate, setSelectedDate] = useState("");

//   const [selectedType, setSelectedType] = useState("");

//   // const availableDates = [
//   //   "2024-01-01",
//   //   "2024-01-05",
//   //   "2024-01-10",
//   //   "2024-01-15",
//   // ];
//   // // const occupiedDates = ["2024-01-03", "2024-01-07"];


//   // const isAvailable = (date: Date) =>
//   //   availableDates.includes(date.toISOString().split("T")[0]);
//   // const isOccupied = (date: Date) =>
//   //   occupiedDates.includes(date.toISOString().split("T")[0]);


//   const {
//     register,
//     handleSubmit,
//     setValue   , 
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {

//     console.log(data)
//     const obj = {
//       name: data.name,
//       lastname: data.fam,
//     };
//     console.log(obj);
//     setSucce(true)
//     // router.push("sucess")
   

//   //   try {
//   //     const response = await fetch("http://127.0.0.1:8000/api/login/", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //  //       Authorization: `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify(obj),
//   //     });

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       console.error(errorData.message);
    
//   //       return;
//   //     }

     

//   //     // Swal.fire({
//   //     //   title: "Login Successful",
//   //     //   icon: "success",
//   //     //   toast: true,
//   //     //   timer: 4000,
//   //     //   position: "top-right",
//   //     //   timerProgressBar: false,
//   //     //   showConfirmButton: false,
//   //     //   showCancelButton: true,
//   //     // });
 

//   //     console.log("Logged in successfully");
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   };

//   const handleSelect = (date) => {
//     const formattedDate = date.toISOString().split("T")[0]; // Format the date
//     setSelectedDate(formattedDate); // Update the selected date state
//     setValue("date", formattedDate); // Set the date in the form
//     console.log("Selected date:", formattedDate);
//   };


// const timeArray = [
//     "1h -- 2h",
//     "2h -- 3h",
//     "3h -- 4h",
//     "4h -- 5h",
//     "5h -- 6h",
//     "6h -- 7h",
//     "7h -- 8h",
//     "8h -- 9h",
//     "9h -- 10h",
//     "10h -- 11h",
//     "11h -- 12h",
//     "12h -- 13h"
//   ];
// const typearray = [
//   "persential"  , 
//   "online"
// ]




// const occupiedDates = [
//   new Date(2025, 0, 28), // January 28, 2025
//   new Date(2025, 0, 29), // January 29, 2025
// ];

// // Helper to check if a date is occupied
// const isOccupied = (date  ) =>
//   occupiedDates.some(
//     (occupied) =>
//       date.getFullYear() === occupied.getFullYear() &&
//       date.getMonth() === occupied.getMonth() &&
//       date.getDate() === occupied.getDate()
//   );



  

// const handleSelectTime = (value) => {
//   setSelectedTime(value);
//   setValue("time", value);

// };

// const handleSelectType = (value) => {
//   setSelectedType(value);
//   setValue("type", value);

// };



  return (
    <></>
//     <div className='flex flex-col items-center justify-center  w-full xl:flex-row'>
//       {docDetails && !success && (
//         <>
//           {/* Details */}
//           <div className='flex flex-col gap-8 items-center border  w-full justify-center p-4'>
//            <div className="flex flex-row items-start      justify-center gap-4 ">
//               <Image src={docDetails.image} alt="doctor" className="rounded-full" width={200} height={200} />
//   <div className="flex flex-col ">

//               <div className='flex p-2 mt-4 flex-col bg-white rounded-3xl'>
//               <h1 className='text-primary text-2xl text-center font-semibold'>Mr: {docDetails.DoctorName} Ph.D</h1>
//               <h1 className='text-gray-600 text-xl text-center'>{docDetails.speciality}</h1>
//             </div>
//            <Link href={`${docDetails.id}`} className=' flex   items-center justify-center mt-2   p-2 bg-primary max-w-72   rounded-3xl'>
//                   <h1 className='text-white text-md text-lg text-center'>View Profile</h1>
//                 </Link>
//   </div>


              
//            </div>
        



// <div className="flex flex-row items-center gap-x-10 justify-center">


//         <form
//             onSubmit={handleSubmit(onSubmit)}
//           className="  px-1  my-2 gap-4 items-center flex flex-col"
//         >
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-primary font-semibold text-xl">Name</label>
//             <input
//             id="name"
//               type="text"
//               placeholder="Enter your name"
//               {...register("name", {
//                 required: "name is required",
          
//               })}

//               className={`placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm  hover:border-1  hover:border-primary
//                w-[450px] md:w-[540px]  p-3 border  transition-all shadow-sm outline-none  ${errors.name ? "border-red-400" : ""}`}
//             />
//             {errors.name && (
//               <p className="text-red-400 mt-1 ml-4 text-sm">
//                 {errors.name?.message}
//               </p>
//             )}
//           </div>
      


//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-primary font-semibold text-xl">Family name </label>
//             <input
//               type="text"
//               onClick={()=>{SetOpen(true)}}
//               placeholder="fami"
//               {...register("fami", {
//                 required: "familly name  is required",
     
//               })}
//               className={`placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm  hover:border-1  hover:border-primary
//                 w-[450px] md:w-[540px]  p-3 border  transition-all shadow-sm outline-none  ${errors.fami ? "border-red-400" : ""}`}
//             />
//             {errors.fami && (
//               <p className="text-red-400 mt-1 ml-4 text-sm">
//                 {errors.fami?.message}
//               </p>
//             )}
//           </div>
    

//           <div className="flex flex-col" onClick={()=>SetOpen(true)}>
//             <label htmlFor="date" className="text-primary font-semibold text-xl">date</label>
//             <input
//             id="date"
//               type="date"
//              // Link the input value with the state
//               {...register("date", {
//                 required: "date is required",
//               })}
//               placeholder="Select a date"
  
              
//               className={`placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm  hover:border-1  hover:border-primary
//                 w-[450px] md:w-[540px]  p-3 border  transition-all shadow-sm outline-none  ${errors.date ? "border-red-400" : ""}`}


//             />
//             {errors.date && (
//               <p className="text-red-400 mt-1 ml-4 text-sm">
//                 {errors.date?.message}
//               </p>
//             )}
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="time" className="text-primary font-semibold text-xl">Timing</label>
//             <Select onValueChange={handleSelectTime} >
//               <SelectTrigger
//                 {...register("time")}
//                 className=" w-[450px] md:w-[540px]  bg-white  hover:border-primary hover:shadow-lg text-sm p-4 py-6 shadow-sm outline-none  duration-200"
//               >
//                 <SelectValue placeholder="Select a Time" />
//               </SelectTrigger>
//               <SelectContent
//                 position="bottom"
//                 className="bg-blue-300 rounded-xl"
//               >
//                 {timeArray.map((el, index) => (
//                   <SelectItem
//                     key={index}
//                     value={el}
//                     className="  font-semibold text-mainfont text-white"
//                   >
//                     {el}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {errors.time && (
//               <p className="text-red-400 mt-1 ml-4 text-sm">
//                 {errors.time?.message}
//               </p>
//             )}
//           </div>      
   


//           <div className="flex flex-col">
//           <label htmlFor="type" className="text-primary font-semibold text-xl">Type</label>
//           <Select onValueChange={handleSelectType} >
//               <SelectTrigger

//                 {...register("type",
//                   {  
//                  required: "type is required",
           
//                })}
//                 className=" w-[450px] md:w-[540px]  bg-white  hover:border-primary hover:shadow-lg text-sm p-4 py-6 shadow-sm outline-none  duration-200"
//               >
//                 <SelectValue placeholder="Select a type " />
//               </SelectTrigger>
//               <SelectContent
//                 position="bottom"
//                 className="bg-blue-300 rounded-xl"
//               >
//                 {typearray.map((el, index) => (
//                   <SelectItem
//                     key={index}
//                     value={el}
//                     className="  font-semibold text-mainfont text-white"
//                   >
//                     {el}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {errors.type && (
//               <p className="text-red-400 mt-1 ml-4 text-sm">
//                 {errors.time?.message}
//               </p>
//             )}
//           </div>      




     

   





      


//           <button
//             type="submit"
//             className="py-3 px-7  w-[450px] md:w-[540px] text-sm  font-medium  bg-primary text-white hover:shadow-xl   hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
//           >
//          Submit 
//           </button>
//         </form> 
//         {Open &&
        
//         <Calendar   
// selected={selectedDate }
//    onSelect={setSelectedDate} // Pass the handleSelect function to the calendar
//   className="bg-white border border-black flex p-2 items-center justify-center transition-all  w-[300px] h-[300px] rounded-xl" 
//   dayClassName={(date) =>
//     isOccupied(date)
//       ? "rounded-full bg-red-500 text-white"
//       : "rounded-full hover:bg-blue-400"
//   }
//   dayStyle={(date) =>
//     isOccupied(date)
//       ? { backgroundColor: "#ef4444", color: "white" }
//       : { backgroundColor: "#0000", color: "black" }
//   }
  

//   />  
  
//         }
        
// </div>



   



   
//           </div>

    
        


//         </>
//       )}
// {success &&  (
//   <div className="flex items-center flex-col  justify-center">
//     <IoCheckmarkCircleOutline color={"#0C72E1"} size={700} />
    
//     <Link href="" className="bg-primary py-3 text-xl  font-semibold text-white hover:scale-105 transition-all px-8 rounded-md">
//     View Appointement
//     </Link>

    
//   </div>
// )}
   
//     </div>
  );
}