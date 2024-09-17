import { defineStore } from "pinia";

// Тестовое задание не предполагает
// Множества данных
export default defineStore('store', {
    state: () => ({
        name: "Василий",
        age: 30,
        children: [
            {
                name: "Ванька",
                age: 10
            }
        ]
    }),
    actions: {
        addParent(state, parent) {

        }
    }
})