import Cards from "./Cards";
export default function Home({ characters, onClose }) {
  return (
    <div style={{ backgroundColor: "#272b33" }}>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}