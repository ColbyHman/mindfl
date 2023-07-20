<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">menu</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/dashboard">
                <span class="material-icons">library_books</span>
                <span class="text">Dashboard</span>
            </router-link>
            <router-link class="button" to="/">
                <span class="material-icons">add_circle</span>
                <span class="text">New Entry</span>
            </router-link>
            <router-link class="button" to="/">
                <span class="material-icons">delete</span>
                <span class="text">Trash</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded  = ref(false);

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 2rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--vt-c-white-soft);
    color:var(--vt-c-black-soft);

    transition: 0.2s ease-out;

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

    button {
        width: 2rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;

    }

    .menu {
        margin: 0 -1rem;
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;
            .material-icons {
                font-size: 2rem;
                color: var(--vt-c-black-soft);
                transition: 0.2s ease-out;
            }

            .text  {
                color: var(--vt-c-black-soft);
                transition: 0.2s ease-out;
            }

            &:hover {
                background-color: var(--vt-c-white-mute);
                transition: 0.2s ease-out;
            }
        }
    }
    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
        }

        h3, .button .text {
        opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .menu {
            padding: 0.5rem 1rem;
        }
    }
}
</style>