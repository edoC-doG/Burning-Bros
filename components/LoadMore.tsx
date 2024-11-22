import { MoonLoader } from "react-spinners";

function LoadMore() {
    return (
        <>
            <section className="flex justify-center items-center w-full" style={{ height: '100%' }}>
                <div>
                    <MoonLoader color="#F27148" size={50} />
                </div>
            </section>
        </>
    );
}

export default LoadMore;