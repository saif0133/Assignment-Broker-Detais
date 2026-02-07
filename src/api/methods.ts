import brokerDataRaw from "../data/broker.json";



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
    const data: any = brokerDataRaw;

    const isEmpty =
      !data ||
      typeof data !== "object" ||
      !data.name ||
      !data.company ||
      !data.email ||
      !data.phone ||
      !data.status;

    if (isEmpty) {
      throw new Error("Data is empty or incomplete");
    }

    return data as BrokerData;
  } catch (error) {
    console.error("Error fetching broker data:", error);
    throw new Error("Failed to fetch broker data"); 
  }
};
