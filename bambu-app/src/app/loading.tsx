export default async function Loading() {
  return (
    <div className="flex flex-col gap-2 h-screen w-full  justify-center items-center bg-[#134E7D] ">
      <h1 className="font-bold text-xs sm:text-sm text-white">Cargando...</h1>
      <span className="loader"></span>
    </div>
  );
}
