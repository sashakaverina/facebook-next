import StoryCard from "./StoryCard"

const stories = [
  {
    name: "Sonny",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v"
  },
  {
    name: "Elon M",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk"
  },
  {
    name: "Jeff B",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p"
  },
  {
    name: "Mark Z",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf"
  },
  {
    name: "Bill G",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy"
  },

]



function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
       {stories.map((story) => (
         <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
       ))} 
    </div>
  )
}

export default Stories
