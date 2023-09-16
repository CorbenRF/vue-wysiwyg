<template>
  <div>
    <div class="flex flex-wrap button-wrapper">
      <button @click="undo" class="button">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6358 19.5824C18.3582 19.86 17.9929 20 17.6299 20C17.2645 20 16.8992 19.86 16.6216 19.5824C16.0664 19.0249 16.0664 18.1257 16.6216 17.5682C19.7604 14.4294 19.7604 9.32384 16.6216 6.18505C13.4852 3.04864 8.37722 3.04864 5.24081 6.18505L4.72598 6.69988H8.12337C8.90866 6.69988 9.54686 7.33808 9.54686 8.12337C9.54686 8.91103 8.90866 9.54686 8.12337 9.54686H1.42349C0.638197 9.54686 0 8.91103 0 8.12337V1.42349C0 0.638197 0.638197 0 1.42349 0C2.20878 0 2.84697 0.638197 2.84697 1.42349V4.55279L3.22657 4.17319C7.47568 -0.0759193 14.3867 -0.0759193 18.6358 4.17319C22.8849 8.4223 22.8849 15.3333 18.6358 19.5824Z"
            fill="#639EFF"
          />
        </svg>
      </button>
      <button @click="redo" class="button">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.18684 19.5824C3.46442 19.86 3.82978 20 4.19277 20C4.55813 20 4.92349 19.86 5.20107 19.5824C5.75624 19.0249 5.75624 18.1257 5.20107 17.5682C2.06229 14.4294 2.06229 9.32384 5.20107 6.18505C8.33749 3.04864 13.4454 3.04864 16.5819 6.18505L17.0967 6.69988H13.6993C12.914 6.69988 12.2758 7.33808 12.2758 8.12337C12.2758 8.91103 12.914 9.54686 13.6993 9.54686H20.3992C21.1845 9.54686 21.8227 8.91103 21.8227 8.12337V1.42349C21.8227 0.638197 21.1845 0 20.3992 0C19.6139 0 18.9757 0.638197 18.9757 1.42349V4.55279L18.5961 4.17319C14.347 -0.0759193 7.43595 -0.0759193 3.18684 4.17319C-1.06227 8.4223 -1.06227 15.3333 3.18684 19.5824Z"
            fill="#639EFF"
          />
        </svg>
      </button>
      <button @click="makeTitle" class="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M24 4.5V7.0075C24 7.8375 23.3317 8.5075 22.5037 8.5075C21.6783 8.5075 21.0075 7.8375 21.0075 7.0075V6H15.4963V23H16.8454C17.6733 23 18.3416 23.6725 18.3416 24.5C18.3416 25.3275 17.6733 26 16.8454 26H11.1546C10.3267 26 9.65835 25.3275 9.65835 24.5C9.65835 23.6725 10.3267 23 11.1546 23H12.5037V6H6.99252V7.0075C6.99252 7.8375 6.3217 8.5075 5.49626 8.5075C4.66833 8.5075 4 7.8375 4 7.0075V4.5C4 3.6725 4.66833 3 5.49626 3H22.5037C23.3317 3 24 3.6725 24 4.5Z"
            fill="#639EFF"
          />
        </svg>
      </button>

      <button class="button" @click="makeText">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M13.4876 9.74158V11.0604C13.4876 11.9872 12.7344 12.7404 11.8076 12.7404C11.004 12.7404 10.332 12.1748 10.1668 11.4216H9.0048V18.5868C9.8476 18.6792 10.5056 19.3932 10.5056 20.2584C10.5056 21.188 9.7524 21.9384 8.8256 21.9384H5.824C4.89439 21.9384 4.14399 21.188 4.14399 20.2584C4.14399 19.3932 4.7992 18.6792 5.64479 18.5868V11.4216H4.48C4.3148 12.1748 3.6428 12.7404 2.8392 12.7404C1.9124 12.7404 1.15919 11.9872 1.15919 11.0604V9.74158C1.15919 8.81198 1.9124 8.06158 2.8392 8.06158H11.8076C12.7344 8.06158 13.4876 8.81198 13.4876 9.74158Z"
            fill="#639EFF"
          />
          <path
            d="M26.9192 9.74158V11.0604C26.9192 11.9872 26.1688 12.7404 25.2392 12.7404C24.4356 12.7404 23.7636 12.1748 23.5984 11.4216H22.4364V18.5868C23.2792 18.6792 23.9372 19.3932 23.9372 20.2584C23.9372 21.188 23.184 21.9384 22.2572 21.9384H19.2556C18.326 21.9384 17.5756 21.188 17.5756 20.2584C17.5756 19.3932 18.2308 18.6792 19.0764 18.5868V11.4216H17.9144C17.7492 12.1748 17.0772 12.7404 16.2708 12.7404C15.344 12.7404 14.5908 11.9872 14.5908 11.0604V9.74158C14.5908 8.81198 15.344 8.06158 16.2708 8.06158H25.2392C26.1688 8.06158 26.9192 8.81198 26.9192 9.74158Z"
            fill="#639EFF"
          />
        </svg>
      </button>

      <button class="button" @click="pastePic">
        <img
          style="position: absolute; top: 0; left: 0"
          src="../assets/pic.png"
          alt="Paste Pic"
        />
      </button>
      <button class="trans-btn" @click="copyHTML">Скопировать HTML</button>
    </div>
    <div
      @input="$emit('update:modelValue', $event.target.innerHTML)"
      contenteditable="true"
      class="editor"
    >
      <p>
        Таким образом консультация с широким активом представляет собой
        интересный эксперимент проверки позиций, занимаемых участниками в
        отношении поставленных задач. С другой стороны постоянное
        информационно-пропагандистское обеспечение нашей деятельности
        представляет собой интересный эксперимент проверки форм развития.
        Идейные соображения высшего порядка, а также укрепление и развитие
        структуры влечет за собой процесс внедрения и модернизации
        соответствующий условий активизации. Задача организации, в особенности
        же реализация намеченных плановых заданий играет важную роль в
        формировании дальнейших направлений развития. Повседневная практика
        показывает, что постоянное информационно-пропагандистское обеспечение
        нашей деятельности играет важную роль в формировании существенных
        финансовых и административных условий.
      </p>
    </div>
  </div>
</template>
<style>
.editor {
  width: 100%;
  outline: none;
  padding: 30px 0;
  border-radius: 3px;
  color: #eaeaea;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}
.flex {
  display: flex;
  position: relative;
}
.button {
  position: relative;
  width: 42px;
  height: 38px;
  margin-right: 12px;
  border: none;
  border-radius: 4px;
  background: #282828;
  padding: 5px;
  color: #639eff;
}

.trans-btn {
  background-color: transparent;
  border: none;
  color: #639eff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}
.title {
  color: #fff;
  font-family: Roboto;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}

.text {
  color: #eaeaea;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}
.button-wrapper {
  height: 38px;
}
</style>
<script>
export default {
  name: "WysiwygEditor",

  props: ["modelValue"],

  data() {
    return {
      innerValue: this.modelValue,
    };
  },

  methods: {
    onInput(event) {
      this.innerValue = event.target.innerHTML;
      this.$emit("input", event.target.innerHTML);
      this.$emit("update:modelValue", event.target.value);
    },
    undo() {
      document.execCommand("undo");
    },
    redo() {
      document.execCommand("redo");
    },
    makeTitle() {
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
          document.execCommand(
            "insertHTML",
            false,
            `<h3 class="title">${sel}</h3>`
          );
        }
      }
    },
    makeText() {
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
          document.execCommand("insertHTML", false, `<span>${sel}</span>`);
        }
      }
    },
    pastePic() {
      let result = prompt(
        "Введите адрес картинки для вставки",
        "https://shorturl.at/jkNQ4"
      );
      document.execCommand("insertImage", false, result);
    },
    copyHTML() {
      navigator.clipboard.writeText(this.modelValue);
    },
  },
};
</script>
