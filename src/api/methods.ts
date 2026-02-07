import brokerData from "../data/broker.json";

export interface BrokerData {
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  image?: string;
}

export const getBrokerData = async (): Promise<BrokerData> => {
  const data: BrokerData = brokerData;

  const isEmpty =
    data == null ||
    (typeof data === "object" && Object.keys(data).length === 0);

  if (isEmpty) {
    throw new Error("Data is empty");
  }

  return data;
};
