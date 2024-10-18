import React from 'react';

const TimelineExample: React.FC = () => {
  const events = [
    { title: 'All Hands Meeting', time: '10:00 AM' },
    { title: 'Yet another one, at 10:00 PM', time: '10:00 PM' },
    { title: 'Build the production release', time: '', tag: 'NEW' },
    { title: 'Something not important', time: '' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-4">Timeline Example</h3>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
            <div>
              <p className="font-semibold text-sm md:text-base">{event.title}</p>
              {event.time && <p className="text-xs md:text-sm text-gray-500">{event.time}</p>}
              {event.tag && (
                <span className="inline-block bg-red-100 text-red-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  {event.tag}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base">
        View All Messages
      </button>
    </div>
  );
};

export default TimelineExample;