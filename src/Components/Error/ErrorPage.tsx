
interface Props {
  onRefresh: () => void;
}

function ErrorPage({ onRefresh }: Props) {
return <button onClick={onRefresh}>Reload</button>;
};

export default ErrorPage;
