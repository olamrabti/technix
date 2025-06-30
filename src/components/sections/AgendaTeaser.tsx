
const AgendaTeaser = () => {
    const agenda = [
        {
            day: 'Day 0',
            date: 'November 30',
            location: 'Casablanca',
            title: 'Welcome & Networking',
            description: 'Opening reception and welcome dinner for early arrivals',
            color: 'bg-primary'
        },
        {
            day: 'Day 1',
            date: 'December 1',
            location: 'UM6P Benguerir',
            title: 'Industry Panels & Keynotes',
            description: 'Expert panels on digital transformation and sustainable manufacturing',
            color: 'bg-accent'
        },
        {
            day: 'Day 2',
            date: 'December 2',
            location: 'UM6P Benguerir',
            title: 'Workshops & Factory Tours',
            description: 'Hands-on workshops and exclusive factory visits',
            color: 'bg-primary'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
                        Agenda Highlights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-left">
                        Three days of intensive learning, networking, and innovation
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {agenda.map((day, index) => (
                        <div
                            key={day.day}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className={`${day.color} text-white p-6 text-center`}>
                                <div className="text-2xl font-bold mb-2">{day.day}</div>
                                <div className="text-lg opacity-90">{day.date}</div>
                                <div className="text-sm opacity-80 mt-2">{day.location}</div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">
                                    {day.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {day.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgendaTeaser;
