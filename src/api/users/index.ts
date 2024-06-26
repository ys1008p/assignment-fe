import { API_ROUTES } from "@/constant/ROUTES";
import axios from "axios";
import { ExcelClothDto } from "@/api/excel";

interface UserDto {
  id: number;
  createat: string;
  updateat: string;
  uuid: string;
  userid: string;
}

export interface CharacterDto {
  id: bigint;
  createat: Date;
  updateat: Date;
  characterindex: bigint;
  employerid: bigint;
  characterstatus: number;
  etc: string;
  excelBaller: {
    index: string;
    createat: string;
    updateat: string;
    active: number;
    initdeploy: number;
    name: string;
    stat: string;
    gender: number;
    position: number;
    rank: number;
    freestyle: string;
  };
}

export interface ClothInventoryDto {
  id: number;
  createat: Date;
  updateat: Date;
  employerid: number;
  characteruid: number;
  isequiped: boolean;
  isstatus: number;
  clothno: number;
  channel: number;
  isgenerated: boolean;
  islock: boolean;
  excelCloth: ExcelClothDto;
}

export interface CreateClothDto {
  characteruid: number; //bigint
  employerid: number; //bigint
  clothno: number; //bigint
  channel: number;
}

export interface UpdateClothDto {
  characteruid?: number; //bigint
  isequiped?: boolean;
  islock?: boolean;
}

export const getUserData = async (userId: string) => {
  const response = await axios.get(API_ROUTES.USER_BY_ID(userId));
  return response.data as UserDto;
};

export const getUserCharacters = async (employerId: number) => {
  const response = await axios.get(API_ROUTES.USER_CHARACTER_BY_ID(employerId));
  return response.data as CharacterDto[];
};

export const getClothInventory = async (employerId: number) => {
  const response = await axios.get(API_ROUTES.USER_CLOTHS_BY_ID(employerId));
  return response.data as ClothInventoryDto[];
};

export const postUserCloth = async (data: CreateClothDto) => {
  await axios.post(API_ROUTES.CREATE_USER_CLOTH, data);
};

export const deleteUserCloth = async (clothId: bigint) => {
  await axios.delete(API_ROUTES.MODIFY_USER_CLOTH(Number(clothId)));
};

export const updateUserCloth = async (clothId: bigint, data: UpdateClothDto) => {
  await axios.patch(API_ROUTES.MODIFY_USER_CLOTH(Number(clothId)), data);
};