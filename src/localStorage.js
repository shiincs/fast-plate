function setRecentView(data) {
  if (!localStorage.getItem('recent')) {
    localStorage.setItem('recent', JSON.stringify([data]));
  } else {
    let tempArr = JSON.parse(localStorage.getItem('recent'));
    if (tempArr.every(item => JSON.stringify(item) !== JSON.stringify(data))) {
      tempArr.unshift(data);
      localStorage.setItem('recent', JSON.stringify(tempArr));
    } else if (
      tempArr.some(item => JSON.stringify(item) === JSON.stringify(data))
    ) {
      const sameIdx = tempArr.findIndex(
        item => JSON.stringify(item) === JSON.stringify(data)
      );
      tempArr.splice(sameIdx, 1);
      tempArr.unshift(data);
      localStorage.setItem('recent', JSON.stringify(tempArr));
    }
  }
}

export { setRecentView };
