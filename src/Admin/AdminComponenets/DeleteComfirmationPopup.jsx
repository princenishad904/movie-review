import { useState } from "react";
import { Button, Modal } from "keep-react";
import { Trash } from "phosphor-react";
import { Spinner } from "keep-react";

const DeleteComfirmationPopup = ({
  showModal,
  cancelDelation,
  comfirmToDelate,
  loader,
  itemsId,
}) => {
  return (
    <>
      <Modal
        icon={<Trash size={28} color="red" />}
        size="md"
        show={showModal}
        position="center"
      >
        <Modal.Header>Do you want to Delete Movie</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-red-400">
              {itemsId}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={() => cancelDelation()}>
            Cancel
          </Button>
          <Button
            type="failure"
            className="bg-red-600 text-white"
            onClick={() => comfirmToDelate()}
          >
            Delete{" "}
            {loader ? (
              <Spinner className="text-white mx-2" color="gray" size="md" />
            ) : null}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteComfirmationPopup;
