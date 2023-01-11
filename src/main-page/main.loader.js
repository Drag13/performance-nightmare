import { API_BASE_PATH } from "../config";

export async function mainPageLoader() {
  const defaultPrimeValue = await fetch(
    `${API_BASE_PATH}/factorial/initialValue`
  ).then((r) => r.json());

  return { defaultPrimeValue: defaultPrimeValue.value };
}
