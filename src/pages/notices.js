import React from 'react';
import Layout from '../components/layout.js'
import { Container} from 'theme-ui';

export default function notices() {
  return (
      
        <Layout>
            <br /><br /><br /><br /><br /><br /><br />
          <Container>
            <div className="container" style={{minHeight : "60vh",width : "100vw"}}>
              <h2>
                Notices
              </h2>
            </div>
          </Container>
          <hr />
        </Layout>      
      
  );
}

