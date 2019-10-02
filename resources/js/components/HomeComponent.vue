<template>
    <div>
        <div class="row justify-content-left">
            <h1>This is Header</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Home Component</div>

                    <div class="card-body">
                        I'm the Home Component component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<!--<template>-->
<!--    <v-row>-->
<!--        <v-alert>-->
<!--            I'm a basic alert component.-->
<!--        </v-alert>-->

<!--        <v-bottom-navigation-->
<!--            :value="activeBtn"-->
<!--            color="deep-purple accent-4"-->
<!--        >-->
<!--            <v-btn>-->
<!--                <span>Recents</span>-->
<!--                <v-icon>mdi-history</v-icon>-->
<!--            </v-btn>-->

<!--            <v-btn>-->
<!--                <span>Favorites</span>-->
<!--                <v-icon>mdi-heart</v-icon>-->
<!--            </v-btn>-->

<!--            <v-btn>-->
<!--                <span>Nearby</span>-->
<!--                <v-icon>mdi-map-marker</v-icon>-->
<!--            </v-btn>-->
<!--        </v-bottom-navigation>-->

<!--            <v-simple-table>-->
<!--                <template v-slot:default>-->
<!--                    <thead>-->
<!--                    <tr>-->
<!--                        <th class="text-left">Name</th>-->
<!--                        <th class="text-left">Calories</th>-->
<!--                    </tr>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                    <tr v-for="item in desserts" :key="item.name">-->
<!--                        <td>{{ item.name }}</td>-->
<!--                        <td>{{ item.calories }}</td>-->
<!--                    </tr>-->
<!--                    </tbody>-->
<!--                </template>-->
<!--            </v-simple-table>-->
<!--    </v-row>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                activeBtn: 1,-->
<!--                desserts: [-->
<!--                    {-->
<!--                        name: 'Frozen Yogurt',-->
<!--                        calories: 159,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Ice cream sandwich',-->
<!--                        calories: 237,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Eclair',-->
<!--                        calories: 262,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Cupcake',-->
<!--                        calories: 305,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Gingerbread',-->
<!--                        calories: 356,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Jelly bean',-->
<!--                        calories: 375,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Lollipop',-->
<!--                        calories: 392,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Honeycomb',-->
<!--                        calories: 408,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Donut',-->
<!--                        calories: 452,-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'KitKat',-->
<!--                        calories: 518,-->
<!--                    },-->
<!--                ],-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->

