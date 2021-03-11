//libs
import _ from "lodash";
//image
import NileconLogo from "../Assets/image/nilecon_logo.jpg";
import DtacLogo from "../Assets/image/dtac_logo.jpg";
import SamsungLogo from "../Assets/image/samsung_logo.png";
import ToyotaLogo from "../Assets/image/toyota_logo.png";
import UobLogo from "../Assets/image/uob_logo.png";
import WorkpointLogo from "../Assets/image/workpoint_logo.png";
import IntaninLogo from "../Assets/image/intanin_logo.jpg";

const boardSize = 12;
const imagesNum = boardSize / 2;
const images = [
  NileconLogo,
  DtacLogo,
  SamsungLogo,
  ToyotaLogo,
  UobLogo,
  WorkpointLogo,
  IntaninLogo,
];
let randomImages = _.shuffle(images).slice(0, imagesNum);
randomImages = _.shuffle([...randomImages, ...randomImages]);
const slotDatas = randomImages.map((image, i) => {
  return { id: i, image };
});

export const gameConfig = {
  boardSize,
  slotDatas,
};
