import { cleanup,render } from "@testing-library/react";
import { afterEach } from "vitest";

//after each unit test it cleans up
afterEach(()=>{
    cleanup()
})

function customRender(ui,options){
    return render(ui,{
        wrapper: ({children})=>children,
        ...options,
    })
}

export * from "@testing-library/react"
export {default as userEvent} from "@testing-library/user-event"

export {customRender as render} 