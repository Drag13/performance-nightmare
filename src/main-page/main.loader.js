import { axios } from "../axios";

export async function mainPageLoader() {
  const defaultPrimeValue = await axios
    .get(`/factorial/initialValue/6000`)
    .then((x) => x.data);

  return { defaultPrimeValue: defaultPrimeValue.value };
}
