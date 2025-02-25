// pers
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, UserState } from "@/components/store/types";

export const useUserStore = create<UserState, [["zustand/persist", UserState]]>(
	persist(
		(set) => ({
			user: null,
			setUser: (user: User) => set({ user }),
			clearUser: () => set({ user: null }),
		}),
		{
			/* key in the local-storage */
			name: "Zustand-UserStore", 
		}
	)
);
