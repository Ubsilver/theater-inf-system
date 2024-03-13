"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ModalProps {
  id: number;
  photo: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  pol: string;
  data_rojdenia: Date;
  deti: number;
  data_priema_na_rabotu: Date;
  zarplata: number;
  doljnolst: string;
  podrazdelenie: string;
  zvanie_sotrudnikov: string;
  role_sotrudnika: string;
}

const Modal: React.FC<ModalProps> = ({ id }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`/api/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!employee) {
    return null;
  }

  return (
    <div>
      
      <h3>Additional Queries:</h3>
      <ul>
        <li>Query 1: {/* ... */}</li>
        <li>Query 2: {/* ... */}</li>
        <li>Query 3: {/* ... */}</li>
      </ul>
    </div>
  );
};

export default Modal;