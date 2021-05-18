export default function ClassNames(...classes: Array<any>): string {
  return classes.filter(Boolean).join(" ");
}
