import TextGradient from "./TextGradient";

function Question() {
  return (
    <>
      <div className="grid grid-cols-1 px-5 sm:px-[100px] lg:px-[150px]">
        <div className="col-span-full">
          <p className="text-[var(--white-text)] text-[22px] font-[600] text-center sm:text-[35px]">
            Your questions, <TextGradient text="answered!" />
          </p>
        </div>
        <section className="">
          <div className="container flex flex-col justify-center  py-8 mx-auto md:py-8">
            <h2 className="text-2xl font-semibold text-[var(--white-text)] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Sagittis tempor donec id vestibulum viverra. Neque condimentum
              primis orci at lacus amet bibendum.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 text-[var(--white-text)] py-6 cursor-pointer focus:outline-none focus-visible:ri">
                  Ex orci laoreet egestas sapien magna egestas scelerisque?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                  nullam taciti at adipiscing est.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 text-[var(--white-text)] py-6 cursor-pointer focus:outline-none focus-visible:ri">
                  Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                  odio?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                  porttitor egestas tincidunt neque vehicula potenti.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 text-[var(--white-text)] py-6 cursor-pointer focus:outline-none focus-visible:ri">
                  Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                  suscipit erat?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Justo libero tellus integer tincidunt justo semper consequat
                  venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                  pretium sodales vel magna et massa euismod vulputate sed.{" "}
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Question;
