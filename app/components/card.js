import { FaMoneyBillWave, FaShoppingBag, FaUtensils, FaTruck, FaDollarSign } from 'react-icons/fa';

const Cards = ({ cards }) => {
  const icons = {
    'Total Sales': <FaMoneyBillWave className="text-[#F0364D]" />,
    'Total Orders': <FaShoppingBag className="text-yellow-500" />,
    'Total Restaurants': <FaUtensils className="text-green-500" />,
    'Total Suppliers': <FaTruck className="text-purple-500" />,
    'Total Earning': <FaDollarSign className="text-blue-500" />,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
      {cards.map((card, index) => (
        <div key={index} className={`p-4 rounded-lg h-[180px] w-[205px] shadow-md ${card.color} hover:translate-y-1`}>
          <div className="flex items-center space-x-2">
            {icons[card.title]}
            <p className="text-lg font-semibold">{card.title}</p>
          </div>
          <p className="text-2xl font-bold mt-2">{card.value}</p>
          <p className="text-sm text-gray-500">{card.change}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
