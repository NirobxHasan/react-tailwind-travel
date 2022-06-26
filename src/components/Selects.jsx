
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import KeyWest from '../assets/keywest.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import SelectCard from './SelectCard';
const Selects = () => {

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SelectCard img={BoraBora} text={'Borabora'}/>
            <SelectCard img={BoraBora2} text={'BoraBora2'}/>
            <SelectCard img={KeyWest} text={'KeyWest'}/>
            <SelectCard img={Maldives} text={'Maldives'}/>
            <SelectCard img={Maldives2} text={'Maldives2'}/>
            <SelectCard img={Maldives3} text={'Maldives3'}/>
        </div>
    );
};

export default Selects;