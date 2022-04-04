<template>
    <div class="dashboard">
        <expenses-circle />
    </div>
</template>

<script>
import ExpensesCircle from '@/components/views/Dashboard/ExpensesCircle.vue';

export default {
    name: 'Dashboard',
    components: {
        ExpensesCircle
    }
};
</script>

<style lang="scss" src='./Dashboard.scss' />

