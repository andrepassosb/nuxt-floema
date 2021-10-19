export const state = () => ({
  totalPost: [],
  
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
  },
  pushActiveSite(state, payload) {
    state.totalPost.push(payload);
    console.log('push',state.totalPost)
  },
}

export const actions = {
  getPostData(context, [postData]) {
    this.commit("populateActivePost", postData);
  },
  pushPostData(context, postData) {
    this.commit("pushActiveSite", postData);
  },
}
