interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export default function InputUI({
  label,
  placeholder = "placeholder-default",
  name,
  ...props
}: Props) {
  return (
    <div>
      <div className="my-2">
        <div className="">
          <label
            htmlFor={label.toLowerCase()}
            className="text-sm font-semibold text-black/60 dark:text-white/60 "
          >
            {label}
          </label>
        </div>
        <div className="flex form-control">
          <div className="relative w-full">
            <input
              id={label.toLowerCase()}
              type="text"
              name={name}
              className="rounded-lg border bg-transparent border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center  hover:border-black/50 dark:hover:border-white/50 active:border-black/50 dark:active:border-white/60 focus:outline-black/70 dark:focus:outline-white/70 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              placeholder={placeholder}
              {...props}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
