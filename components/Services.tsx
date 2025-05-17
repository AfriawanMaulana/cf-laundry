"use client"
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
    return (
        <section className="p-14 flex flex-col space-y-10">
        <motion.h1 
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="font-bold text-3xl text-center text-dark-green"
        >
          Our Services
        </motion.h1>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.li 
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-primary p-4 rounded-xl h-72 space-y-4"
            >
              <h1 className="font-semibold text-xl text-dark-green">Laundry Satuan</h1>
              <Image src={"/icons/icon-polo.png"} alt={"icon-polo"} width={100} height={100} className="mx-auto" />
              <p className="text-gray-700 text-sm italic">Cucian berdasarkan per pakaian untuk kebutuhan khusus Anda.</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="bg-primary p-4 rounded-xl h-72 space-y-4"
            >
              <h1 className="font-semibold text-xl text-dark-green">Laundry Kiloan</h1>
              <Image src={"/icons/icon-scale.png"} alt={"icon-scale"} width={100} height={100} className="mx-auto" />
              <p className="text-gray-700 text-sm italic">Solusi ekonomis untuk cucian harian Anda.</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="bg-primary p-4 rounded-xl h-72 space-y-4"
            >
              <h1 className="font-semibold text-xl text-dark-green">Laundry Setrika</h1>
              <Image src={"/icons/icon-iron.png"} alt={"icon-iron"} width={100} height={100} className="mx-auto" />
              <p className="text-gray-700 text-sm italic">Pakaian rapi dan wangi siap pakai.</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="bg-primary p-4 rounded-xl h-72 space-y-4"
            >
              <h1 className="font-semibold text-xl text-dark-green">Laundry Karpet</h1>
              <Image src={"/icons/icon-carpet.png"} alt={"icon-carpet"} width={100} height={100} className="mx-auto" />
              <p className="text-gray-700 text-sm italic">Karpet bersih maksimal tanpa perlu repot.</p>
            </motion.li>
          </ul>
        </div>
      </section>
    )
}

export default Services;