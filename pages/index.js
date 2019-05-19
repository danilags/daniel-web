import React from 'react';
import styled from 'styled-components';

import { initGA, logPageView  } from '../analytics';


class Index extends React.Component {

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      // initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Daniel Agus Sidabutar, Frontend & Backend Developer Jakarta | danilags</title>
        <link rel="stylesheet" type='text/css' href='/static/index.css' />
        <link rel="canonical" href="https://www.danilags.com" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Daniel Agus Sidabutar, Frontend & Backend Developer Jakarta | danilags" />
        <meta name="description" content="Software Engineer, Frontend Developer, Backend Developer, Software Developer Jakarta 'Full Stack Engineer' | danilags" />
        
        <meta property="og:title" content="Daniel Agus Sidabutar, Frontend & Backend Developer Jakarta | danilags" />
        <meta name="og:description" content="Software Engineer, Frontend Developer, Backend Developer, Software Developer Jakarta 'Full Stack Engineer' | danilags" />
        <meta property="og:site_name" content="DANILAGS" />
        <meta property="og:url" content="https://www.danilags.com" />
        <meta property="og:image" content="https://avatars2.githubusercontent.com/u/19871120?s=460&v=4" />
        <meta name="twitter:site" content="@danil_ags" />
        <div style={{ 
          width: '80%',
          margin: '0 auto',
          display: 'flex', 
          flexDirection: 'column', 
          textAlign: 'center', 
          fontFamily: 'Futura',
          justifyContent: 'center',
          padding: '10px',
          fontFamily: "'Roboto', sans-serif"
        }}>
          <figure className="swing-danilags" style={{ width: 200, margin: '0 auto' }}>
            <Image style={{ width: '100%', borderRadius: '50%' }} src="https://avatars2.githubusercontent.com/u/19871120?s=460&v=4" />
          </figure>
          <h1 style={{ fontSize: 20, color: '#4a4a4a' }}>I’m professionally experienced in web & mobile applications that capable of doing full stack development</h1>
          <p>Daniel Agus Sidabutar - Frontend and Backend Engineer</p>
          <p>
            @danilags Software Engineer who's passionate about programming, technology, and trying out new things. 
          </p>
          <p>(Working on React, React Native and Node.JS)</p>
          <div
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              textAlign: 'center', 
              // fontFamily: 'Futura',
              justifyContent: 'space-around',
              width: '50%',
              margin: '0 auto',
              padding: '0 10px'
            }}
          >
            <a href="https://github.com/danilags">
              <p style={{ padding: '0 10px' }}>
                GitHub 
              </p>
            </a>
            <a href="https://medium.com/@danilags">
              <p style={{ padding: '0 10px' }}>
                Medium 
              </p>
            </a>
            <a href="https://www.linkedin.com/in/daniel-agus-sidabutar-0324b6106/">
              <p style={{ padding: '0 10px' }}>
                LinkedIn 
              </p>
            </a>
            <a href="https://twitter.com/danil_ags">
              <p style={{ padding: '0 10px' }}>
                Twitter 
              </p>
            </a>
          </div>
          
        </div>
      </div>
    )
  }
}

const ImageWrapper = styled.span`
  width: 200px !important;
  height: auto;
  margin: 0 auto;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  // border-radius: 50%;
`;

export default Index;