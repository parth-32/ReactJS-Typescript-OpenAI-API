export interface Irecords {
  question: string;
  result: string;
}

export interface IinputBox {
  onClick: (text: string) => void;
  isLoading: boolean;
}
