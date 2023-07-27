import { defineStore } from 'pinia';
import axios from 'axios';

export const createEntries = defineStore('create-entry', {
    state: () => ({
        user_uuid: "",     
        entry: {},
        emotions: [],
        entryBody: ""
    }),
    actions: {
        init(user_uuid: string) {
            // this.user_uuid = user_uuid;
            // console.log(user_uuid);
        },
        async createEntry(user_uuid: string, emotions: [], entryBody: string) {
            const api = "http://localhost:3000/dev/";

            const request = {
                body: entryBody,
                emotions: emotions,
                id: user_uuid
            }

            await axios.post(api+'create_entry',request).then( (response) => { console.log(response) });
        }
    },
    getters: {

    }
})