

const VolunteerNeedsCard = ({needVolunteerData}) => {
const {thumbnail, title, category, deadline} = needVolunteerData || {}
    return (
        <div className="shadow-xl pb-2">
            <img className="max-h-[250px] w-full" src={thumbnail} alt="" />
            <div className="text-center px-2 flex flex-col">
              <div className="flex flex-grow">
              <h2 className="font-bold text-xl mt-2">{title}</h2>
              </div>
                <h2 className="font-semibold mt-2">{category}</h2>
                <p className="mt-2">{deadline}</p>
                <button className="w-full p-4 bg-sky-600">View Details</button>

            </div>
           
        </div>
    );
};

export default VolunteerNeedsCard;