import { Pol } from "@prisma/client";

export interface EmployeeData {
  last_name: string;
  first_name: string;
  middle_name: string;
  data_rojdenia: string;
  deti: number;
  data_priema_na_rabotu: string;
  zarplata: number;
  photo: string;
  pol: string;
  podrazdelenieId: number | null;
  doljnolstId: number | null;
}
