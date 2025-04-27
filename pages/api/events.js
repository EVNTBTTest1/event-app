// pages/api/events.js
export default function handler(req, res) {
  const events = [
    { id: 1, title: 'Summer Music Festival', date: '2025-06-21' },
    { id: 2, title: 'Art & Wine Night',     date: '2025-07-10' },
    { id: 3, title: 'Tech Meetup Dublin',   date: '2025-08-05' },
  ];
  res.status(200).json(events);
}
