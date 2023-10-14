export function ModalFormSubmitButton({ value }: { value: string }) {
  return (
    <button
      type="submit"
      className="btn btn-primary fs-4 bg-main text-capitalize"
    >
      {value}
    </button>
  );
}
