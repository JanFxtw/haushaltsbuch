<template>
    <v-layout
        justify-center
    >
        <vue-ellipse-progress
            :key="ellipseKey"
            :progress="50"
            :legend="false"
            :loading="false"
            :size="ellipseSize"
        >
            <div slot="legend-caption">
                <span class="display-1 green--text text--lighten-1">
                    {{ moneyEarned }}
                </span>
                <v-spacer />
                <span class="subtitle-1 red--text text--lighten-1">
                    {{ moneySpend }}
                </span>
            </div>
        </vue-ellipse-progress>
    </v-layout>
</template>

<script>

const ellipseLimits = {
    min: 450,
    max: 800
};

export default {
    name: 'ExpensesCircle',
    data()
    {
        return {
            ellipseKey: 0,
            window: {
                width: 0,
                height: 0
            }
        };
    },
    computed: {
        moneyEarned()
        {
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'})
                .format(500.20);
        },
        moneySpend()
        {
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'})
                .format(200.32);
        },
        ellipseSize()
        {
            let {width} = this.window;

            width = (width < ellipseLimits.min) ? ellipseLimits.min : width;
            width = (width > ellipseLimits.max) ? ellipseLimits.max : width;

            return width * 0.8;
        }
    },
    mounted()
    {
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize()
        {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            this.ellipseKey++;
        }
    }
};
</script>
