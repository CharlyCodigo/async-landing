const API = 'https://api.jikan.moe/v4/anime?q=YU GI OH&sfw';
//const content =null || document.getElementById('content')

async function fetchData(urlApi) {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}
async function data(){
    const data = await fetchData(API)
    console.log(data.data[0].images.jpg.image_url);
}
data();
(async () => {
    try{
        const data = await fetchData(API);
        let  view =`
        ${data.data.map(images => `
            <div class="group relative">
                <div   
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${images.images.jpg.image_url}" alt="${images.synopsis}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${images.title}
                    </h3>
                </div>
            </div>
        `).join("")}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error)

    }
})();