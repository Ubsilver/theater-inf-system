import React from "react";
import './s.css';

type Props ={
    id: number;
    photo: string | null;
    name: string;
    opisanie: string | null;
    avtor: { id: number; last_name: string };
    janri: { id: number; name: string };
  };

  export default function RepertoireCard({
    id,
    photo,
    name,
    opisanie,
    avtor,
    janri,
  }: Props) {
   
    return (
      <div className="repertoire-card">
        {photo && <img src={photo} alt="фото спектакля" />}
        <div className="repertoire-card-text">
          <h2>
            {name}
          </h2>
          <p>Автор: {avtor.last_name}</p>
          <p>Жанр: {janri.name}</p>
        </div>
        <div className="op">
            <p>Описание:</p>
          <p>{opisanie}</p>
        </div>
      </div>
    );
  }