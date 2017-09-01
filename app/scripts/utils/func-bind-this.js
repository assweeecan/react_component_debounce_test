export default function funcBindThis(this1) {
  return function (target, key, descriptor) {
    console.log(target);
  };
}
