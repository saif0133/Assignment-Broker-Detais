import brokerDataRaw from "../data/broker.json";


export class EmptyDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmptyDataError";
  }
}


export interface BrokerData {
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  image?: string;
}
export const getBrokerData = async (): Promise<BrokerData> => {
  try {
    // throw new Error("Unexpected error"); // Test fetch error
    const data: any = brokerDataRaw;

    const isEmpty =
      !data ||
      typeof data !== "object" ||
      !data.name ||
      !data.company ||
      !data.email ||
      !data.phone ||
      !data.status;

    if (isEmpty || Object.keys(data).length === 0) {
      throw new EmptyDataError("Data is empty");
    }

    return data as BrokerData;
  } catch (error: any) {
    console.error("Error fetching broker data:", error);
    throw error instanceof EmptyDataError ? error : new Error("Unknown error");
  }
};
