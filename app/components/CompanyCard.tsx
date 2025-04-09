import { Building2, Globe, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CompanyCardProps {
  id: number;
  name: string;
  one_liner: string;
  small_logo_thumb_url: string;
  website: string;
  all_locations: string;
  team_size: number;
  industry: string;
  subindustry: string;
  slug: string;
}

export default function CompanyCard({
  name,
  one_liner,
  small_logo_thumb_url,
  website,
  all_locations,
  team_size,
  industry,
  subindustry,
  slug,
}: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${slug}`}
      className="block p-4 rounded-lg border border-gray-100 bg-white hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={small_logo_thumb_url || "/placeholder.svg"}
          alt={`${name} logo`}
          width={56}
          height={56}
          className="rounded-xl"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-xl text-[#111111] mb-1 group-hover:text-[#ff6b00] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {one_liner}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Globe className="h-4 w-4 shrink-0 text-[#ff6b00]" />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff6b00] hover:text-[#ff5500] truncate transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {website.replace(/^https?:\/\//, "")}
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 shrink-0 text-[#ff6b00]" />
          <span className="truncate">{all_locations}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="h-4 w-4 shrink-0 text-[#ff6b00]" />
          <span>{team_size} team members</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Building2 className="h-4 w-4 shrink-0 text-[#ff6b00]" />
          <span className="truncate">
            {industry} • {subindustry}
          </span>
        </div>
      </div>
    </Link>
  );
}
