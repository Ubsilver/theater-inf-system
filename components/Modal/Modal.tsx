// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'; // Подключите необходимые компоненты
// import prisma from '@/prisma/prisma';

// async function getEmployees() {
//   const fieldsToSelect = {
//     id: true,
//     photo: true,
//     last_name: true,
//     first_name: true,
//     pol: true,
//     data_rojdenia: true,
//     deti: true,
//     data_priema_na_rabotu: true,
//     zarplata: true,
//     doljnolst: true,
//     podrazdelenie: true,
//     zvanie_sotrudnikov: true,
//     role_sotrudnika: true,
//   };
  
//   const employees = await prisma.sotrudniki.findMany({ select: fieldsToSelect });  
//   return employees;
// };



// async function ModalEmployees() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null); // Используйте тип number для id

//   // Загрузка списка сотрудников (вызывается один раз при монтировании компонента)
//   const employees = await getEmployees();

//   const handleOpenModal = (id: number) => {
//     setSelectedEmployeeId(id);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcytricks.com%2Fpenyebab-foto-profil-wa-orang-lain-tidak-terlihat%2F&psig=AOvVaw2jACcVx5wfcNvTY9cYLa6k&ust=1710413874785000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC0rK2K8YQDFQAAAAAdAAAAABAJ";
//   const genderText = sotrudniki.pol === "MELE" ? "Мужской" : "Женский";
//   const date = new Date(sotrudniki.data_rojdenia);
//   const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

//   return (
//     <div>
//       {employees.map((sotrudniki: any) => (
//         <div className='employees-card' key={sotrudniki.id}>
//           <img src={sotrudniki.photo || defaultImage} alt="фото сотрудника" />
//           <h2>{sotrudniki.last_name} {sotrudniki.first_name}</h2>
//           <p>Должность: {doljnolst.name}</p>
//           <p>Дата рождения: {formattedDate}</p>
//         </div>
//       ))}

//       <Modal visible={isModalOpen} onClose={handleCloseModal}>
//         <ModalContent>
//           <ModalHeader>Заголовок модального окна</ModalHeader>
//           <ModalBody>
//             {selectedEmployeeId !== null && (
//               <div>
//                 {/* Здесь используйте данные о сотруднике с выбранным id */}
//                 {/* Например: */}
//                 <p>Имя: {employees.find((item: any) => item.id === selectedEmployeeId)?.first_name}</p>
//                 {/* Добавьте другие необходимые детали */}
//               </div>
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <button onClick={handleCloseModal}>Закрыть</button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// export default ModalEmployees;
