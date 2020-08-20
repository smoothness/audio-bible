import * as React from 'react'
import Link from 'gatsby-link'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Proyecto Final de Sistemas Colaborativos</h1>
        <h3>Universidad Cenfotec</h3>
        <p>
          Bienvenido a la{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong>, proyecto para el curso de Sistemas Colaborativos de la Universidad Cenfotec.
          Impartido por el profesor <strong>Raúl Sossa</strong>.
        </p>
        <Link to="/contenidos/">Ir al índice:</Link>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
