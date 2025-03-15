import axios from "axios";
import { RegisterUserFormData, UserType } from "../types";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const authRequestOTP = async (email: string): Promise<{ status?: string, message?: string }> => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/request-otp`, { email });
        return res.data;
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response?.data?.message || "Failed to send OTP. Please try again.");
    }
};

export const authVerifyOTP = async (email: string, otp: string): Promise<{ status?: string, message?: string, user: UserType }> => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/verify-otp`, { email, otp });
        return res.data
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response.data.message || "Failed to verify OTP. Please try again")
    }
}

export const authRegisterUser = async (formData: RegisterUserFormData): Promise<{ status?: string, message?: string }> => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/signup`, { ...formData });
        return res.data
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response.data.message || "Failed to register user. Please try again")
    }
}

export const authLoginUser = async (email: string, securityPin: string): Promise<{ status?: string, message?: string }> => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/login`, { email, securityPin });
        return res.data
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response.data.message || "Failed to login user. Please try again")
    }
}

export const authVerifyLoginOTP = async (email: string, otp: string): Promise<{ status?: string, message?: string }> => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/auth/verify-otp`, { email, otp });
        return res.data
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response.data.message || "Failed to verify OTP. Please try again")
    }
}