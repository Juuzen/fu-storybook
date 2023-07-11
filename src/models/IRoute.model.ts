export default interface IRoute {
  url: string
  icon: string
  title: string
  component: () => JSX.Element
}
