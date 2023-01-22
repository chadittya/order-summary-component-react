import React from "react";

export default function OrderSummary() {
  return (
    <div className="order-summary box-border">
      {/* wrapper */}
      <div className="flex justify-center items-center h-screen">
        {/* card */}
        <div className="flex flex-col bg-white rounded-2xl md:w-[450px] mobile:w-[325px]">
          {/* card item wrapper */}
          <div className="bg-[url('../assets/images/illustration-hero.svg')] bg-cover md:w-[450px] md:h-[220px] rounded-t-2xl mobile:w-[325px] mobile:h-[158px]"></div>
          <div className="md:px-11 flex flex-col items-center mobile:px-[30px]">
            {/* card items */}
            <div className="mt-10 mb-6">
              <h1 className="font-bold text-3xl">Order Summary</h1>
            </div>
            <div className="mb-6">
              <p className="text-center text-neutral-500">
                You can now listen to millions of songs, audiobooks and podcasts
                on any devices anywhere you like!
              </p>
            </div>
            {/* card payment items */}
            <div className="bg-cust-Very-pale-blue rounded-xl w-full mb-6">
              {/* card payment item wrapper */}
              <div className="flex flex-row justify-between px-6 py-6 gap-5 items-center">
                {/* icon music */}
                <div className="flex flex-initial bg-[url('../assets/images/icon-music.svg')] bg-cover bg-no-repeat resize w-[48px] h-[48px]"></div>
                {/* wrapper plans */}
                <div className="flex flex-auto flex-col">
                  <div className="font-bold md:text-lg mobile:text-sm">
                    Annual Plan
                  </div>
                  <div className="text-neutral-500 md:text-[16px] mobile:text-sm">
                    $59.99/year
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex flex-initial underline text-blue-600 hover:text-[#746bf1] md:text-[16px] mobile:text-sm"
                  >
                    Change
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full mb-6">
              <button className="bg-[#3129ce] rounded-lg w-full py-3 font-bold text-neutral-200 shadow-[0px_10px_20px_10px_#00000024] hover:bg-[#746bf1]">
                Proceed to Payment
              </button>
            </div>
            <div className="font-bold text-neutral-500 mb-10 hover:cursor-pointer">
              <a href="#">Cancel Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
