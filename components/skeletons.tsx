import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
 export default function Standalone() {
  return (
    <div className="  w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>  
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
  );
}

  export   function CardSkeleton() {
  return (
        <div className=" h-full space-y-5 "  >
      <Skeleton className="">
        <div className="h-80  bg-default-300"></div>
      </Skeleton>
      
    </div>
  );
}