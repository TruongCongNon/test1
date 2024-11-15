import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieDetail() {
  // const { id } = useParams();
  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <img
        className="absolute  aspect-video w-full brightness-[0.2]"
        src="https://simg.zalopay.com.vn/zlp-website/assets/nhung_bo_phim_hoat_hinh_gan_lien_voi_tuoi_tho_Doraemon_Chu_Meo_May_Den_Tu_Tuong_Lai_e2b492da7d.jpg"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1 ">
          <img
            className="   h-[600px] w-[600px] "
            src="https://simg.zalopay.com.vn/zlp-website/assets/nhung_bo_phim_hoat_hinh_gan_lien_voi_tuoi_tho_Doraemon_Chu_Meo_May_Den_Tu_Tuong_Lai_e2b492da7d.jpg"
          ></img>
        </div>
        <div className="flex-[2] px-6 py-4">
          <p>Test</p>
          <div className="flex items-center gap-4">
            <span className="border-spacing-y-20 border px-3 py-6">G</span>
            <p>2024/04/29</p>
            <p>ABC xyz</p>
          </div>
          <div className="mt-3 flex gap-6">
            <div className="flex gap-4">
              <p>69</p>
              <p>Rating</p>
            </div>
            <button>
              <FontAwesomeIcon className="mr-2" icon={faPlay}></FontAwesomeIcon>
              Trailer
            </button>
          </div>
          <div className="mb-4">
            <p className="font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              incidunt aspernatur ducimus recusandae odio nulla iure aperiam
              fugiat fuga! Modi cumque dolor dolorum voluptates qui itaque
              provident nostrum nesciunt magni assumenda officiis excepturi
              eaque laborum ipsum ratione tempore odio rerum debitis,
              necessitatibus libero, delectus magnam! Perspiciatis omnis
              delectus atque necessitatibus exercitationem, ipsum dolorem at,
              reiciendis expedita nemo, vitae beatae rerum quas vel quaerat ipsa
              totam possimus minus aspernatur officia nesciunt laudantium odio
              culpa? Eaque natus voluptates, reiciendis doloremque dolorum
            </p>
          </div>
          <div className="flex gap-6">
            <div>
              <p>Director</p>
              <p>Jennier Phang</p>
            </div>
            <div>
              <p>Writter </p>
              <p>Dan Frey, Russell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
