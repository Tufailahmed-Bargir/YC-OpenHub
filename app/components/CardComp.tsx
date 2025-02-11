"use client";
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
}

export default function CompanyCard({
  id,
  name,
  one_liner,
  small_logo_thumb_url,
  website,
  all_locations,
  team_size,
  industry,
  subindustry,
}: CompanyCardProps) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
      <Link href={`/companies/${id}`} className="block hover:underline">
        <div className="flex items-start gap-4 mb-4">
          <Image
            src={small_logo_thumb_url || "/placeholder.svg"}
            alt={`${name} logo`}
            width={56}
            height={56}
            className="rounded-xl"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xl text-card-foreground mb-1">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {one_liner}
            </p>
          </div>
        </div>
      </Link>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4 shrink-0" />
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline truncate"
          >
            {website.replace(/^https?:\/\//, "")}
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="truncate">{all_locations}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 shrink-0" />
          <span>{team_size} team members</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4 shrink-0" />
          <span className="truncate">
            {industry} • {subindustry}
          </span>
        </div>
      </div>
    </div>
  );
}
