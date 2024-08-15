"use client";
import { Inika } from "next/font/google";
import { motion } from "framer-motion";
import { createContext } from "react";

const inter = Inika({ subsets: ["latin"], weight: "400" });

const Description = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={inter.className}
      >
        <h1 className="text-xl text-black text-center">NUSANTARA BARU</h1>
        <p className="mt-8 lg:text-right text-[#585454] text-sm">
          Nusantara Baru adalah simbol transformasi dan keberanian Indonesia
          dalam menghadapi tantangan masa depan. Ibu Kota Nusantara (IKN), yang
          terletak di Kalimantan Timur, merupakan wujud nyata dari komitmen
          Indonesia untuk membangun pusat pemerintahan yang lebih modern,
          inklusif, dan berkelanjutan. Nusantara Baru tidak hanya mencerminkan
          perpindahan fisik pusat pemerintahan, tetapi juga perubahan paradigma
          menuju pembangunan yang lebih merata dan berkeadilan. Dengan
          memanfaatkan potensi sumber daya lokal dan memperhatikan aspek
          lingkungan, Nusantara Baru adalah langkah strategis untuk menghadirkan
          Indonesia yang lebih seimbang dan siap bersaing di kancah global.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={inter.className}
      >
        <h1 className="text-xl text-black text-center">INDONESIA MAJU</h1>
        <p className="mt-8 lg:text-left text-[#585454] text-sm">
          Indonesia Maju adalah visi besar bangsa untuk menjadi negara yang
          mandiri, berdaya saing, dan sejahtera. Melalui pembangunan
          infrastruktur, peningkatan kualitas pendidikan, dan pengembangan
          teknologi, Indonesia sedang bertransformasi menjadi kekuatan ekonomi
          yang diperhitungkan di dunia. Indonesia Maju adalah perjalanan panjang
          yang dibangun di atas dasar persatuan, gotong royong, dan inovasi.
          Visi ini mengajak seluruh lapisan masyarakat untuk bersama-sama
          mewujudkan Indonesia yang tidak hanya maju secara ekonomi, tetapi juga
          unggul dalam kualitas hidup dan mampu memberikan kontribusi positif
          bagi peradaban dunia.
        </p>
      </motion.div>
    </div>
  );
};

export default Description;
