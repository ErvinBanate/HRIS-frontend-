import { ChevronDown } from "lucide-react"
import { Button } from "./button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"

const FormDropdown = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-5p ">
          <ChevronDown />
          <span className="sr-only">Toggle user menu</span>
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem>Shift</DropdownMenuItem>
      <DropdownMenuItem>Time Correction</DropdownMenuItem>
      <DropdownMenuItem>Leave</DropdownMenuItem>
      <DropdownMenuItem>Leave Cancellation</DropdownMenuItem>
      <DropdownMenuItem>Overtime</DropdownMenuItem>
      <DropdownMenuItem>Overtime Cancellation</DropdownMenuItem>
      <DropdownMenuItem>Undertime</DropdownMenuItem>
      <DropdownMenuItem>Business Trip</DropdownMenuItem>
      <DropdownMenuItem>Dispute</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { FormDropdown }