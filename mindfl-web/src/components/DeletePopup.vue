<template>
  <div class="overlay" @click.self="removePopup" v-if="showPopup">
    <div class="popupForm">
        <h3>Delete This Entry?</h3>
        <br />
        <br />
        <div class="buttons">
            <button class="button" type="button" @click="removePopup">Cancel</button>
            <button class="button" stype="button" @click="deleteEntry">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['entry_id'],
    data: () => {
        return {
            showPopup: true,
        }
    },
    methods: {
        removePopup(){
            this.showPopup = false;
            this.$emit('show-delete-popup', false);
        },
        deleteEntry(){
            console.log("Deleted!");
            
            this.$emit('show-delete-popup', false);
        }
    }
}
</script>

<style>


.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.85);
    z-index: 9999;
    color: white;
    height: 100%;
    overflow: hidden;
}

.container{
    margin: 10%;
    width:1200px;
    height:1000px;
    position: relative;
}

.popupForm{
    border-radius: 1rem;
    width: 500px;
    height: 250px;
    position: absolute;
    top: 60%;
    left: 50%;
    margin: -200px 0 0 -200px;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top:3rem;
    background-color: antiquewhite;
    color:black;
    text-align: center;
    z-index: 9998;
}

.buttons {
    grid-template-columns: 1fr 1fr;
}

.popupForm .button {
    margin-left: 2rem;
    margin-right: 2rem;
}



</style>