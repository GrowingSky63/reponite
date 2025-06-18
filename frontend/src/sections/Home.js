import DevCard from '../components/DevCard';

export default function Home() {
  // Dados dos desenvolvedores
  const developers = [
    {
      name: "Eric Verschoor",
      email: "63eric36@gmail.com",
      github: "GrowingSky63",
      photo: "/eric.jpg"
    },
    {
      name: "Tatsuo Ohata",
      email: "tatsuoohata@gmail.com", 
      github: "DevTatsuo",
      photo: "/tatsuo.jpg"
    },
    {
      name: "Felipe da Silva Mattos",
      email: "...",
      github: "tiquinho6969",
      photo: "/felipe.jpg"
    },
    {
      name: "Andre Aires",
      email: "andreairesgg@gmail.com",
      github: "AiresxAndre",
      photo: "/andre.jpg"
    },
    {
      name: "Nicolas Casito",
      email: "...",
      github: "CasitoDev",
      photo: "nicolas.jpg"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 text-primary">Bem-vindo ao Reponite</h1>
          <p className="lead text-muted">
            Explore o universo Fortnite com informações sobre skins e itens da loja
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* Seção Skins */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <i className="fas fa-palette fa-3x text-info mb-3"></i>
                <h3 className="card-title text-info">Skins</h3>
              </div>
              <p className="card-text flex-grow-1">
                Navegue por todas as skins disponíveis no Fortnite. Use o filtro por tipo
                para encontrar exatamente o que você procura - desde personagens até
                picaretas e planadores.
              </p>
              <div className="mt-auto">
                <h6 className="text-muted mb-2">Recursos disponíveis:</h6>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Filtro por tipo de item
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Paginação inteligente
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Informações de raridade
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Imagens em alta qualidade
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/skins" className="btn btn-info btn-lg">
                    Explorar Skins
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Shop */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <div className="text-center mb-3">
                <i className="fas fa-shopping-cart fa-3x text-warning mb-3"></i>
                <h3 className="card-title text-warning">Shop</h3>
              </div>
              <p className="card-text flex-grow-1">
                Veja os itens atualmente disponíveis na loja do Fortnite.
                Acompanhe preços, promoções e a disponibilidade de cada item
                antes que saiam da rotação.
              </p>
              <div className="mt-auto">
                <h6 className="text-muted mb-2">Recursos disponíveis:</h6>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Preços atualizados
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Indicação de descontos
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Data de disponibilidade
                  </li>
                  <li>
                    <i className="fas fa-check text-success me-2"></i>
                    Bundles e itens individuais
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/shop" className="btn btn-warning btn-lg">
                    Ver Loja Atual
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de informações adicionais */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h4 className="card-title mb-3">Como usar o Reponite</h4>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <i className="fas fa-search fa-2x text-primary mb-2"></i>
                  <h6>Explore</h6>
                  <p className="small text-muted">
                    Use os filtros e navegação para encontrar skins específicas
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-eye fa-2x text-primary mb-2"></i>
                  <h6>Visualize</h6>
                  <p className="small text-muted">
                    Veja detalhes, imagens e informações de cada item
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-clock fa-2x text-primary mb-2"></i>
                  <h6>Acompanhe</h6>
                  <p className="small text-muted">
                    Fique por dentro da rotação da loja e novos lançamentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção da Equipe de Desenvolvimento */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Nossa Equipe</h2>
          <p className="text-muted">Conheça os desenvolvedores por trás do Reponite</p>
        </div>
      </div>
      
      <div className="row dev-card-container">
        {developers.map((developer, index) => (
          <DevCard key={index} developer={developer} />
        ))}
      </div>
    </div>
  );
}