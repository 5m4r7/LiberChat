import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"
import * as chat from "~/system/chat/index.ts"

export async function GET (req: Request, ctx: Context) {
  await chat.getMessage("x")
  return res.json({
    status: "ok!",
  })
}
