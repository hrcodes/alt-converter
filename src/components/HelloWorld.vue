<template>
  <v-container class="content">
    <v-card class="card" elevation="6">
      <v-text-field
        class="textField"
        clearable
        @click:clear="charField = ''"
        label="Text"
        v-model="charField"
      ></v-text-field>
      <div class="response">
        <span>{{ charFieldResponse }}</span>
        <v-icon
          v-if="charFieldResponse?.length"
          @click="copyToClipBoard(charFieldResponse)"
        >
          mdi-content-copy
        </v-icon>
      </div>
    </v-card>

    <v-card class="card" elevation="6">
      <v-text-field
        class="textField"
        clearable
        @click:clear="codeField = ''"
        label="Code"
        v-model="codeField"
      ></v-text-field>
      <div class="response">
        <span>{{ codeFieldResponse }}</span>
        <v-icon
          v-if="charFieldResponse?.length"
          @click="copyToClipBoard(codeFieldResponse)"
        >
          mdi-content-copy
        </v-icon>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { codeToChar } from "@/components/codeToChar";
import { charToCode } from "@/components/charToCode";

export default {
  name: "HelloWorld",

  data: () => ({
    codeField: "",
    charField: "",
  }),

  computed: {
    charFieldResponse() {
      if (!this.charField) {
        return;
      }
      return charToCode(this.charField);
    },
    codeFieldResponse() {
      if (!this.codeField) {
        return;
      }
      return codeToChar(this.codeField);
    },
  },
  methods: {
    copyToClipBoard(textToCopy) {
      navigator.clipboard.writeText(textToCopy);
    },
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.textField {
  padding: 20px 20px 0px 20px;
}

.response {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 30px 20px;
}
</style>
