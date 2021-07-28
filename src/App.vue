<template>
  <v-app>
    <v-main>
      <v-row class="mt-5">
        <v-col cols="2">
          <v-navigation-drawer style="width: 100%; align-items: center">
            <v-list>
              <v-list-item>
                <v-list-item-avatar style="margin: 0" width="75" height="75">
                  <v-img :src="require('./assets/joram.png')" />
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
            <v-list rounded>
              <v-list-item @click="this.getFormData">
                <v-list-item-content>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="10" style="padding-right: 50px">
          <v-card flat class="mx-auto">
            <v-card-title> Formulieren </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="forms"
                hide-default-footer
                :loading="isLoading"
                loading-text="Fetching data..."
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
                </template></v-data-table
              >
            </v-card-text>
            <v-card-actions>
              <v-btn color="green darken-1" text> New </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
    items: [
      {
        title: "Fee Request",
        icon: "mdi-view-dashboard",
        method: () => this.getFormData,
      },
    ],
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Created at", value: "created_on" },
      { text: "Updated at", value: "updated_on" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    forms: [],
    isLoading: true,
  }),
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  created() {
    this.getFormData();
  },
  methods: {
    getFormData: function () {
      this.isLoading = true;

      setTimeout(() => {
        this.axios
          .get("http://localhost:3000/form")
          .then((response) => (this.forms = response.data));
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
