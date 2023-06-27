//https://react-icons.github.io/react-icons
import {
  PiFilmStripFill,
  PiFilmReelFill,
  PiFilmSlateBold,
} from 'react-icons/pi'; //아이콘
import {
  GiFilmProjector,
  GiPopcorn,
  GiDaemonSkull,
  GiBatMask,
  GiEclipseFlare,
  GiHouse,
  GiIceIris,
  GiSpikedSnail,
  GiVhs,
  GiBrokenHeartZone,
} from 'react-icons/gi'; //아이콘
import { HiFilm } from 'react-icons/hi'; //아이콘
import { BiSolidCameraMovie, BiBookBookmark } from 'react-icons/bi'; //아이콘
import { FaGithubAlt } from 'react-icons/fa6';

export const categorys = [
  { name: '지무비 : G Movie', icon: <PiFilmStripFill /> },
  { name: '어퍼컷Tube', icon: <PiFilmReelFill /> },
  { name: '어바웃타임', icon: <GiFilmProjector /> },
  { name: '구불', icon: <HiFilm /> },
  { name: '달빛부부', icon: <PiFilmSlateBold /> },
  { name: '리뷰엉이: Owls Review', icon: <BiSolidCameraMovie /> },
  { name: '햄릿 TUBE', icon: <GiPopcorn /> },
  { name: '고몽', icon: <GiEclipseFlare /> },
  { name: '시네마 홀릭 : CinemaHolic ', icon: <GiSpikedSnail /> },
  { name: '다크 무비 : Dark Movie', icon: <GiBatMask /> },
  { name: '동네비디오방', icon: <GiVhs /> },
  { name: '헬무비: Hell Movie', icon: <GiDaemonSkull /> },
  { name: '찐뷰 영화리뷰', icon: <GiIceIris /> },
  { name: '영화리뷰 소녀', icon: <FaGithubAlt /> },
  { name: '인생 영화 : Legend Movie', icon: <GiBrokenHeartZone /> },
  { name: '리우군의 다락방', icon: <GiHouse /> },
  { name: '스토리머', icon: <BiBookBookmark /> },
];
