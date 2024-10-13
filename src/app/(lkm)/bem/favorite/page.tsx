'use client'

import React from "react"
import type { FC } from "react"
import BgKategori from "@/components/lkm/background/bg-main"
import { FavoritePage } from "@/components/lkm/section/Favorite"
const Page: FC = () => {

  return (
    <section className="w-screen h-max relative flex flex-col items-center">
      <BgKategori />
      <FavoritePage title="Badan Eksekutif Mahasiswa" lkm="bem" type="0"/>
    </section>
  )
}

export default Page