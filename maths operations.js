function iceBrickVolume(radius, bottleLength, rimLength) {
    let d = radius * 2;
    return (Math.pow(d, 2) / 2) * (bottleLength - rimLength) ;
  }