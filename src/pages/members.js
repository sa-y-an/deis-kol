import React from 'react';
import Layout from '../components/layout.js'
import posts from '../../data/members.js'
import { Card , Image, Text, Flex,Container,Box} from 'theme-ui'

export default function members() {
  return (
      
        <Layout>
          <Container>
            <br /><br /><br /><br /><br /><br /><br />
            <div className="container" style={{minHeight : "60vh",width : "100vw"}}>
              <h2>
                Members 
              </h2>
              <div className="container" >
              <Flex>
                  {posts && posts.map( (post) => ( 
                    <Box p={2}  >
                    <Card
                      sx={{
                        maxWidth: 256,
                      }}
                      className="cards"
                      >
                      <Image src={post.image} />
                      <Text>
                        <ul>
                          <li>
                            {post.Name}
                          </li>
                          <li>
                            {post.Position}
                          </li>
                        </ul>
                      </Text>
                    </Card>
                    </Box>
                      ))}
                     </Flex>
                </div>

            </div>
          </Container>
          <hr />
        </Layout>      
      
  );
}

