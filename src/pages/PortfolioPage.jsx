function PortfolioPage () {
  const projects = [
    {
      client: 'PT BCA Finance',
      name: 'KKBSK'
    },
    {
      client: 'PT Jari Solusi International',
      name: 'Jarcoll (Jari Collection)'
    },
    {
      client: 'Galeri24 (Pegadaian)',
      name: 'G24 Audit System'
    },
    {
      client: 'PT BCA Multifinance',
      name: 'Internal Audit Online'
    },
    {
      client: 'PT Link Net',
      name: 'Internal Audit Online'
    },
    {
      client: 'PT BPD DIY',
      name: 'Internal Audit Online'
    },
    {
      client: 'PT BPD Jawa Timur',
      name: 'Kertas Kerja Audit'
    },
    {
      client: 'PT Bussan Auto Finance',
      name: 'BAF Audit System'
    },
    {
      client: 'PT Maybank Indonesia Finance',
      name: 'Internal Audit Online'
    },
    {
      client: 'PT BPRS HIK Parahyangan',
      name: 'Internal Audit Online'
    },
    {
      client: 'PT Nindya Karya',
      name: 'QHSE (Quality, Health, Safety, Environment)'
    },
    {
      client: 'PT Waskita Karya',
      name: 'Digital Marketing, Internal Audit Online'
    }
  ];

  return (
    <div className="bostami-page-content-wrap ">

      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-60">
          <h2 className="page-title">Portfolio</h2>
        </div>
      </div>

      <div className="section-wrapper pl-60 pr-60 pb-60 mb-60">
        <div className="row">

          <div className="col">
            <div className="bostami-section-title-wrap mb-20">
              <h4 className="section-title"><i className="fa-light fa-briefcase"></i>Highlight Projects</h4>
            </div>

            <div className="bostami-card-wrap">
              <div className="row">
                {
                  projects.map((item, i) => {
                    return (
                      <div key={i} className="col-md-6">
                        <div className="bostami-card-item bg-catkrill mb-20">
                          <h6 className="card-title">{ item.name }</h6>
                          <p className="card-text">{ item.client }</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default PortfolioPage