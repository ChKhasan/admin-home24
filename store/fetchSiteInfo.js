export const actions = {
  async getSiteInfo({}, payload) {
    const res = await this.$axios.$get(`/info`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editSiteInfo({}, payload) {
    const res = await this.$axios.$put(`/info/1`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getCurreny({}, payload) {
    const res = await this.$axios.$get(`/exchange_rates/1`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editCurreny({}, payload) {
    const res = await this.$axios.$put(`/exchange_rates/1`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
