"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"]

const frameworks = ["React", "Next.js", "Node.js", "Express", "Astro", "Vue.js"]

const languages = [
  { name: "Japanese", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Chinese", level: "Conversational" },
]

interface SkillsDialogProps {
  children?: React.ReactNode
}

export function SkillsDialog({ children }: SkillsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children || <Button variant="outline">Overview</Button>}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Skills & Languages</DialogTitle>
          <DialogDescription>An overview of my technical skills and language proficiency</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Programming Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-sm px-3 py-1">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks & Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frameworks & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <Badge key={framework} variant="secondary" className="text-sm px-3 py-1">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Language Proficiency */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Language Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
