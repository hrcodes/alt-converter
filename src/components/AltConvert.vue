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
      <v-container class="response">
        <span class="responseSpan">{{ charFieldResponse }}</span>
        <v-icon
          v-if="charFieldResponse && charFieldResponse.length"
          @click="copyToClipBoard(charFieldResponse)"
        >
          mdi-content-copy
        </v-icon>
      </v-container>
    </v-card>

    <v-card class="card" elevation="6">
      <v-text-field
        class="textField"
        clearable
        @click:clear="codeField = ''"
        label="Code"
        v-model="codeField"
      ></v-text-field>
      <v-container class="response">
        <span class="responseSpan">{{ codeFieldResponse }}</span>
        <v-icon
          v-if="charFieldResponse && charFieldResponse.length"
          @click="copyToClipBoard(codeFieldResponse)"
        >
          mdi-content-copy
        </v-icon>
      </v-container>
    </v-card>
    <div class="footer">
      <a
        @mouseover="hover = true"
        @mouseleave="hover = false"
        href="https://github.com/hrcodes/alt-converter"
        target="_blank"
        >Powered by hrcodes
        <v-icon class="icon" :class="{ icon_hover: hover }">mdi-github</v-icon>
      </a>
    </div>
  </v-container>
</template>

<script>
import { codeToChar } from "@/components/codeToChar";
import { charToCode } from "@/components/charToCode";

export default {
  name: "AltConvert",

  data: () => ({
    codeField: "",
    charField: "",
    hover: false,
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

<style scoped lang="scss">
.content {
  position: absolute;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;

  margin-bottom: 20px;
}

.textField {
  padding: 20px 20px 0px 20px;
}

.response {
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }

  max-height: 250px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 20px 30px 20px;
  // flex-wrap: wrap;
}

.responseSpan {
  color: white;
  font-size: 20px;
  text-shadow: 1px 2px 10px black;
  max-width: 500px;
  display: block;
}

.footer {
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  font-size: 12px;

  a {
    color: rgba(255, 255, 255, 0.603);
    text-decoration: none;
  }

  a:hover {
    font-weight: bold;
    color: white;
  }

  .icon {
    color: rgba(255, 255, 255, 0.603);
  }

  .icon_hover {
    color: white;
  }
}
</style>
