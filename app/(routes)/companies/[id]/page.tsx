"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  MapPin,
  Users,
  Building2,
  Calendar,
  Tag,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CompanyPage() {
  const params = useParams();
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const companyData = data.find((c) => c.id.toString() === params.id);
    setCompany(companyData);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg mb-6"></div>
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111111] mb-4">
            Company Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The company you're looking for doesn't exist or has been removed.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-[#ff6b00] hover:bg-[#ff5500] text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg border">
          {/* Header Section */}
          <div className="p-8 border-b relative">
            <div className="flex items-start gap-8">
              <div className="relative">
                <Image
                  src={company.small_logo_thumb_url || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={120}
                  className="rounded-xl shadow-sm border"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-[#111111] mb-2">
                      {company.name}
                    </h1>
                    <p className="text-lg text-gray-600">
                      {company.one_liner}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {company.website && (
                      <Button
                        size="lg"
                        onClick={() => window.open(company.website, "_blank")}
                        className="bg-[#ff6b00] hover:bg-[#ff5500] text-white flex items-center gap-2"
                      >
                        <Globe className="h-5 w-5" />
                        Visit Website
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    )}
                    {company.github_url && (
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.open(company.github_url, "_blank")}
                        className="flex items-center gap-2 border-2 text-[#111111] border-[#111111] hover:bg-[#111111] hover:text-white"
                      >
                        <GitBranch className="h-5 w-5" />
                        View GitHub
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-b bg-gray-50">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-[#ff6b00]" />
                </div>
                <span className="text-gray-700">{company.all_locations}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-[#ff6b00]" />
                </div>
                <span className="text-gray-700">
                  {company.team_size || "Unknown"} team members
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Building2 className="h-5 w-5 text-[#ff6b00]" />
                </div>
                <span className="text-gray-700">
                  {company.industry} • {company.subindustry}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Calendar className="h-5 w-5 text-[#ff6b00]" />
                </div>
                <span className="text-gray-700">YC Batch: {company.batch}</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Tag className="h-5 w-5 text-[#ff6b00]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {company.tags?.map((tag: string) => (
                    <Badge
                      key={tag}
                      className={cn(
                        "bg-white text-[#111111] hover:bg-[#ff6b00] hover:text-white",
                        "transition-colors duration-200"
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              About {company.name}
            </h2>
            <div className="prose max-w-none">
              {company.long_description.split("\n").map((paragraph: string, i: number) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
