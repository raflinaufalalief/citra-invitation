import React from "react"
import IconFooter1 from "../assets/icons/instagram.png"
import IconFooter2 from "../assets/icons/whatsapp.png"
import IconFooter3 from "../assets/icons/gmail.png"

const Payment = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="Sdesktop:grid Sdesktop:grid-cols-3 Sdesktop:flex-row Sdesktop:gap-x-[30px] gap-y-[30px]  justify-center items-center">
          <div>
            <h1 className="py-8 text-3xl text-center  Sdesktop:leading-[35px] font-medium">
              Tentang Kami
            </h1>
            <p className="pb-5">
              Citra Invitation adalah sebuah platform undangan online yang
              didedikasikan untuk membantu Anda menciptakan undangan yang indah,
              kreatif, dan mudah dibagikan. Dengan fokus pada kualitas dan
              kemudahan penggunaan, kami memahami pentingnya momen khusus dalam
              hidup Anda.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className="Sdesktop:pb-10 text-3xl text-center title  Sdesktop:leading-[35px] font-medium">
              Pembayaran
            </h1>
            <div className="">
              <div className="flex gap-x-7">
                <img
                  src="https://cherryshopcom.netlify.app/assets/BCA-6881a9a4.png"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/BNI-15049466.png"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />

                <img
                  src="https://cherryshopcom.netlify.app/assets/GOPAY-ead97464.png"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />
              </div>
              <div className="flex mt-5 gap-x-7">
                <img
                  src="https://cherryshopcom.netlify.app/assets/indomaret-logo-9481ac47.png"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/atm-bersama-0f2c50e9.jpg"
                  alt=""
                  className="p-4 border rounded-md w-[80px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="justify-center mb-6 text-2xl font-medium ">
              Kontak Kami
            </h1>
            <div className="flex items-center mb-4 mobile:justify-center gap-x-2 ">
              <div>
                <img src={IconFooter1} alt="" width={20} color="#AA6947" />
              </div>
              <p>citrainvitation</p>
            </div>
            <div className="flex items-center mb-4 mobile:justify-center gap-x-2">
              <div>
                <img src={IconFooter2} alt="" width={20} color="#AA6947" />
              </div>
              <p>0856-4835-5728</p>
            </div>
            <div className="flex items-center mb-10 mobile:justify-center gap-x-2">
              <div>
                <img src={IconFooter3} alt="" width={20} color="#AA6947" />
              </div>
              <p>citrainvitation@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
