import { Fragment } from "react"
import { Transition } from "@headlessui/react"
import { CheckedIcon } from "@/src/icons/icon"

export function Notification({ open, close }) {
  if (open) {
    setTimeout(() => {
      close()

    }, 5000)
  }

  return (
    <>


      <div className="absolute z-50 inset-0 flex px-4  pointer-events-none sm:items-start md:inline right-0 md:mt-20">
        <div className="w-full flex flex-col space-y-4 sm:items-end">
          <Transition
            show={open}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-5 opacity-100 sm:translate-y-0 sm:translate-x-5"
            enterTo="translate-y-0 opacity-100 sm:-translate-x-5"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-72 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5 p-2 mt-8 flex items-center
            border-solid border border-text-white">
              <div className="flex justify-center items-center bg-primary rounded-lg w-7 h-7 mx-3.5 ">
                <CheckedIcon />
              </div>
              <p className="text-green-700 font-medium text-center text-base  font-text">
                Ro’yxatdan o’tdingiz !
              </p>
            </div>
          </Transition>
        </div>
      </div>

      <div className="fixed z-50 px-4 -mt-[450px] pointer-events-none inline md:hidden">
        <div className="w-full flex flex-col items-center space-y-4">
          <Transition
            show={open}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-10 opacity-100 sm:translate-y-0 sm:translate-x-0"
            enterTo="translate-y-0 opacity-100 sm:-translate-y-5 sm:translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-72 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5 p-2 mt-8 flex items-center bg-white
            border-solid border border-text-white">
              <div className="flex justify-center items-center bg-gray-50 rounded-lg w-7 h-7 mx-3.5">
                <CheckedIcon />
              </div>

              <p className="text-green-700 text-center text-base font-medium font-text">
                Ro’yxatdan o’tdingiz !
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
0