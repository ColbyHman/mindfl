<template>
    <div class="container">
        <div class="formBox">
            <span class="material-icons" v-if="formPosition > 0" @click="previousStep">arrow_back</span>
            <br v-if="formPosition == 0"/>
            <div :class="animation">
                <br/>
                <h2 class="title">{{ formGroup[formPosition].title }}</h2>
                <div :class="formGroup[formPosition].class">
                    <div v-for="(field, index) in formGroup[formPosition].fields" :key="'field'+index">
                        <button class="formButton" type="button" v-if="field.type == 'button'" @click="nextStep(field.value)">{{ field.label }}</button>
                        <textarea v-if="field.type == 'large-textbox'" class="large-textbox" v-model="entryBody" :placeholder="field.value"></textarea>
                        <div v-if="field.type == 'submit'" :class="formGroup[formPosition].flexBox">
                            <button class="submitButton" type="submit" v-if="field.type == 'submit'" @click="submit()">{{ field.label }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createEntries } from '../stores/createEntries';
export default {
    data: () => {
        return {
            formPosition: 0,
            emotionTree: {
               "Happy": [
                { label: "Playful", value: "Playful", type: "button" },
                { label: "Content", value: "Content", type: "button" },
                { label: "Interested", value: "Interested", type: "button" },
                { label: "Proud", value: "Proud", type: "button" },
                { label: "Accepted", value: "Accepted", type: "button" },
                { label: "Powerful", value: "Powerful", type: "button" },
                { label: "Peaceful", value: "Peaceful", type: "button" },
                { label: "Trusting", value: "Trusting", type: "button" },
                { label: "Optimistic", value: "Optimistic", type: "button" },
                ],
                "Sad": [
                { label: "Lonely", value: "Lonely", type: "button" },
                { label: "Vulnerable", value: "Vulnerable", type: "button" },
                { label: "Despair", value: "Despair", type: "button" },
                { label: "Guilty", value: "Guilty", type: "button" },
                { label: "Depressed", value: "Depressed", type: "button" },
                { label: "Hurt", value: "Hurt", type: "button" },
                ],
                "Disgusted": [
                { label: "Repelled", value: "Repelled", type: "button" },
                { label: "Awful", value: "Awful", type: "button" },
                { label: "Disappointed", value: "Disappointed", type: "button" },
                { label: "Disapproving", value: "Disapproving", type: "button" },
                { label: "Embarrassed", value: "Embarrassed", type: "button" },
                { label: "Apalled", value: "Apalled", type: "button" },
                { label: "Judgemental", value: "Judgemental", type: "button" },
                { label: "Revolted", value: "Revolted", type: "button" },
                ],
                "Angry": [
                { label: "Critical", value: "Critical", type: "button" },
                { label: "Distant", value: "Distant", type: "button" },
                { label: "Frustrated", value: "Frustrated", type: "button" },
                { label: "Aggressive", value: "Aggressive", type: "button" },
                { label: "Mad", value: "Mad", type: "button" },
                { label: "Bitter", value: "Bitter", type: "button" },
                { label: "Humiliated", value: "Humiliated", type: "button" },
                { label: "Let down", value: "Let down", type: "button" },
                ],
                "Fearful": [
                { label: "Threatened", value: "Threatened", type: "button" },
                { label: "Rejected", value: "Rejected", type: "button" },
                { label: "Weak", value: "Weak", type: "button" },
                { label: "Insecure", value: "Insecure", type: "button" },
                { label: "Anxious", value: "Anxious", type: "button" },
                { label: "Scared", value: "Scared", type: "button" },
                ],
                "Bad": [
                { label: "Bored", value: "Bored", type: "button" },
                { label: "Busy", value: "Busy", type: "button" },
                { label: "Stressed", value: "Stressed", type: "button" },
                { label: "Tired", value: "Tired", type: "button" },
                { label: "Apathetic", value: "Apathetic", type: "button" },
                { label: "Unfocussed", value: "Unfocussed", type: "button" },
                { label: "Overwhelmed", value: "Overwhelmed", type: "button" },
                { label: "Sleepy", value: "Sleepy", type: "button" },
                ],
                "Surprised": [
                { label: "Startled", value: "Startled", type: "button" },
                { label: "Confused", value: "Confused", type: "button" },
                { label: "Amazed", value: "Amazed", type: "button" },
                { label: "Excited", value: "Excited", type: "button" },
                { label: "Shocked", value: "Shocked", type: "button" },
                { label: "Perplexed", value: "Perplexed", type: "button" },
                ],
            },
            animation: "animate-in",
            store: createEntries(),
            emotions: [],
            entryBody: "",
            user_uuid: "0b3767fe-b227-47a1-ae07-2c4e85275b87",
            formGroup: [
                { 
                    title: "How are you feeling?",
                    class: "buttons",
                    fields: [
                        { label:"Happy",value:"Happy",type:"button" },
                        { label:"Sad",value:"Sad",type:"button" },
                        { label:"Disgusted",value:"Disgusted",type:"button" },
                        { label:"Angry",value:"Angry",type:"button" },
                        { label:"Fearful",value:"Fearful",type:"button" },
                        { label:"Bad",value:"Bad",type:"button" },
                        { label:"Surprised",value:"Surprised",type:"button" },
                        { label:"Skip",value:"",type:"button" },
                    ]
                },
                { 
                    title: "Do any of these words describe how you're feeling?",
                    class:"buttons",
                    replaceFields: true,
                    fields: []
                },
                { 
                    title: `What is making you feel this way?`,
                    fields: [
                        { label:"",value:"I'm feeling this way because...",type:"large-textbox" },
                        { label:"Submit",value:"",type:"submit"}
                    ],
                    class:"text",
                    flexBox:"flex"
                },
            ]
        }
    },
    methods: {
        nextStep(emotion){
            this.animation = 'animate-out';
            this.emotions[this.formPosition] = emotion;
            console.log(this.emotionTree);
            setTimeout(() => {
                this.animation = 'animate-in';
                this.formPosition += 1;
                if (this.formGroup[this.formPosition].replaceFields) {
                    this.formGroup[this.formPosition].fields = this.emotionTree[emotion];
                }
            }, 600);
        },
        previousStep(){
            this.animation = 'animate-out';
            setTimeout(() => {
                this.animation = 'animate-in';
                this.formPosition -= 1;
            }, 600);
        },
        submit(){
            console.log(this.emotions);
            console.log(this.entryBody);
            this.store.createEntry(this.user_uuid, this.emotions, this.entryBody);
        }
    },
}
</script>

<style>

    .container{
        margin: 10%;
        width:1200px;
        height:1000px;
        position: relative;
    }

    .formBox{
        border:5px solid;
        border-color: black;
        border-radius: 1rem;
        width: 500px;
        height: 500px;
        position: absolute;
        top: 25%;
        left: 50%;
        margin: -200px 0 0 -200px;
        padding-right: 2rem;
        padding-left: 2rem;
    }

    .formBox .buttons {
        display: grid;
        position: relative;
        text-align: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
    }

    .formBox .title {
        text-align: center;
    }

    .material-icons {
        left: -50%;;
    }

    .animate-in {
        transform-origin: left;
        animation: all .6s ease-in-out;
    }

    .animate-out {
        transform-origin: bottom left;
        animation: all .6s ease-in-out;
    }

    
    .text {
        display:flex;
        position: relative;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        /* align-items: center; */
    }

    .flex{
        display: flex;
        justify-content: center;
    }

    .text .large-textbox {
        display: flex;
        width: 100%;
        height: 250px;
        resize:none;
        font-size:large;
        box-sizing: border-box;
    }

    .submitButton {
        height: 60px;
        margin-top: 1rem;
        width:100px;
        align-self: center;
    }

</style>