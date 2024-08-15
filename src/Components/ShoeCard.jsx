

const ShoeCard = ({ shoeImage, title, price, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-lg transition duration-300 ease-in-out ${isActive ? 'bg-coral-red text-white' : 'bg-gray-200'}`}
    >
      <img src={shoeImage} alt={title} className='h-20 w-20 object-contain mb-4' />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{price}</p>
    </div>
  );
}

export default ShoeCard;
