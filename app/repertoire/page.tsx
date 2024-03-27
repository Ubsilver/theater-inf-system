import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import './s.css'
import prisma from "@/prisma/prisma";
import RepertoireCard from "@/components/RepertoireCard/RepertoireCard";

async function getRepertoire() {
  const fieldsToSelect = {
    id: true,
    photo: true,
    name: true,
    opisanie: true,
    avtor: true,
    janri: true,
  };
  
  const repertoire = await prisma.spektakli.findMany({ select: fieldsToSelect });  
  return repertoire;
}

const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcytricks.com%2Fpenyebab-foto-profil-wa-orang-lain-tidak-terlihat%2F&psig=AOvVaw2jACcVx5wfcNvTY9cYLa6k&ust=1710413874785000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC0rK2K8YQDFQAAAAAdAAAAABAJ";


export default async function Repertoire() {
  const repertoire = await getRepertoire();

  return (
    <div>
      <p className="text-black font-bold text-40 leading-6 px-10 py-5">Репертуар (спектакли)</p>
      <div className="add-btn">
        <div>
            <Button color="primary" variant="ghost">Посмотреть всех авторов</Button>
            <Button color="primary" variant="ghost">Посмотреть все жанры</Button>
            <Button color="primary" variant="ghost">Посмотреть все роли</Button>
        </div>
      </div>
      {
        repertoire.map((spektakli: any) => {
          return(
            <div className="flex row mx-8 ">
            <RepertoireCard
            key={spektakli.id}
            id={spektakli.id}
            name={spektakli.name}
            photo={spektakli.photo || defaultImage}
            avtor={spektakli.avtor}
            janri={spektakli.janri} 
            opisanie={spektakli.opisanie}            
            />
            </div>   
          );
          
        })
      }  
    </div>
  );
}
