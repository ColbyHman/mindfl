import { defineStore } from 'pinia';
import axios from 'axios';

export const listEntries = defineStore('list-entries', {
    state: () => ({
        user_uuid: "",     
        entries: {},
    }),
    actions: {
        init(user_uuid: string) {
            // this.user_uuid = user_uuid;
            // console.log(user_uuid);
        },
        async getEntries(user_uuid: string) {
            const api = "http://localhost:3000/dev/";
            await axios.post(api+'list_entries',{"id":user_uuid}).then( (response) => { this.entries = response.data.result });
        }
    },
    getters: {
        listEntries(state) {
            return state.entries;
        },

    }
})