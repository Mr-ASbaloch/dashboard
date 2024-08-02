import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <div>
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/restaurant')}>Restaurant</button>
            <button onClick={() => handleNavigation('/bill')}>Bill</button>
            <button onClick={() => handleNavigation('/settings')}>Settings</button>
        </div>
    );
};

export default Page;