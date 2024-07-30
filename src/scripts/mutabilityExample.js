const mutabilityExample = () => {
  const a = new Date();
  a.toISOString();
  console.log('a before setMonth', a);
  a.setMonth(11);
  a.toISOString();
  return a;
}

console.log('mutabilityExample', mutabilityExample());