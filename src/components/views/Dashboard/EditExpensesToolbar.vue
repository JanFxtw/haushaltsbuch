<template>
    <v-toolbar
        class="edit-expenses-toolbar"
    >
        <v-spacer />
        <v-btn
            class="toolbar-button"
            fab
            depressed
            color="green"
            dark
            x-large
            @click="this.$emit('open-dialog')"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn
            class="toolbar-button"
            fab
            depressed
            color="red"
            dark
            x-large
            @click="this.$emit('open-dialog')"
        >
            <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-spacer />
    </v-toolbar>
</template>

<script>
export default {
    name: 'EditExpensesToolbar'
};
</script>

<style lang="scss" src='./EditExpensesToolbar.scss' />
