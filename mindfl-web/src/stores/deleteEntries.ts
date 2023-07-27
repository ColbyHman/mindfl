import { defineStore } from 'pinia';
import axios from 'axios';

export const deleteEntries = defineStore('delete-entries', {
    state: () => ({
        user_uuid: "",     
        entries: {},
    }),
    actions: {
        init(user_uuid: string) {
            // this.user_uuid = user_uuid;
            // console.log(user_uuid);
        },
        async deleteEntry(user_uuid: string, entry_id: string) {
            const api = "http://localhost:3000/dev/";
            await axios.post(api+'delete_entry',{"id":user_uuid, "entry_id":entry_id}).then( (response) => { console.log(response) });
        }
    },
    getters: {

    }
})