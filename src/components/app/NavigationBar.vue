<template>
    <v-bottom-navigation
        app
        permanent
        color="primary"
        shift
        grow
    >
        <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            :to="{path: icon.route}"
        >
            <span class="caption">{{ icon.text }}</span>
            <v-icon>{{ icon.mdi }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'NavigationBar',
    data()
    {
        return {
            value: 0,
            icons: [
                {
                    text: 'Übersicht',
                    mdi: 'mdi-home',
                    route: '/'
                },
                {
                    text: 'Kategorien',
                    mdi: 'mdi-file-document-multiple',
                    route: 'categories'
                },
                {
                    text: 'Konten',
                    mdi: 'mdi-piggy-bank',
                    route: 'accounts'
                },
                {
                    text: 'Einstellungen',
                    mdi: 'mdi-cog',
                    route: 'config'
                }
            ]
        };
    }
};
</script>
