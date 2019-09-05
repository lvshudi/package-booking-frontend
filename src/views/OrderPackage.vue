<template>
  <div>
    <h1>包裹入库</h1>

    <a-form>
      <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item
        label="Success"
        has-feedback
        validate-status="success"
      >
        <a-date-picker style="width: 60%" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "packageInput",
  components: {
    HelloWorld
  }
};
</script>