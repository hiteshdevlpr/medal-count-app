export default function ErrorMessage({ message }: { message: string }) {
  return <div className="text-red-600 text-lg">{message}</div>;
}