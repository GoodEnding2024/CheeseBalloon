"use client";

import { create } from "zustand";
import {
  ToggleStateType,
  RecommendDataType,
  LiveData,
  FavDataType,
} from "src/types/type";
import { persist } from "zustand/middleware";

const useToggleState = create(
  persist<ToggleStateType>(
    (set) => ({
      value: false,
      toggle: () => set((state) => ({ value: !state.value })),
    }),
    {
      name: "toggle-state",
    }
  )
);

const RecommendState = create(
  persist<RecommendDataType>(
    (set) => ({
      lastFetchTime: null,
      data: [],
      setData: (newData: LiveData[]) =>
        set((state) => ({ ...state, data: newData })),
      setLastFetchTime: (time: number) =>
        set((state) => ({ ...state, lastFetchTime: time })),
    }),
    {
      name: "recommend-state",
    }
  )
);

const FavState = create(
  persist<FavDataType>(
    (set) => ({
      data: [],
      setData: (newData: LiveData[]) =>
        set((state) => ({ ...state, data: newData })),
    }),
    {
      name: "fav-state",
    }
  )
);
export { useToggleState, RecommendState, FavState };
