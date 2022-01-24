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
              <div className="container" sx={styles.cards}>
              <Flex>
                  {posts && posts.map( (post) => ( 
                    <Box p={2}  >
                    <Card
                      sx={{
                        maxWidth: 256,
                      }}
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

const styles = {
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
}
