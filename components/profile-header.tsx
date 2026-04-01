import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      <Avatar className="h-20 w-20 border-2 border-primary/20">
        <AvatarImage src="/avatar.jpg" alt="VALDOCER" />
        <AvatarFallback className="bg-primary/10 text-lg text-primary">
          V
        </AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="font-bold text-xl text-foreground tracking-tight">
          VALDOCER
        </h1>
        <p className="text-muted-foreground text-sm">
          @valdocer
        </p>
      </div>
    </div>
  )
}
