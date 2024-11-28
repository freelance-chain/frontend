import { Link } from "react-router-dom"
import { features, services } from "../../mock_data"

const Services = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-16">
            <div className="lg:w-3/4 flex flex-col">
                <div className="">
                    <h1 className="font-serif text-3xl font-semibold"> Popular Services </h1>
                </div>
                <div className="w-full flex mt-4 lg:mt-8 lg:space-x-4">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.title}`}
                            className="relative w-full lg:w-1/3 overflow-hidden rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                            style={{ height: '18rem' }}
                        >
                            <img
                                src={service.imageUrl}
                                alt={service.id}
                                className="w-full h-full object-cover rounded-lg "
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-start"
                            >
                                <h1 className="text-white text-xl font-bold ml-2 mt-2">{service.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="lg:w-3/4 flex flex-col lg:mt-32">
                <div>
                    <h1 className="font-serif text-3xl font-semibold"> Get access to the best talent in the world </h1>
                </div>
                <div className="w-full flex mt-4 lg:mt-8 lg:space-x-16 items-center justify-center">
                    {features.map((feature) => (
                        <div key={feature.id}>
                            <div className="flex items-center lg:space-x-2">
                                <feature.icon className="text-4xl" />
                                <h1 className="text-xl font-serif"> {feature.title} </h1>
                            </div>
                            <p className="mt-4 text-justify font-roboto"> {feature.desc} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
