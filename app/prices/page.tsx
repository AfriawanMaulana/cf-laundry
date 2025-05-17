import { Footer, Navbar } from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";


export default function PricesPage() {
    return (
        <div>
            <Navbar />
            <div className="mt-20 flex flex-col gap-10  ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image 
                        src={"/images/pricelist_02.png"} 
                        alt={"pricelist_02"} 
                        width={1000} 
                        height={1000} 
                        className={"w-full shadow-2xl shadow-black rounded-2xl"} 
                    />
                    <div className="hidden lg:flex flex-col items-center justify-evenly text-center">
                    <ul className="space-y-1">
                            <h1 className="font-bold text-4xl text-lime">Full Service</h1>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 w-36">Service</h1>
                                <h1 className="bg-lime py-2 w-36 z-10 rounded-lg">24 Jam (min. 3kg)</h1>
                                <h1 className="py-2 w-36">2 Hari (min. 4kg)</h1>
                                <h1 className="bg-lime py-2 w-36 z-10 rounded-lg">3 Hari (min. 5kg)</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-36">Cuci Setrika</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 13.000/kg</h1>
                                <h1 className="py-2 px-4 w-36">Rp 10.000/kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 7.500/kg</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-36">Cuci Lipat</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 11.000/kg</h1>
                                <h1 className="py-2 px-4 w-36">Rp 8.500/kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 6.000/kg</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-36">Setrika</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 11.000/kg</h1>
                                <h1 className="py-2 px-4 w-36">Rp 8.500/kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-36 z-10 rounded-lg">Rp 6.000/kg</h1>
                            </li>
                        </ul>

                        {/*  */}
                        <h1 className="font-bold text-4xl text-lime">Satuan</h1>
                        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
                            <ul className="space-y-1 text-sm">
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="p-4 w-40">Bed Cover Single</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 20.0000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Bed Cover Queen Size</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 25.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="p-4 w-40">Bed Cover King</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 35.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Bed Cover Extra King</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 55.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Sprei (kain bantal & guling)</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 10.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Selimut</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 10.000</h1>
                                </li>
                            </ul>
                            
                            <ul className="space-y-1">
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Karpet</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 15.000/m2</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Bantal/Guling</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 20.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Jas Stelan</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 55.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Gorden</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 7.000/m2</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Tikar</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 35.000</h1>
                                </li>
                                <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                    <h1 className="px-2 w-40">Kasur Palembang</h1>
                                    <h1 className="bg-lime p-4 w-40 z-10 rounded-lg">Rp 55.000</h1>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden lg:flex flex-col items-center justify-evenly text-center">
                        <ul className="space-y-1">
                            <h1 className="font-bold text-4xl text-lime">Self Service</h1>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">Cuci Kering</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Harga Normal</h1>
                                <h1 className="py-2 px-4 w-40">Harga Promo</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">4kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 25.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 21.250</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">5kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 32.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 27.200</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">6kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 39.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 33.150</h1>
                            </li>
                            <li className="text-left text-sm italic">
                                <p>- Durasi 2 Jam Selesai</p>
                                <p>- Add On Pelembut Downy Rp 1.500/pcs </p>
                                <p>- Free Detergen</p>
                                <p>- Cuci Basah: Rp 2.500,-/kg</p>
                            </li>
                        </ul>
                        <ul className="space-y-1">
                            <h1 className="font-bold text-4xl text-lime">Drop Service</h1>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">Cuci Kering</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Harga Normal</h1>
                                <h1 className="py-2 px-4 w-40">Harga Promo</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">4kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 25.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 21.250</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">5kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 32.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 27.200</h1>
                            </li>
                            <li className="flex bg-gray-600 items-center rounded-lg font-semibold text-white">
                                <h1 className="py-2 px-4 w-40">6kg</h1>
                                <h1 className="bg-lime py-2 px-4 w-40 z-10 rounded-lg">Rp 39.000</h1>
                                <h1 className="py-2 px-4 w-40">Rp 33.150</h1>
                            </li>
                            <li className="text-left text-sm italic">
                                <p>- Durasi 6 Jam Selesai</p>
                                <p>- Cuci-Kering-Lipat-Packing</p>
                                <p>- Memakai Pelembut Downy Konsentrat</p>
                            </li>
                        </ul>
                    </div>
                    <Image 
                        src={"/images/pricelist_01.png"} 
                        alt={"pricelist_02"} 
                        width={1000} 
                        height={1000} 
                        className={"w-full shadow-2xl shadow-black rounded-2xl"} 
                    />
                </div>
           </div>

           <WhatsAppButton />
           <Footer />
        </div>
    )
}