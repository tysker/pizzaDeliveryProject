import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "ccc765ecfa02fd47ec62f3d504d6fa3e";
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}

