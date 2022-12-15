import { About } from '../components/About/About';
import { Reviews } from '../components/Reviews/Reviews';
import { Blog } from '../components/Blog/Blog';
import { List } from '../components/List/List';
import { Work } from '../components/Work/Work';

export const Home = () => {
    return (
        <>
            <Work />
            <List />
            <About />
            <Blog />
            <Reviews />
        </>
    );
}
