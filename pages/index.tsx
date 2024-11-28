import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
 import {Image} from "@nextui-org/image";
 import NextImage from "next/image";
// import {furryFamily} from '../lib/media/family-with-furries.jpg';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="   pagewrapper homepage ">
    
        <div className="leftColumn    ">
         <Image
      as={NextImage}
     
       layout="responsive"
            isBlurred
          
          
          
    width={800}
        height={400}
      src="/media/family-with-furries.jpg"
      alt="Furry-Family"
      className=" "
    />
        </div>
        <div className="rightColumn      ">
         <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex w-full justify-center">
               <Image
      as={NextImage}
     
 
       
            
          
          
    width={200}
        height={193}
      src="/media/paw.png"
      alt="Paw"
      className="  "
    />
        </div>
          <span className={title({ color: "primary" })}>Pawsitively </span>
             <br />
            <span className={title()}> Unforgetable Trips</span>
       
        
          {/* <span className={title()}>
            Discover pet-friendly restaurants, hotels, and airlines for a stress-free trip with your furry friend
          </span> */}
          <div className={subtitle({ class: "mt-4" })}>
            Discover pet-friendly restaurants, hotels, and airlines for a stress-free trip with your furry friend
          </div>
        </div>

        <div className="flex justify-center mt-4">
        
          <Link
             
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.navItems[0].href}
          >
            Start Exploring
          </Link>
          {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}
        </div>

        {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Start Exploring
              <Code color="primary">pages/index.tsx</Code>

            </span>
          </Snippet>
        </div> */}
        </div>
        
 
        
      </div>
    </DefaultLayout>
  );
}
