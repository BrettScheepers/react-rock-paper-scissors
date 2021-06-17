const options = [
    {
        name: 'rock',
        img: {
            src: './images/icon-rock.svg',
            alt: 'Rock'
        },
        strong: ['scissors', 'lizard'],
    },
    {
        name: 'paper',
        img: {
            src: './images/icon-paper.svg',
            alt: 'Rock'
        },
        strong: ['rock', 'spock'],
    },
    {
        name: 'scissors',
        img: {
            src: './images/icon-scissors.svg',
            alt: 'Scissors'
        },
        strong: ['paper', 'lizard'],
    },
    {
        name: 'lizard',
        img: {
            src: './images/icon-lizard.svg',
            alt: 'Lizard'
        },
        strong: ['spock', 'paper'],
    },
    {
        name: 'spock',
        img: {
            src: './images/icon-spock.svg',
            alt: 'Spock'
        },
        strong: ['scissors', 'rock'],
    },
]

export default options;