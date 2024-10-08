interface Props {
  id: string;
  heading?: string;
  message: string;
  onClose?: () => void;
}

export default function Modal({ id, heading, message, onClose }: Props) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-neutral-100">
        {heading && <h3 className="font-bold text-lg">{heading}</h3>}
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
