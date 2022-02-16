import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Slider from './Slider';
import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpg';
import p4 from '../img/p4.jpg';
import { Fade } from 'react-reveal';

export default function Home() {
  return (
    <>
      <Slider></Slider>
      <section id="product-category">
        <div className="product-category">
          <h1>Product Category</h1>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Fade left>
                {' '}
                <Card>
                  <CardActionArea>
                    <CardMedia component="img" image={p2} height={250} />
                  </CardActionArea>
                  <CardActions>
                    <Button fullWidth>
                      <Fade right>MacBook</Fade>
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>

            <Grid item>
              <Fade left>
                {' '}
                <Card>
                  <CardActionArea>
                    <CardMedia component="img" image={p3} height={250} />
                  </CardActionArea>
                  <CardActions>
                    <Button fullWidth>Android</Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>

            <Grid item>
              <Fade left>
                {' '}
                <Card>
                  <CardActionArea>
                    <CardMedia component="img" image={p4} height={250} />
                  </CardActionArea>
                  <CardActions>
                    <Button fullWidth>Laptop</Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </section>

      <div className="customer">
        <h1>About Our Product</h1>
        <p className="text-white p-5">
          <h3>Hello sir,</h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum{' '}
        </p>
      </div>
    </>
  );
}
