import {
  refs
} from './firebase';

const moverAmount = 3;
const updateFreq = 5;

const startMove = (params) => {
  setInterval(() => {
    console.log(params);
  }, updateFreq * 1000);
};

refs.user.root.once('value')
  .then((snap) => {
    const user = Object.keys(snap.val());
    if (user.length > moverAmount) {
      return user.slice(0, moverAmount);
    }
    return user;
  })
  .then(startMove)
  .catch(console.log);
