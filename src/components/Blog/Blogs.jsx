

export default function Blogs() {

    const contents = [
        {
          image:
            "https://startp-next.envytheme.com/_next/static/media/blog9.cafd6324.jpg",
          date: "Admin / August 15, 2022",
          title: "Making Peace With The Feast Or Famine Of Freelancing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
          buttonLink: "/",
        },
        {
          image:
            "https://startp-next.envytheme.com/_next/static/media/blog10.b0a38dc5.jpg",
          date: "Admin / August 15, 2022",
          title: "Making Peace With The Feast Or Famine Of Freelancing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
          buttonLink: "/",
        },
        {
          image:
            "https://startp-next.envytheme.com/_next/static/media/blog11.fc980b16.jpg",
          date: "Admin / August 15, 2022",
          title: "Making Peace With The Feast Or Famine Of Freelancing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
          buttonLink: "/",
        },
      ];
  return (
    <div className="py-20 font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="grid grid-cols-1 md:grid-cols-2">
                {contents?.map((data,index)=>(
                    <div key={index}>
                      <img src={data.image} alt="" />
                    </div>
                ))}
            </section>
        </div>

    </div>
  )
}
