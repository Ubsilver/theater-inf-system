'use client'
import prisma from "@/prisma/prisma";
import {NextUIProvider} from "@nextui-org/react";
import "./globals.css";

// async function getPerformances(){
//   const sevenDaysFromNow = new Date();
//   sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

//   const upcomingPerformances = await prisma.pokaz.findMany({
//     where: {
//       data: {
//         gt: new Date(),
//         lt: sevenDaysFromNow,
//       }
//     },
//     include: {
//       spektakli: true,
//       zal: true,
//       bilet: true
//     }
//   });
//   return upcomingPerformances;
// }


export default async function Home() {
  // const upcomingPerformances = await getPerformances();

  return (
    <div>
      <p className="text-black font-bold text-40 leading-6 px-10 py-5">Главная страница</p>
      <div>
        <div>
          <p className="zag">Показы на этой неделе:</p>
        </div>

        <div className="flex row">
          <div className="pokaz-card">
            <img src="https://img4.labirint.ru/rc/75568dcf624c0e8c79ab9b5326f11076/363x561q80/books65/640776/cover.jpg?1613035902" alt="." className="img-pokaz" />
            <div className="text">            
              <p className="nazvanie">Гамлет</p>
              <p className="janr">Драма</p>
              <p className="data-vremia">30.03.24 в 16:00</p>
              <p className="zal">Красный зал</p>
            </div>
          </div>
          <div className="pokaz-card">
            <img src="https://img3.labirint.ru/rc/730322d89feccd0052907fe40a2139e6/363x561q80/books59/582393/cover.jpg?1612704626"></img>
            <div className="text">            
              <p className="nazvanie">Ромео и Джульетта</p>
              <p className="janr">Трагедия</p>
              <p className="data-vremia">01.04.24 в 20:00</p>
              <p className="zal">Синий зал</p>
            </div>
          </div>

          <div className="pokaz-card">
          <img src="https://img4.labirint.ru/rc/75568dcf624c0e8c79ab9b5326f11076/363x561q80/books65/640776/cover.jpg?1613035902" alt="." className="img-pokaz" />
            <div className="text">            
              <p className="nazvanie">Гамлет</p>
              <p className="janr">Драма</p>
              <p className="data-vremia">01.04.24 в 18:00</p>
              <p className="zal">Красный зал</p>
            </div>
          </div>
        



            {/* <div className="border-2 radius-10 mx-10 my-15 px-5 py-15">
            {
          upcomingPerformances.map((Pokaz) => (
            <div key={Pokaz.id}>
              <time dateTime={Pokaz.data.toISOString()}>
                {Pokaz.data.toLocaleDateString()} в {Pokaz.time}
              </time>
              <p>{Pokaz.spektakli.name}</p>
              <p>{Pokaz.zal.name}</p>
            </div>
          ))
          }
          </div> */}
      </div>
      </div>
    </div>
  )
}
