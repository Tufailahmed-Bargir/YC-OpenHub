// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Building2, Globe, MapPin, Users } from "lucide-react"
// import Image from "next/image"

// interface CompanyData {
//   id: number
//   name: string
//   slug: string
//   former_names: string[]
//   small_logo_thumb_url: string
//   website: string
//   all_locations: string
//   long_description: string
//   one_liner: string
//   team_size: number
//   industry: string
//   subindustry: string
//   launched_at: number
//   tags: string[]
//   batch: string
//   status: string
//   industries: string[]
//   regions: string[]
//   stage: string
// }

// export function ApolloCard({ data }: { data: CompanyData }) {
//   const launchDate = new Date(data.launched_at * 1000).toLocaleDateString()

//   return (
//     <Card className="w-full max-w-3xl mx-auto">
//       <CardHeader className="flex flex-row items-center space-x-4 pb-4">
//         <Image
//           src={data.small_logo_thumb_url || "/placeholder.svg"}
//           alt={`${data.name} logo`}
//           width={64}
//           height={64}
//           className="rounded-lg"
//         />
//         <div className="flex-1">
//           <CardTitle className="text-2xl">{data.name}</CardTitle>
//           <p className="text-sm text-muted-foreground">{data.one_liner}</p>
//         </div>
//         <Badge variant="secondary">{data.status}</Badge>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="flex items-center space-x-2 text-sm">
//           <Globe className="h-4 w-4" />
//           <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//             {data.website.replace(/^https?:\/\//, "")}
//           </a>
//         </div>
//         <div className="flex items-center space-x-2 text-sm">
//           <MapPin className="h-4 w-4" />
//           <span>{data.all_locations}</span>
//         </div>
//         <div className="flex items-center space-x-2 text-sm">
//           <Users className="h-4 w-4" />
//           <span>{data.team_size} team members</span>
//         </div>
//         <div className="flex items-center space-x-2 text-sm">
//           <Building2 className="h-4 w-4" />
//           <span>
//             {data.industry} • {data.subindustry}
//           </span>
//         </div>
//         <Separator />
//         <div>
//           <h3 className="font-semibold mb-2">About {data.name}</h3>
//           <p className="text-sm text-muted-foreground">{data.long_description}</p>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Tags</h3>
//           <div className="flex flex-wrap gap-2">
//             {data.tags.map((tag) => (
//               <Badge key={tag} variant="outline">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </div>
//         <Separator />
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           <div>
//             <span className="font-semibold">YC Batch:</span> {data.batch}
//           </div>
//           <div>
//             <span className="font-semibold">Launched:</span> {launchDate}
//           </div>
//           <div>
//             <span className="font-semibold">Stage:</span> {data.stage}
//           </div>
//           <div>
//             <span className="font-semibold">Regions:</span> {data.regions.join(", ")}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

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
      className="block p-4 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
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
          <h3 className="font-semibold text-xl text-card-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {one_liner}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4 shrink-0" />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline truncate"
            onClick={(e) => e.stopPropagation()}
          >
            {website.replace(/^https?:\/\//, "")}
          </a>
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
    </Link>
  );
}
