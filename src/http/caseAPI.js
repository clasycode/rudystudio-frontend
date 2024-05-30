import { $authHost, $host } from "./index";

export const createCase = async (siteCase) => {
  const { data } = await $authHost.post("api/case", siteCase);
  return data;
};

export const fetchCases = async () => {
  const { data } = await $host.get("api/case");
  return data;
};

export const fetchCase = async (caseLink) => {
  const { data } = await $authHost.get(`api/case/link/${caseLink}`);
  return data;
};

export const updateCase = async (id, formData) => {
  const { data } = await $authHost.patch(`api/case/${id}`, formData);
  return data;
};

export const deleteCase = async (id) => {
  const { data } = await $host.delete(`api/case/${id}`);
  return data;
};
