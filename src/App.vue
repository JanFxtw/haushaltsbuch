<template>
    <v-app>
        <v-app-bar
            app
            dark
            color="primary"
        >
            <v-toolbar-title>Übersicht</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>

        <v-footer app>
            <edit-expenses-toolbar />
            <navigation-bar />
        </v-footer>
    </v-app>
</template>

<script>
import NavigationBar from './components/app/NavigationBar.vue';
import EditExpensesToolbar from './components/views/Dashboard/EditExpensesToolbar.vue';

export default {
    name: 'App',
    components: {
        NavigationBar,
        EditExpensesToolbar
    }
};
</script>

<style lang="scss" src='./styles/style.scss' />
