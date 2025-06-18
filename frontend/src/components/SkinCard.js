export default function SkinCard({ skin }) {
  return (
    <div className="card mb-3">
      <img src={skin.images.smallIcon} className="card-img-top" alt="Skin Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{skin.name}</h5>
        <p className="card-text">{skin.description == "null" ? "Sem descrição" : skin.description}</p>
        <p className="card-text">
          <small className="text-muted">Raridade: {skin.rarity.displayValue}</small>
        </p>
      </div>
    </div>
  );
}