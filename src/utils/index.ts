export const debounce = (func: (...props: any[]) => void, delay: number = 300) => {
  let timer: NodeJS.Timeout;

  return (...props: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...props), delay);
  };
};
