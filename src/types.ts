export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  highlights: string[];
  transport: {
    type: string;
    details: string;
    included: boolean;
  }[];
  instagram: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  destination: string;
  travelDate: string;
  groupSize: number;
  message: string;
  status: 'new' | 'inProgress' | 'responded';
  createdAt: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  destination: string;
  travelDate: string;
  groupSize: number;
  message: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD';

export interface CurrencyInfo {
  symbol: string;
  rate: number;
}