import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/modal";

export default function ModalComp({isOpen,onClose}) {
 

  return (
    <>
    
         <Modal isOpen={isOpen} onClose={onClose} backdrop={"blur"} isDismissable={false} size="md" className="location-modal">
      <ModalContent>
        <ModalHeader>Would you like to share your location for accurate results?</ModalHeader>
        <ModalBody>
          {/* modal content */}
          <div className="flex justify-center">
             <Image
  
      width={220}
      src="/media/modal-location.png"
      alt="NextUI Album Cover"
      className="m-5 mx-auto"
    />
          </div>
        </ModalBody>
        <ModalFooter className="flex justify-center">
          <Button color="danger" data-permission="false" variant="light" onPress={onClose}>
            Decline
          </Button>
          <Button color="primary" data-permission="true" onPress={onClose}>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    </>
  );
}