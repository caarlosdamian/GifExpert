export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=EokKzAgaDZ5l97Tu29EDePhzay5MnrlJ`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifts = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url,
      };
    });
    return gifts
  };
