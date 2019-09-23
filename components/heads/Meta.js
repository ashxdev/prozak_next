import Head from 'next/head'

const defaultMeta = {
  title: 'Прозак - Інформаційний антидепресант',
  keywords:
    'Prozak, прозак, портал про Закарпаття ,прозак, прозак інфо, про закарпаття, прозак інформаційний антидепресант, prozak.info',
  description: 'Інформаційний портал про Закарпаття',
}

const Meta = ({
  title = defaultMeta.title,
  keywords = defaultMeta.keywords,
  description = defaultMeta.description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:site_name"
        content="Prozak.info - Інформаційний антидепресант"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://m.prozak.info" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="http://prozak.info/extension/prozak/design/prozak/images/prozak-info.jpg"
      />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  )
}

export default Meta
