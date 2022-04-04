class Youtube {
  constructor(key) {
    this.key = key;
    this.GetRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.GetRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(q) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${this.key}`,
      this.GetRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
