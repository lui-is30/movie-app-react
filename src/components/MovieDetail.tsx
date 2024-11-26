import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle } from "./ui/dialog";

type MovieDetailProps={
    isOpen:boolean;
    onClose:(value:boolean)=>void;
}

export const MovieDetail=({isOpen,onClose}:MovieDetailProps)=>{
    return(
        <>
        <DialogRoot motionPreset={"slide-in-right"} modal={true} size={"full"} lazyMount open={isOpen} onOpenChange={(e)=>onClose(e.open)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>Body</p>
                </DialogBody>
                <DialogFooter>Footer</DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
        </>
    );
}