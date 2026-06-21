import axios from "axios";

const KEY = "48163d9967594acfa79e90333bb0cdd7";
const BASE_URL = `https://api.rawg.io/api/games`;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getAll = async () => {
  try {
    const resp = (await apiClient.get(`?key=${KEY}`)).data.results;
    return resp;
  } catch (error) {
    console.log("🚀 ~ getAll ~ error:", error);
  }
};

export const getByQuery = async (query, controller) => {
  try {
    return (
      await apiClient.get(`?key=${KEY}&search=${query}`, {
        signal: controller.current.signal,
      })
    ).data.results;
  } catch (error) {
    console.log("🚀 ~ getAll ~ error:", error);
  }
};

export const getGameById = async (id, controller) => {
  const resp = await apiClient.get(`/${id}?key=${KEY}`, {
    signal: controller.current.signal,
  });

  return resp.data;
};

export const getReviewGameById = async () => {};

export const getGameFeedbacksById = async (id, controller) => {};

export { getAll };

//!     async function updateName(prevState: State, formData: FormData) {
//   const name = formData.get('name') as string;
//   if (!name) return { error: "Ім'я не може бути порожнім" };
//   await api.updateName(name);
//   return { error: null };
// }

// function Form() {
//   const [state, action, isPending] = useActionState(updateName, { error: null });

//   return (
//     <form action={action}>
//       <input name="name" placeholder="Твоє ім'я" />
//       {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
//       <button type="submit" disabled={isPending}>
//         {isPending ? '⏳' : 'Зберегти'}
//       </button>
//     </form>
//   );
// }
