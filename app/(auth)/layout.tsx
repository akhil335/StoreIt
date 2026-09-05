import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {


    return (
      <div className = "flex min-h-screen">
          <section className="hidden lg:flex items-center justify-center w-1/2 xl:w-2/5 bg-brand p-10">
              <div className="flex max-h-[800px] mx-w-[430px] flex-col justify-center space-y-12">
                <Image src="/assets/icons/logo-full.svg" alt="logo" width={224} height={82} />
                <div className="space-y-5 text-white">
                    <h1 className="h1">Manage your files the best way</h1>
                    <p className="body-1">
                      This is the place where you can store all your documents.
                    </p>
                </div>
                <Image src="/assets/images/files.png" alt="files" className="transition-all hove:rotate-2 hover:scale-105" width={342} height={342} />
              </div>
          </section>
          <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
              <div className="mb-16 lg:hidden">
                  <Image src="/assets/icons/logo-full-brand.svg" alt="logo" className="w-[200px] lg:w-[250px]" width={224} height={82} />
              </div>
              { children }
          </section>
      </div>
    );
  }
  
  export default Layout