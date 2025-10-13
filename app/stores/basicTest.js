import { defineStore } from 'pinia';

// 确保你有一个 export 语句
export const useBasicTestStore = defineStore('basicTest', {
  state: () => ({
    message: 'Hello Pinia',
  }),
  // ... 其他 getters, actions
});