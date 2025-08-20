export default function EventCard({ title, date, image }) {
  return (
    <div className="bg-primary-charcoal border border-secondary-amber rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-heading text-secondary-amber">{title}</h3>
        <p className="text-sm text-accent-beige">{date}</p>
      </div>
    </div>
  );
}
