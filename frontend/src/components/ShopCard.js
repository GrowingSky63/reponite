import './ShopCard.css'
export default function ShopCard({ shopItem }) {
  const {
    brItems = [],
    finalPrice,
    regularPrice,
    bundle,
    banner,
    colors,
    outDate,
    newDisplayAsset
  } = shopItem;

  const primaryItem = brItems[0];
  const hasDiscount = banner && regularPrice > finalPrice;
  const discountPercentage = hasDiscount 
    ? Math.round(((regularPrice - finalPrice) / regularPrice) * 100)
    : 0;

  const formatPrice = (price) => {
    return price?.toLocaleString('pt-BR') || '0';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getItemImage = () => {
    if (bundle?.image) return bundle.image;
    if (newDisplayAsset?.renderImages?.[0]?.image) return newDisplayAsset.renderImages[0].image;
    if (primaryItem?.images?.featured) return primaryItem.images.featured;
    if (primaryItem?.images?.icon) return primaryItem.images.icon;
    return '/placeholder-image.png';
  };

  const getBackgroundStyle = () => {
    if (colors) {
      return {
        background: `linear-gradient(135deg, #${colors.color1} 0%, #${colors.color3 || colors.color2} 100%)`
      };
    }
    return {};
  };

  const getRarityColor = (rarity) => {
    const rarityColors = {
      common: '#95a5a6',
      uncommon: '#2ecc71',
      rare: '#3498db',
      epic: '#9b59b6',
      legendary: '#f39c12',
      mythic: '#e74c3c',
      dc: '#0078ff',
      icon: '#00d4ff'
    };
    return rarityColors[rarity] || '#95a5a6';
  };

  return (
    <div className="card shop-card h-100" style={getBackgroundStyle()}>
      {hasDiscount && (
        <div className="discount-banner">
          -{discountPercentage}%
        </div>
      )}
      
      <div className="card-body d-flex flex-column">
        <div className="item-image-container mb-3">
          <img
            src={getItemImage()}
            alt={bundle?.name || primaryItem?.name || 'Shop Item'}
            className="item-image"
            onError={(e) => {
              e.target.src = '/placeholder-image.png';
            }}
          />
        </div>
        
        <div className="item-info flex-grow-1">
          <h6 className="item-name mb-2">
            {bundle?.name || primaryItem?.name || 'Unknown Item'}
          </h6>
          
          {bundle?.info && (
            <span className="badge badge-bundle mb-2">{bundle.info}</span>
          )}
          
          {primaryItem?.type && (
            <p className="item-type mb-2">
              {primaryItem.type.displayValue}
            </p>
          )}
          
          {primaryItem?.rarity && (
            <div className="rarity-indicator mb-2">
              <span 
                className="rarity-badge"
                style={{ backgroundColor: getRarityColor(primaryItem.rarity.value) }}
              >
                {primaryItem.rarity.displayValue}
              </span>
            </div>
          )}
          
          {brItems.length > 1 && (
            <p className="items-count mb-2">
              +{brItems.length - 1} {brItems.length === 2 ? 'item adicional' : 'itens adicionais'}
            </p>
          )}
        </div>
        
        <div className="price-section mt-auto">
          <div className="price-container">
            {hasDiscount && (
              <span className="original-price">
                {formatPrice(regularPrice)} V-Bucks
              </span>
            )}
            <span className="final-price">
              {formatPrice(finalPrice)} V-Bucks
            </span>
          </div>
        </div>
        
        <div className="availability-info mt-2">
          <small className="text-light">
            Disponível até: {formatDate(outDate)}
          </small>
        </div>
      </div>
    </div>
  );
}