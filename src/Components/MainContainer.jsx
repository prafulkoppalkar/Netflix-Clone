
import Row from "./Row";
import urls from "../APIs/resquests";
import Banner from "./Banner";
export default function MainConatiner({rowRefs}) {
  return (
    <>
      <Banner />
      <div className="mainContiner">
        <Row
          ref={rowRefs.trendingRef}
          title="Trending Now"
          reqURL={urls.fetchTrending}
          isLargeRow={true}
        />
        <Row
          ref={rowRefs.topRatedRef}
          title="Top Rated"
          reqURL={urls.fetchTopRated}
        />
        <Row
          ref={rowRefs.originalsRef}
          title="Netflix Originals"
          reqURL={urls.fetchNetflixOriginals}
        />
        <Row
          ref={rowRefs.comedyRef}
          title="Comedy Movies"
          reqURL={urls.fetchComedyMovies}
        />
        <Row
          ref={rowRefs.romanceRef}
          title="Romance Movies"
          reqURL={urls.fetchRomanceMovies}
        />
        <Row
          ref={rowRefs.horrorRef}
          title="Horror Moviws"
          reqURL={urls.fetchHorrorMovies}
        />
        <Row
          ref={rowRefs.documentariesRef}
          title="Documentaries"
          reqURL={urls.fetchDocumentaries}
        />
      </div>
    </>
  );
}
