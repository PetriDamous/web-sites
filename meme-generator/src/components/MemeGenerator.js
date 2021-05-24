import React, {Component} from 'react';

import Form from './Form';
import Meme from './Meme';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            randomImg: "http://i.imgflip.com/1bij.jpg",
            imgHeight: 320,
            imgWidth: 536,
            txtWidth: 0,
            memeImgs: [],
            topText: "Top Text",
            bottomText: "Bottom Text"
        }
    }

    componentDidMount() {
        const apiUrl = 'https://api.imgflip.com/get_memes';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const memeArray = data.data.memes;
                this.setState({
                    memeImgs: memeArray                    
                })
            });

            this.textControl();

            window.addEventListener('resize', this.textControl);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.textControl);
    }

    textControl = () => {
        const coords = document.querySelector('.meme img').getBoundingClientRect()

        const width = +coords.width.toFixed(0);
        // const height = +coords.height.toFixed(0);

        this.setState({
            txtWidth: width
        });
    }

    roll = (min, max, floatFlag) => {
        let r = Math.random() * (max - min) + min
        return floatFlag ? r : Math.floor(r)
    }

    randomMeme = () => {
        const {memeImgs} = this.state;

        const meme = memeImgs[this.roll(0, memeImgs.length)];

        this.setState({
            randomImg: meme.url,
            imgWidth: meme.width,
            imgHeight: meme.height
        });

        // this.textControl();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.randomMeme();
        this.textControl();
    }

    handleChange = (e) => {        
        const {name, value} = e.target;

        this.setState({
            [name]: value
        }, console.log(this.state))
    }

    render() {
        return(
            <div>
                <Form 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    text={{...this.state}}
                />
                <Meme {...this.state}/>
            </div>
        )
    }
}

export default MemeGenerator;