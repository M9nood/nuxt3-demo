<template>
    <div>
        <LabelTitle>Welcome Nuxt3.</LabelTitle>
        <LabelTimer :timer="timer.time"></LabelTimer>
        <a @click="reload" class="btn">Refresh Data</a>
        <pre>{{ resData }}</pre>
        <div>
            <div style="width: 100%; display: flex">
			<textarea v-model="formConfigString" cols="30" rows="5" style="width: 50%"></textarea>
			<finno-form-editor style="width: 50%" :form-config-string="formConfigString"></finno-form-editor>
            <!-- <finno-lead-form form-code="form1"></finno-lead-form> -->
		</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const timer = useTimer()
const formConfigString = `{
    "inputs": [
      {
          "id": 1,
          "name": "firstname",
          "label": "ชื่อ",
          "type": "text",
          "required": true,
          "placeholder": "กรุณาระบุชื่อ",
          "warning_text": "ข้อมูลชื่อไม่ถูกต้อง",
          "styles": {
              "size": "small",
              "font_weight": "bold"
          }
      }
  ]
  }`

const { data: resData, refresh: refreshMe} = await useFetch('/api/me')

function reload(){
    refreshMe()
}

</script>

<style scoped>
.btn {
    color: orange;
    text-decoration: underline;
}
</style>