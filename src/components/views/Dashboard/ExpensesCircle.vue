<template>
    <v-layout
        justify-center
    >
        <vue-ellipse-progress
            :key="ellipseKey"
            :progress="ellipseProgress"
            :legend="false"
            :loading="false"
            :color="progressColor"
            :size="ellipseSize"
        >
            <div slot="legend-caption">
                <span
                    class="green--text text--lighten-1"
                    :class="textSize.title"
                >
                    {{ moneyEarned }}
                </span>
                <v-spacer />
                <span class="subtitle-1 red--text text--lighten-1" :class="textSize.subtitle">
                    {{ moneySpend }}
                </span>
            </div>
        </vue-ellipse-progress>
    </v-layout>
</template>

<script>

const textBreakpoint = 650;
const ellipseLimits = {
    min: 350,
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
            },
            money: {
                earned: 500.00,
                spend: 375.00
            }
        };
    },
    computed: {
        moneyEarned()
        {
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'})
                .format(this.money.earned);
        },
        moneySpend()
        {
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'})
                .format(this.money.spend);
        },
        ellipseProgress()
        {
            const {earned, spend} = this.money;
            return (spend / earned) * 100;
        },
        ellipseSize()
        {
            let {width} = this.window;

            width = (width < ellipseLimits.min) ? ellipseLimits.min : width;
            width = (width > ellipseLimits.max) ? ellipseLimits.max : width;

            return width * 0.8;
        },
        textSize()
        {
            const {width} = this.window;

            return {
                title: width > textBreakpoint ? 'text-h1' : 'text-h2',
                subtitle: width > textBreakpoint ? 'text-h3' : 'text-h4'
            };
        },
        balancePositive()
        {
            const {earned, spend} = this.money;
            return earned > spend;
        },
        progressColor()
        {
            return this.balancePositive ? '#4caf50' : '#f44336';
        }
    },
    mounted()
    {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize()
        {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            this.reRenderProgress();
        },
        reRenderProgress()
        {
            this.ellipseKey++;
        }
    }
};
</script>
