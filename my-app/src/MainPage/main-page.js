import Navbar from "./../Navbar/navbar";
import "./main-page.css";

function MainPage() {

    return (
        <div className="body-img">
            <div className="bg-img">  <Navbar props="bg-transparent-800" />
                <div class="grid grid-cols-4 grid-flow-col gap-4 z-0">
                    <div></div>
                    <div className="home-text leading-loose">
                        <div>

                            <div class="font-bold text-3xl mb-2 leading-loose">Biciclete clasice</div>
                            <div class="font-bold text-4xl mb-2 leading-loose">Restaurate</div>
                        </div>
                        <div class="font-bold text-3xl mb-2 leading-loose">Specificatii
                            <ul class="font-bold text-xl mb2 leading-loose">
                                <li>Modele de prestigiu</li>

                                <li>Fabricate intre 1950 si 2000</li>
                                <li>Componente de calitate</li>
                            </ul>

                        </div>
                        <a
                            href="/catalog"
                            className='block px-4 py-2 text-xl text-white bg-red right-0 z-10 mt-2 w-48 origin-top-right text-center'
                        >
                            Catalog
                        </a>
                    </div>


                </div>
                {/* <div class="row-span-2 col-span-2 z-10...">03</div> */}
            </div >
        </div>
    );
}

export default MainPage;