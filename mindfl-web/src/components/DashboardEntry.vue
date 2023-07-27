<template>
    <div class="card">
        <h4>{{ emotion }}</h4>
        <br />
        <p>{{ entry_text }}</p>
        <br />
        <div class="actions">
            <span class="material-symbols-outlined">edit_square</span>
            <span class="material-symbols-outlined" @click="showDelete()">delete</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['emotion','entry_text','entry_id'],
    setup(props) {
        // console.log(props)
    },
    methods: {
        showDelete() {
            console.log(this.entry_id);
            this.$emit('show-delete-popup', this.entry_id);
        },
        deleteEntry() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 220px;
    text-align: center;
    height: 280px;
    padding: 10px;
    border: 5px solid gray;
    margin: 2rem;
    display: inline-block;
    position: relative;
    vertical-align: top;
}

.actions {
    display: flex;
    justify-content: right;
    position:absolute;
    vertical-align: bottom;
    bottom: 0;
    right: 0;
    margin-bottom: 5px;
    opacity: 30%;
    transition: 0.5s;
}

.actions:hover {
    opacity: 100%;
    transition: 0.5s;
}

.material-symbols-outlined {
    font-size:30px;
    transition: 0.5s;
}

.material-symbols-outlined:hover {
    font-size:40px;
    transition: 0.5s;
}
</style>