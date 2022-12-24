
import bgPhoto from "./bg-photo.jpg";

function MainPage() {
    return (<><img src={bgPhoto}></img><div class="grid grid-rows-3 grid-flow-col gap-4 z-0">
        <div class="row-span-3 z-10...">01</div>
        <div class="col-span-2 z-10...">02</div>
        <div class="row-span-2 col-span-2 z-10...">03</div>
    </div></>);
}

export default MainPage;