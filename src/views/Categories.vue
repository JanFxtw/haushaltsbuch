<template>
    <div
        class="categories overflow-y-auto"
        :style="{height: elementHeight}"
    >
        <v-list>
            <v-subheader>Einnahmen</v-subheader>
            <v-list-item-group
                v-model="selectedIncomeCategory"
                color="primary"
            >
                <v-list-item
                    v-for="(item, i) in incomeCategories"
                    :key="i"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name" />
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <v-list>
            <v-subheader>Ausgaben</v-subheader>
            <v-list-item-group
                v-model="selectedSpendingCategory"
                color="primary"
            >
                <v-list-item
                    v-for="(item, i) in spendCategories"
                    :key="i"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name" />
                        <v-list-item-subtitle v-text="item.text" />
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
const barHeight = 56;

export default {
    name: 'Categories',
    data()
    {
        return {
            selectedIncome: null,
            selectedSpending: null,
            incomeCategories: [
                {
                    name: 'Gehalt',
                    icon: 'mdi-briefcase'
                },
                {
                    name: 'Selbstständigkeit',
                    icon: 'mdi-domain'
                },
                {
                    name: 'Verkäufe',
                    icon: 'mdi-cash-multiple'
                },
                {
                    name: 'Dividende & Zinsen',
                    icon: 'mdi-cash-multiple'
                }
            ],
            spendCategories: [
                {
                    name: 'Miete',
                    icon: 'mdi-home',
                    text: 'asd'
                },
                {
                    name: 'Lebensmittel',
                    icon: 'mdi-noodles'
                },
                {
                    name: 'Verkehrsmittel',
                    icon: 'mdi-train'
                },
                {
                    name: 'Kleidung',
                    icon: 'mdi-shopping'
                },
                {
                    name: 'Gesundheit',
                    icon: 'mdi-hospital-box'
                },
                {
                    name: 'Kunst & Kultur',
                    icon: 'mdi-palette'
                }
            ]
        };
    },
    computed: {
        elementHeight()
        {
            return `${window.innerHeight - (barHeight * 2)}px`;
        },
        selectedIncomeCategory: {
            get()
            {
                return this.selectedIncome;
            },
            set(value)
            {
                this.selectedIncome = value;
                this.selectedSpending = null;
            }
        },
        selectedSpendingCategory: {
            get()
            {
                return this.selectedSpending;
            },
            set(value)
            {
                this.selectedSpending = value;
                this.selectedIncome = null;
            }
        }
    }
};
</script>
