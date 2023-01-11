import { API_BASE_PATH } from "../config";

export async function mainPageLoader() {
  const defaultPrimeValue = await fetch(
    `${API_BASE_PATH}/factorial/initialValue/4000`
  ).then((r) => r.json());

  return { defaultPrimeValue: defaultPrimeValue.value };
}
