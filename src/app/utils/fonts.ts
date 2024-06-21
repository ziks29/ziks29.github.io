import {
  Inter,
  Manrope,
  Sacramento,
  Montserrat,
  Poppins,
  Josefin_Sans,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export { inter, montserrat, manrope, poppins, josefin };
