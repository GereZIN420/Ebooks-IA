import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/favicon.svg',
  url,
  type = 'website'
}) => {
  const baseTitle = 'eBooks IA - Domine a Nova Economia'
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
  const baseUrl = 'https://ebooksIA.com' // Substitua pela URL real
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />

      {/* Descrição */}
      <meta name="description" content={description} />

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="eBooks IA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Outras meta tags importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Meraki Group" />

      {/* Schema.org para Google+ */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullImage} />
    </Helmet>
  )
}

export default SEO