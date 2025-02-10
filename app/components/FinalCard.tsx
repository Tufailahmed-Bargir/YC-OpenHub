import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Building2, Globe, MapPin, Users } from "lucide-react"
import Image from "next/image"

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

interface CompanyData {
    id: number;
    name: string;
    slug: string;
    former_names: string[];
    small_logo_thumb_url: string;
    website: string;
    all_locations: string;
    long_description: string;
    one_liner: string;
    team_size: number;
    industry: string;
    subindustry: string;
    launched_at: number;
    tags: string[];
    tags_highlighted: string[]; // ✅ Missing field
    top_company: boolean; // ✅ Missing field
    isHiring: boolean; // ✅ Missing field
    nonprofit: boolean; // ✅ Missing field
    batch: string;
    status: string;
    industries: string[];
    regions: string[];
    stage: string;
    app_video_public: boolean; // ✅ Missing field
    demo_day_video_public: boolean; // ✅ Missing field
    app_answers: string | null; // ✅ Missing field (nullable)
    question_answers: boolean; // ✅ Missing field
    url: string;
    api: string;
  }
  

export function FinalCard({ data }: { data: CompanyData }) {
  const launchDate = new Date(data.launched_at * 1000).toLocaleDateString()

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Image
          src={data.small_logo_thumb_url || "/placeholder.svg"}
          alt={`${data.name} logo`}
          width={64}
          height={64}
          className="rounded-lg"
        />
        <div className="flex-1">
          <CardTitle className="text-2xl">{data.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{data.one_liner}</p>
        </div>
        <Badge variant="secondary">{data.status}</Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-2 text-sm">
          <Globe className="h-4 w-4" />
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {data.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{data.all_locations}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="h-4 w-4" />
          <span>{data.team_size} team members</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Building2 className="h-4 w-4" />
          <span>
            {data.industry} • {data.subindustry}
          </span>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold mb-2">About {data.name}</h3>
          <p className="text-sm text-muted-foreground">{data.long_description}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">YC Batch:</span> {data.batch}
          </div>
          <div>
            <span className="font-semibold">Launched:</span> {launchDate}
          </div>
          <div>
            <span className="font-semibold">Stage:</span> {data.stage}
          </div>
          <div>
            <span className="font-semibold">Regions:</span> {data.regions.join(", ")}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

