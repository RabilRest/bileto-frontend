// app/organizers/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { ORGANIZERS } from "@/data/organizers";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="text-yellow-500" aria-label={`Rating ${full} of 5`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </div>
  );
}

export default function OrganizerPage({ params }: { params: { slug: string } }) {
  const org = ORGANIZERS[params.slug];
  if (!org) return notFound();

  const avg =
    org.reviews.length
      ? org.reviews.reduce((s, r) => s + r.rating, 0) / org.reviews.length
      : 0;

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="flex items-center gap-4">
        {org.avatar ? (
          <Image
            src={org.avatar}
            alt={org.name}
            width={72}
            height={72}
            className="h-18 w-18 rounded-full object-cover"
          />
        ) : null}
        <div>
          <h1 className="text-2xl font-bold">{org.name}</h1>
          <div className="flex items-center gap-3">
            <Stars rating={avg} />
            <span className="text-sm text-gray-500">
              {org.reviews.length} review{org.reviews.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-700">{org.description}</p>

      <h2 className="mt-8 mb-3 text-lg font-semibold">Reviews</h2>
      <div className="space-y-4">
        {org.reviews.map((rv) => (
          <div key={rv.id} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{rv.author}</span>
              <Stars rating={rv.rating} />
            </div>
            <p className="mt-2 text-gray-700">{rv.text}</p>
            <p className="mt-1 text-xs text-gray-400">{rv.date}</p>
          </div>
        ))}
        {org.reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
