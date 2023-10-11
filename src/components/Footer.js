import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/?locale=es_LA' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/?lang=es' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 CLOTHING-STORE 
        <a className='text-white' href='https://github.com/'><br/>
          GitHub
        </a>
      </div>
    </MDBFooter>
  );
}

