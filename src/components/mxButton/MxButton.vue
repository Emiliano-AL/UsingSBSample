<template>
  <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  >
    Button
  </button>
</template>

<script>
export default {
  name: "MxButton",
  props: {
    text: { type: String, default: "" },
    isLoading: { type: Boolean, default: false },
    color: { type: String, default: "blue" },
  },
};
</script>
