<template lang="html">
    <div>
        test
    </div>
</template>
<script>
export default {
    async asyncData($nuxt) {
    try {
      // Your code that may throw an error
      const data = await fetchData();

      return { data };
    } catch (err) {
      // Trigger the error layout
      $nuxt.error({ statusCode: err.statusCode || 500, message: err.message });
    }
  },
}
</script>
