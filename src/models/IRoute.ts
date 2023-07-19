export default interface IRoute {
  url: string
  icon: string
  title: string
  subtitle: string
  disabled?: boolean
  component: () => JSX.Element
}
