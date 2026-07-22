export default function Homepage() {
  return (
    <div >
      <main className="mx-4 flex min-h-screen overflow-y-auto min-w-xl px-2 py-5 justify-center overflow-hidden">

        <div>
          <div className="grid grid-cols-4 grid-rows-2 gap-8 p-8  place-items-center min-w-screen min-h-screen ">
            

            {/* first card */}
         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/736x/09/ec/60/09ec60acfef88f54e67762f5a2089d26.jpg" alt="ss1" className=" object-cover h-80 w-80 rounded-t-2xl " />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold  text-[#954D4B] italic font-serif">Highlighter</h1>
            <span>Rs. 6000</span>
            <p>Rare Beauty | Shimmery</p>
          </div>
         </div>
         
         {/* second card */}

         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/736x/34/05/d8/3405d80199a6d1fd5dae319cce553347.jpg" alt="ss1" className=" object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Matte Lipstick</h1>
            <span>Rs. 12000</span>
            <p>Saint Laurent | Long Lasting</p>
          </div>
         </div>


         {/* third card */}

         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/1200x/64/ab/0a/64ab0a184c9396e50482141642e268b4.jpg" alt="ss1" className=" object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Powder Blush</h1>
            <span>Rs. 2000</span>
            <p>Saint Laurent | Natural finish</p>
          </div>
         </div>

         {/* fourth card */}
          <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/1200x/4a/bd/54/4abd54b93e161f58e27a422fa9a3345d.jpg" alt="ss1" className=" object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Loose Powder</h1>
            <span>Rs. 800</span>
            <p>Maybelline | Finishing Powder</p>
          </div>
         </div>

         {/* next row */}
         {/* fifth card */}
         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/736x/a9/a2/36/a9a236010d08ee1fe376902a6e8d348d.jpg" alt="ss1" className=" object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Concealer</h1>
            <span>Rs. 2000</span>
            <p>Nars | 100% covering</p>
          </div>
         </div>

          {/* sixth card */}
         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/736x/c6/14/5f/c6145feb2693ba432fe5ee95beaa0782.jpg" alt="ss1" className="object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Compact Powder</h1>
            <span>Rs. 1000</span>
            <p>Make Over | Touch up</p>
          </div>
         </div>

          {/* seventh card */}
         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/736x/a8/bc/ab/a8bcab80f4950b56f500e3925b0072f8.jpg" alt="ss1" className="object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Lash Serum</h1>
            <span>Rs. 1500</span>
            <p>Sanive | Healthy Eyelash</p>
          </div>
         </div>

         {/* eigth card */}
         <div className="border border-pink-100 shadow-2xl bg-white rounded-2xl h-110 w-80 transition-transform duration-300 hover:scale-105">
          <div>
          <img src="https://i.pinimg.com/1200x/45/b1/78/45b178f222396ffd530f483378eecd75.jpg" alt="ss1" className="object-cover h-80 w-80 rounded-t-2xl" />
          </div>
          <div className="ml-2 p-2 border-t-2 border-gray-100">
            <h1 className="font-bold text-[#954D4B] italic font-serif">Cusion Foundation</h1>
            <span>Rs. 5000</span>
            <p>Missha | Matte clear</p>
          </div>
         </div>


         </div>
        </div>
      </main>
    </div>
  );
}