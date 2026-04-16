export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  zip?: string;
  address?: string;
  city?: string;
}

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
}
