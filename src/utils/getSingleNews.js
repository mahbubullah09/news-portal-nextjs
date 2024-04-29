export const getSingleNews = async (id) =>{
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/64eb8dbf4db106c175ac0286`,
{
    cache: "no-store"
})

return res.json()
}