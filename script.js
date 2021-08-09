const template = `
<div>
<h1>Color Picker Wheel</h1>
  <p>
   Pick out any colour!!
  </p>
  <color-picker :width=300 :height=300 v-model="color">
  </color-picker>
  <div class="selected-color-info">
    <p>Selected color:</p>
    <svg height="32" width="32">
      <circle cx="16" cy="16" r="15" :fill="color" />
    </svg>
  </div>
  
  
  <p>{{ color }}</p>
  <p>
  <br>
   Made with ❤️️ by Ayush
   
  </p>
</div>

`;

new Vue({
  template: template,
  el: "#app",
  data() {
    return {
      color: "#ff6600" };

  } });