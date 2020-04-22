<template>
  <v-container class="lighten-5">
      
<!-- 메시지 알림 -->
<v-row class="item" justify="center">
<v-btn
dark
color="red darken-2"
@click="snackbar = true"
>
Open Alert
</v-btn>

<v-snackbar
v-model="snackbar"
:multi-line="multiLine"
>
{{ text }}
<v-btn
color="red"
text
@click="snackbar = false"
>
Close
</v-btn>
</v-snackbar>
</v-row>

<!-- Dialog || Popup -->
<v-row class="item" justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
        <v-card-title>
        <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
        <v-container>
            <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
                ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
                ></v-autocomplete>
            </v-col>
            </v-row>
        </v-container>
        <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</v-row>


<!-- Data Picker -->
<v-row class="item" justify="center">
    <v-col cols="12" sm="6" md="3">
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
    >
        <template v-slot:activator="{ on }">
        <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
        ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
    </v-menu>
    </v-col>
</v-row>

<!-- 심플 차트 -->
<v-row class="item" justify="center">
    <v-card
class="mt-4 mx-auto"
max-width="600"
>
<v-sheet
class="v-sheet--offset mx-auto"
color="cyan"
elevation="12"
max-width="calc(100% - 32px)"
>
<v-sparkline
:labels="labels"
:value="value"
color="white"
line-width="2"
padding="16"
></v-sparkline>
</v-sheet>

<v-card-text class="pt-0">
<div class="title font-weight-light mb-2">User Registrations</div>
<div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
<v-divider class="my-2"></v-divider>
<v-icon
class="mr-2"
small
>
mdi-clock
</v-icon>
<span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
</v-card-text>
</v-card>
</v-row>

<!-- 테이블 -->
<v-row class="item" justify="center">
        <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
</v-row>
    
  </v-container>
</template>

<script>
export default {
    data () {
        return {
          headers: [
            {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
            {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            },
            {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            },
            {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            },
            {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            },
            {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
            },
            {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
            },
            {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
            },
            {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
            },
            {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
            },
            {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            },
        ],
            labels: [
            '12am',
            '3am',
            '6am',
            '9am',
            '12pm',
            '3pm',
            '6pm',
            '9pm',
            ],
            value: [
            200,
            675,
            410,
            390,
            310,
            460,
            250,
            240,
            ],
            multiLine: true,
            snackbar: false,
            text: "경고 메시지 알림",
            dialog:false,
            date: new Date().toISOString().substr(0, 10),
        }
    },
    computed: {
        numberOfPages () {
            return Math.ceil(this.items.length / this.itemsPerPage)
        },
        filteredKeys () {
            return this.keys.filter(key => key !== `Name`)
        },
    },
    methods: {
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage (number) {
            this.itemsPerPage = number
        }
    },
    created() {
        
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    destroyed() {
        console.log('destroyed')
    }
}
</script>

<style scoped>
.item {
    margin-top : 2em;
}
</style>
