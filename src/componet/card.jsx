import extension from "../data.js";
export default function Card() {
  return (
    <div class="container mx-auto max-w-6xl p-4">
      <div class="flex flex-col md:flex-row items-center justify-between mb-4">
        <div>
          <h3 class="text-black dark:text-white py-6 text-3xl text-center font-bold">
            Extension List
          </h3>
        </div>
        <div>
          <button class="px-8 py-4 border-2 ml-2 mr-2 hover:bg-[#BF231F] text-dark  dark:text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            All
          </button>
          <button class="px-8 py-4 border-2 ml-2 mr-2 hover:bg-[#BF231F] text-dark  dark:text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Active
          </button>
          <button class="px-8 py-4 border-2 ml-2 mr-2 hover:bg-[#BF231F] text-dark  dark:text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Inactive
          </button>
        </div>
      </div>
      <div class="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
        {extension.map((item) => {
          return (
            <div class="animate-in zoom-in duration-200">
              <div
                class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:shadow-md z-0 relative"
                style={{ backgroundColor: "var(--card-background-color" }}
              >
                <div class="flex flex-col break-inside-avoid-page">
                  <div class="flex justify-between">
                    <div class="flex space-x-6">
                      <div class="flex space-x-4 flex-shrink-0 w-80">
                        <img src={item.logo} class="w-15 h-15" />
                        <div>
                          <div class=" font-extrabold text-2xl dark:text-white">
                            {item.name}
                          </div>
                          <div class="text-2l font-medium text-gray-900 dark:text-white">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-10">
                    <button class="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-black dark:text-white border-2 hover:border-red-500  focus:border-red-500 cursor-pointer">
                      <span
                        before="Remove"
                        class="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-1.5 before:absolute before:top-full group-hover:-translate-y-full"
                      >
                        Remove
                      </span>
                    </button>
                    <label
                      htmlFor={`toogleButton${item.name}`}
                      className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-red-500 focus:border-red-500 focus:outline-none"
                    >
                      <input
                        type="checkbox"
                        id={`toogleButton${item.name}`}
                        className="peer sr-only"
                        defaultChecked={item.isActive}
                      />

                      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
