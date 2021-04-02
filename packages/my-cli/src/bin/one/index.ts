
export interface OneOptions {
  test: boolean;
}

const main = (opt: OneOptions) => {
  console.log('run one!', opt.test);
  console.log(opt);
}

export default main;
