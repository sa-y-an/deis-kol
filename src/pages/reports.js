import React from 'react';
import Layout from '../components/Layout2.js'
import { Container, Box} from 'theme-ui';

export default function reports() {
  return (
      
        <Layout>
            <br /><br /><br /><br /><br /><br /><br />
          <Container>
            <div className="container" style={{minHeight : "60vh",width : "100vw"}}>
              <h2>
                Year Wise Annual Reports
              </h2>
              <Box p={2}>

                <table style={{  border: "1px solid black", padding:"2px"}}>
                  <tbody style={{padding:"5px"}} >
                    <tr style={{padding:"5px"}}>
                      <th style={{  border: "1px solid black",}}>
                        Year
                      </th>
                      <th style={{  border: "1px solid black",}}>
                        Link
                      </th>
                    </tr>
                    <tr style={{padding:"5px"}}>
                      <td style={{  border: "1px solid black",padding:"10px"}}>
                        2019
                      </td>
                      <td style={{  border: "1px solid black", padding:"10px"}}>
                        <a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">Annual Report 2018</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </Box>
            </div>
          </Container>
          <hr />
        </Layout>      
      
  );
}

