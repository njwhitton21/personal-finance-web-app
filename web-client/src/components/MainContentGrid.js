import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        padding: '2%',
        marginTop: '65px',
    },
    paper: {
        padding: '2%',
    },
    gridList: {
        height: 300,
        background: '#232323'
    },
});

const imageData = [
    {
        name: 'image1',
        imageUrl: 'https://images.hgmsites.net/hug/bmw_100677962_h.jpg',
        cols: 1,
    },
    {
        name: 'image2',
        imageUrl: 'https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/Category_Pages/Motorcycle_Home/image-motorcycle-home-supersport-link-2020-071319.jpg',
        cols: 2,
    },
    {
        name: 'image3',
        imageUrl: 'https://www.motorcycle.com/blog/wp-content/uploads/2020/08/081720-900sComparo-Group_EBB6352_feature-633x388.jpg',
        cols: 3,
    },
    {
        name: 'image4',
        imageUrl: 'https://cars.usnews.com/images/new-features/widget-section/2019_Yamaha_YZF_R1.jpg',
        cols: 2,
    },
    {
        name: 'image5',
        imageUrl: 'https://www.webbikeworld.com/wp-content/uploads/2020/01/20_ZX10R_KRT_Hero1-scaled.jpeg',
        cols: 1,
    }
];

const MainContentGrid = () => {
    const classes = useStyles();
    const [images, setImages] = useState(imageData);  

    const handleClick = (itemName) => {
        let item = images.find((item) => (item.name === itemName));
        item.cols = 3;

        let filteredImages = images.filter((item) => (!(item.name === itemName)));
        filteredImages = filteredImages.map(
            (item) => {
                item.cols = 1;
                return item;
            }
        );
        
        let newImageData = [];
        newImageData.push(item);
        newImageData = newImageData.concat(filteredImages);
        
        setImages(newImageData);
        console.log(newImageData);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" gutterBottom>
                            Heading for Item 1
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" gutterBottom>
                            Heading for Item 2
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}> 
                        {images.map((item) => (
                            <GridListTile key={item.name} cols={item.cols}>
                                <img alt={item.name} src={item.imageUrl} onClick={() => handleClick(item.name)}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainContentGrid;