import { create } from "zustand";
import BackEndURI from "../utils/BackEndURI";

const useCourseStore = create((set) => ({
  AllCourses: [],
  setAllCourses: (courses) => set({ AllCourses: courses }),
}));

export default useCourseStore;

export async function GetAllCoursesFromBE() {
  try {
    const Res = await fetch(`${BackEndURI}/api/course/get-all`);
    const data = await Res.json();
    if (!data) return;
    // useCourseStore.getState().setAllCourses(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
