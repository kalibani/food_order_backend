import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";
export const CreateVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    ownerName,
    address,
    pinCode,
    foodType,
    email,
    password,
    phone,
  } = <CreateVendorInput>req.body;

  return res.json({
    name,
    ownerName,
    address,
    pinCode,
    foodType,
    email,
    password,
    phone,
  });
};

export const GetVendors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const GetVendorByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
