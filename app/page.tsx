"use client"
import MarqueeComponent from "@/components/Marquee";
import { Navbar, Footer } from "@/components/Navbar";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "motion/react";
import Services from "@/components/Services";

export default function Home() {
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/*  */}
      <section className="bg-primary w-full h-screen flex px-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4 w-full lg:w-[45%] z-10">
          <h1 className="font-semibold text-4xl lg:text-6xl text-dark-green w-full">Laundry Bersih, Cepat, dan Tepat Waktu!</h1>
          <button className="bg-lime px-4 py-2 rounded-md text-white font-semibold w-40">Pesan Sekarang</button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          src={"/images/icon-01.png"} 
          alt={"icon-01"} 
          width={550} 
          height={550} 
          className="w-full lg:w-1/2 object-contain bottom-1 absolute right-0 lg:right-52" 
        />
        <div className="absolute top-4 right-4 bg-white/50 p-20 w-52 rounded-t-2xl rounded-br-2xl rounded-bl-[200px]"></div>
      </section>

      {/* Why Choose Us */}
      <section className="p-14 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full text-center md:text-start md:w-[50%]">
          <motion.h1
            initial={{ opacity: 0, y: 10}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-bold text-dark-green mb-4"
          >
              Why Choose Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <p>Pelayanan yang sangat memuaskan!</p>
            <p>Pakaian anda akan selalu bersih dan wangi.</p>
          </motion.div>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.li 
              initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-primary rounded-xl p-4 h-52 text-center"
            >
              <Image src={"/icons/icon-delivery.png"} alt={"icon-delivery"} width={70} height={70} className="mx-auto mb-4" />
              <h1 className="font-semibold text-dark-green text-xl">Antar Jemput</h1>
              <p className="text-sm text-gray-700 italic">Kami siap menjemput dan mengantar cucian Anda langsung ke rumah.</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="bg-primary rounded-xl p-4 h-52 text-center">
              <Image src={"/icons/icon-laundry.png"} alt={"icon-laundry"} width={70} height={70} className="mx-auto mb-4" />
              <h1 className="font-semibold text-dark-green text-xl">Proses Cepat</h1>
              <p className="text-sm text-gray-700 italic">Pengerjaan cepat tanpa mengurangi kualitas kebersihan.</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="bg-primary rounded-xl p-4 h-52 text-center">
              <Image src={"/icons/icon-dolar.png"} alt={"icon-dolar"} width={70} height={70} className="mx-auto mb-4" />
              <h1 className="font-semibold text-dark-green text-xl">Harga Terjangkau</h1>
              <p className="text-sm text-gray-700 italic">Layanan berkualitas denan harga bersahabat.</p>
            </motion.li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
    <Services />

      {/* Discount */}
      {/* <section>
        <div className="mx-16">
          <Image src={"/images/discount.png"} alt={"discount"} width={300} height={300} className="animate-pulse" />
        </div>
      </section> */}

      {/* Reviews */}
      <section>
        <motion.h1 
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="font-bold text-3xl text-center text-dark-green"
        >
          Customer Testimonial
        </motion.h1>
        <MarqueeComponent />
      </section>
      

      <WhatsAppButton />
      <Footer />
    </div>
  )
}