class Viewer extends React.PureComponent {
    state = {
        index: this.props.index
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey, false);
    }

    handleKey = ({ key }) => {
        if (key === 'ArrowRight') {
            this.flip(1);
        }
        if (key === 'ArrowLeft') {
            this.flip(-1);
        }
    };

    flip(val) {
        this.setState(({ index }) => {
            let target = index + val;
            const { photos } = this.props;
            if (target >= photos.length) {
                target = 0;
            }
            if (target < 0) {
                target = photos.length - 1;
            }
            return { index: target };
        });
    }

    render() {
        const { photos } = this.props;
        const { index } = this.state;
        const { path } = photos[index];
        const url = getUrl(path);
        return (
            <Modal.Content image scrolling>
                <Image wrapped src={url} />
            </Modal.Content>
        );
    }
}

const Photo = ({ path, photos, index }) => {
    const url = getUrl(path);
    return (
        <Modal
            size="fullscreen"
            trigger={<Image rounded src={url} alt="general" />}
            basic
            scrolling
            content={<Viewer photos={photos} index={index} />}
            actions={[{ key: 'done', content: 'OK', positive: true }]}
        />

    );
};

const Carousel = ({ photos }) => (
    <Image.Group size="small">
        {photos && photos.map && photos.map(({ meta: { asset }, path }, index) => (
            <Photo key={asset} path={path} photos={photos} index={index} />
        ))}
    </Image.Group>
);

export default Carousel;