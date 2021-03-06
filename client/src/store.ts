import Vue from "vue";
import Vuex, { MutationTree, ActionTree } from "vuex";

import { APIConfig } from "./utils/api.utils";
import axios, { AxiosResponse } from "axios";

import { iUser } from "@/models/user.interface";
import { iOrderItem, iOrderSummary } from '@/models';

Vue.use(Vuex);

interface iRootState {
  userToken: string | null;
  user: iUser | null;

  //cart stuff
  CartItems : iOrderItem[] | null;
  CartSummary : iOrderSummary | null;
}

interface iLoginPayload {
  token: string;
  userid: number;
}

const state: iRootState = {
  userToken: null,
  user: null,

  //cart stuff?
  CartItems: null,
  CartSummary: null,
};


const mutations: MutationTree<iRootState> = {
  setUser(state, payload) {
    state.user = payload.user;
  },
  login(state, payload) {
    const { token, user } = payload;
    state.userToken = token;
    state.user = user;
  },
  logout(state) {
    state.userToken = null;
    state.user = null;
  }
};

const actions: ActionTree<iRootState, iRootState> = {
  fetchUser({ commit }, payload) {
    const { userid } = payload;
    return axios
      .get(APIConfig.buildUrl(`/api/users/${userid}`))
      .then((res: AxiosResponse<{ user: iUser }>) => {
        commit("setUser", { user: res.data.user });
        return res.data.user;
      });
  },
  login({ commit, dispatch }, payload) {
    const { user, token } = payload;
    commit("login", { user, token });
  }
};

const getters = {
  isLoggedIn: () => {
    return state.user != null;
  },
  fullName: () => {
    return state.user ? state.user.firstName + " " + state.user.lastName : "undefined";
  },
  //cart stuff
  getCartSummary: () => {
    return state.CartSummary;
  },
  getCartItems: () => {
    return state.CartItems;
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
