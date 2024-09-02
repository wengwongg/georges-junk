interface Props {
  id: string;
  heading?: string;
  message: string;
}

export default function Modal({ id, heading, message }: Props) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box text-white">
        {heading && <h3 className="font-bold text-lg">{heading}</h3>}
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
