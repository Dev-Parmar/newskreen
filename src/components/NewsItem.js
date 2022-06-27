import { Button } from "@mui/material";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

function NewsItem(props) {

    return (

        <Card sx={{ maxWidth: 345, border: 1, borderColor: deepPurple[500] }}>
            <CardMedia
                component="img"
                image={!props.imgURL ? 'https://i.ibb.co/d5fKBwb/default.png' : props.imgURL}
                alt="..."
                sx={{
                    mx: 'auto',
                    borderBottom: 1,
                    borderColor: deepPurple[500]
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" >
                    {props.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={props.newsURL} target='_blank' variant="contained" color="secondary" sx={{ marginRight: 3 }}>Read More</Button>
            </CardActions>
        </Card>

    );

}

export default NewsItem;
