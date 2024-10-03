import elemenAtas from "../../../assets/svg/Rangkaian_imgs/rangkaian-atas.svg";
import titleRangkaian from "../../../assets/svg/Rangkaian_imgs/rangkaian-title.svg";
import parade from "../../../assets/svg/Rangkaian_imgs/1.svg";
import bazar from "../../../assets/svg/Rangkaian_imgs/2.svg";
import pameran from "../../../assets/svg/Rangkaian_imgs/3.svg";
import awarding from "../../../assets/svg/Rangkaian_imgs/4.svg";
import paradeText from "../../../assets/svg/Rangkaian_imgs/United Rhtyms UKM Parade.svg";
import bazarText from "../../../assets/svg/Rangkaian_imgs/Market Showcase.svg";
import pameranText from "../../../assets/svg/Rangkaian_imgs/Pameran.svg";
import awardingText from "../../../assets/svg/Rangkaian_imgs/Awarding Gala Night.svg";
import line from "../../../assets/svg/Rangkaian_imgs/line.svg";

import ParadeHp from "../../../assets/svg/Rangkaian_imgs/ParadeHp.svg";
import BazarHp from "../../../assets/svg/Rangkaian_imgs/BazarHp.svg";
import PameranHp from "../../../assets/svg/Rangkaian_imgs/PameranHp.svg";
import AwardingHp from "../../../assets/svg/Rangkaian_imgs/AwardingHp.svg";
import ElemenAtasHp from "../../../assets/svg/Rangkaian_imgs/ElemenAtasHp.svg";
import ElemenAtasKananHp from "../../../assets/svg/Rangkaian_imgs/ElemenAtasKananHp.svg";
import type { FC } from "react";
import Image from "next/image";

const Rangkaian: FC = () => {
  return (
    <section
      id="rangkaian"
      className="h-screen bg-black flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <Image
            src={ElemenAtasHp}
            alt="elemen"
            className="w-[40%] h-7 md:hidden block"
          />
          <Image
            src={elemenAtas}
            alt="elemen"
            className="w-80 lg:h-9 h-7 hidden md:block"
          />
          <div className="md:ml-5 relative w-full max-w-xl lg:h-20">
            <Image
              src={titleRangkaian}
              alt="title"
              className=" w-full h-auto transform md:-translate-y-1/4 -translate-y-[20%] "
            />
          </div>
          <Image
            src={ElemenAtasKananHp}
            alt="elemen"
            className="w-20 h-7 md:hidden block"
          />
          <Image
            src={elemenAtas}
            alt="elemen"
            className="w-80 lg:h-9 h-7 hidden md:block"
          />
        </div>

        <div className="flex flex-col mt-14 gap-8">
          <div className="hidden md:block">
            <div className="flex justify-center xl:gap-60 lg:gap-44 md:gap-24">
              <Image src={parade} alt="parade" />
              <Image src={bazar} alt="bazar" />
              <Image src={pameran} alt="seminar" />
              <Image src={awarding} alt="awarding" />
            </div>
          </div>

          <div className="flex lg:justify-center pl-20 2xl:w-full xl:w-full xl:mx-0 lg:w-[80%] lg:mx-24 md:mx-20">
            <div className="md:block hidden ">
              <Image src={line} alt="line" />
            </div>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <div className="">
              <div className="rotate-90 relative top-44 right-32 w-[450px] ">
                <Image src={line} alt="" className="" />
              </div>

              <div className="flex flex-col gap-10 -mt-16 ml-20">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center ">
                    <Image src={parade} alt="parade" className="w-10" />
                    <Image src={ParadeHp} alt="paradeText" className="" />
                  </div>
                  <p className="text-[10px] w-40 text-center">
                    Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                    kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <Image src={bazar} alt="parade" className="w-10" />
                    <Image src={BazarHp} alt="paradeText" className="" />
                  </div>
                  <p className="text-[10px] w-40 text-center">
                    Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                    produk lokal seperti makanan, minuman, kerajinan tangan, dan
                    produk kreatif lainnya.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <Image src={pameran} alt="parade" className="w-10" />
                    <Image src={PameranHp} alt="paradeText" className="" />
                  </div>
                  <p className="text-[10px] w-40 text-center">
                    Pameran Karya merupakan rangkaian hasil pameran terkait
                    karya seni yang dilakukan Mahasiswa. Tak hanya itu, pameran
                    karya terkait poster UKM, profile UKM, dan dokumentasi
                    aktivitas UKM.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <Image src={awarding} alt="parade" className="w-10" />
                    <Image src={AwardingHp} alt="paradeText" className="" />
                  </div>
                  <p className="text-[10px] w-40 text-center">
                    Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                    (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk
                    apresiasi atas kinerja dan kontribusi mereka selama
                    kepengurusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile */}

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex justify-center gap-9 text-center text-white text-xs font-poppins ">
              <div className="flex flex-wrap justify-center gap-2 w-full">
                <Image src={paradeText} alt="paradeText" />
                <p className="mt-2">
                  Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                  kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full">
                <Image src={bazarText} alt="bazarText" />
                <p className="mt-2">
                  Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                  produk lokal seperti makanan, minuman, kerajinan tangan, dan
                  produk kreatif lainnya.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full">
                <Image src={pameranText} alt="pameranText" />
                <p className="mt-2">
                  Pameran Karya merupakan rangkaian hasil pameran terkait karya
                  seni yang dilakukan Mahasiswa. Tak hanya itu, pameran karya
                  terkait poster UKM, profile UKM, dan dokumentasi aktivitas
                  UKM.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full">
                <Image src={awardingText} alt="awardingText" />
                <p className="mt-2">
                  Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                  (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk
                  apresiasi atas kinerja dan kontribusi mereka selama
                  kepengurusan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rangkaian;
