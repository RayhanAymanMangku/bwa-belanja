"use client"
import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { ActionResult } from "@/types"
import { useState } from "react"

const initialState: ActionResult = {
  error: "Email or password not found"
}

export function AlertDestructive() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState(initialState)
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {state.error}
      </AlertDescription>
    </Alert>
  )
}
