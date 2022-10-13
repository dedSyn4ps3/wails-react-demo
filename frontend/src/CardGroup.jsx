import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import golang from './assets/images/golang.jpg';
import react from './assets/images/react.jpg';
import mdb from './assets/images/mdb.jpg';

export default function CardGroup() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{paddingLeft: 25, paddingRight:25, marginTop:-75}}>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={golang}
            alt='...'
            style={{height:165}}
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Go's Concurrency</MDBCardTitle>
            <MDBCardText>
              The Go programming language has become a dominant backend language for many server-based applications 
              and command line tools alike. It's ability to effectively handle concurrent tasks make it an excellent 
              choice for desktop application development!
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={react}
            alt='...'
            style={{height:165}}
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>React's Flexibility</MDBCardTitle>
            <MDBCardText>
              Take advantage of one of the most popular frontend web frameworks to implement the same flexible 
              components inside your standalone desktop application...
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={mdb}
            alt='...'
            style={{height:150}}
            position='top'
          />
          <hr/>
          <MDBCardBody style={{marginTop:-20}}>
            <MDBCardTitle>Material Design</MDBCardTitle>
            <MDBCardText>
              Create stunning material-themed applications using the MDBootstrap for React design system.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}