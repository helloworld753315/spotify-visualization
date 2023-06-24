type Props = {
  title?: string
  children: string
};

export default function Button(props: Props) {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
}