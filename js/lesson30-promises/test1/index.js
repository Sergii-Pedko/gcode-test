export const addImage = src => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.src = src;
    imgElem.setAttribute('alt', 'My img');

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImgLoad = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImgLoad);

    const onImgLoadError = () => reject(new Error('Image load is failed'));

    imgElem.addEventListener('error', onImgLoadError);
  });

  return p;
};

addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
  .then(data => {
  const imageSizeElem = document.querySelector('.image-size');
  imageSizeElem.textContent = `${data.width} x ${data.height}`;
}).catch(error => console.log(error));


