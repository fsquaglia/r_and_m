import Cards from "./Cards";
export default function Home({ characters, onClose }) {
  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}