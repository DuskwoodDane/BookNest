export interface ResponseData {
  code: number;
  data: Record<string, any> | null;
  message?: string;
}
