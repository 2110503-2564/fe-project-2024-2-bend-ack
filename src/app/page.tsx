import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
// import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel"
import DentistCatalog from "@/components/DentistCatalog";
import getDentists from "@/libs/getDentists";

export default async function Home() {
  const dentists:Promise<DentistJson>=await getDentists();
  return (
    <main className="bg-[#c5d9f3]" >
      <Banner/>
      <div className="flex justify-evenly w-full" style={{ marginTop: "30px" }}>
        {/* <CardPanel/> */}
        <DentistCatalog dentistJson={dentists}/>
      </div>
    </main>
  );
}
