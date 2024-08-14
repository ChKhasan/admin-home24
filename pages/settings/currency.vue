<template lang="html">
  <div>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <TitleBlock title="Валюта" :breadbrumb="['Настройки сайта']" lastLink="Валюта">
        <div class="d-flex">
          <a-button
            v-if="checkAccess('Общие данные', 'POST')"
            class="add-btn add-header-btn btn-primary d-flex align-items-center"
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="uploadLoading"
          >
            <span class="svg-icon" v-html="addIcon" v-if="!uploadLoading"></span>
            Сохранять
          </a-button>
        </div>
      </TitleBlock>
      <div class="container_xl">
        <div class="card_block-form py-5">
          <div
            class="d-flex justify-content-between align-items-center card_header"
          ></div>

          <div class="form-container form-container-ltr">
            <FormTitle title="Обменный курс" />

            <div class="form-block required" style="width: 400px;">
              <el-form-item prop="exchange_rate">
                <el-input type="number" :min="1" v-model="ruleForm.exchange_rate" />
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import LayoutHeaderBtn from "../../components/form/Layout-header-btn.vue";
import TitleBlock from "../../components/Title-block.vue";
import authAccess from "@/mixins/authAccess";
export default {
  layout: "toolbar",
  mixins: [authAccess],
  data() {
    return {
      addIcon: require("../../assets/svg/components/add-icon.svg?raw"),
      addImgIcon: require("../../assets/svg/components/add-img-icon.svg?raw"),
      rules: {
        exchange_rate: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      ruleForm: {
        exchange_rate: 0,
      },
    };
  },
  mounted() {
    this.__GET_SITE_INFO();
  },
  methods: {
    submitForm(ruleForm) {
      const data = {
        ...this.ruleForm,
      };
      this.$refs[ruleForm].validate((valid) => {
        valid ? this.__PUT_SITE_INFO(data) : false;
      });
    },

    async __PUT_SITE_INFO(data) {
      try {
        await this.$store.dispatch("fetchSiteInfo/editCurreny", data);
        await this.$notify({
          title: "Success",
          message: "Упешно изменен",
          type: "success",
        });
      } catch (e) {
        this.statusFunc(e.response);
      }
    },
    async __GET_SITE_INFO(data) {
      try {
        const data = await this.$store.dispatch("fetchSiteInfo/getCurreny");

        const { created_at, id, updated_at, ...rest } = data.data;
        for (let item in this.ruleForm) {
          this.ruleForm[item] = rest[item];
        }
      } catch (e) {
        this.statusFunc(e.response);
      }
    },
    statusFunc(res) {
      switch (res.status) {
        case 422:
          this.$notify.error({
            title: "Error",
            message: "Указанные данные недействительны.",
          });
          break;
        case 500:
          this.$notify.error({
            title: "Error",
            message: "Cервер не работает",
          });
          break;
        case 404:
          this.$notify.error({
            title: "Error",
            message: res.data.errors,
          });
          break;
      }
    },

    toBack() {
      this.$router.push("/contents/feedbacks");
    },
  },

  components: {
    TitleBlock,
    LayoutHeaderBtn,
  },
};
</script>
