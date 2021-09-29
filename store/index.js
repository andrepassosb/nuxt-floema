export const state = () => ({
  totalPost: []
})
export const getters = {
  activePostContent: state => {
    console.log('getters',state)
    return state.totalPost;
  },
}

export const mutations = {
  populateActivePost(state, payload) {
    state.totalPost = payload;
    console.log(payload)
  },
}

export const actions = {
  getPostData(context, [postData]) {
    this.commit("populateActivePost", postData);
  },
}
