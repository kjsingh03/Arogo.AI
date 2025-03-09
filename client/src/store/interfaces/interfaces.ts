import { User } from "../../types/types";

export interface UISliceInterface {
    navOpen: boolean;
    loading: boolean;
    progress: number;
}

export interface UserSliceInterface {
    user: User;
    // formData: SignUpFormData;
    isAuthenticated: boolean;
    authLoading: boolean;
    error: string | null;
  }