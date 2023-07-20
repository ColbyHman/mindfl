<template>
    <div class="card">
        <h4>{{ emotion }}</h4>
        <br />
        <p>{{ entry_text }}</p>
    </div>
</template>

<script>
export default {
    props: ['emotion','entry_text'],
    setup(props) {
        // console.log(props)
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
</style>