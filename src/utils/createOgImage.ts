import OgImage from '@/types/OgImage';

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

export default function createOgImage({ title, meta }: OgImage) {
  const ogImageUrl = [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID
    `https://res.cloudinary.com/dwulhbjtx/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Montserrat_72_bold:${e(title)},co_rgb:e6e4ff,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_50,y_180`,

    // META
    // Karla, but smaller
    `l_text:Montserrat_48:${e(meta)},co_rgb:e6e4ff70,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_50,y_75`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_Aly_Badawy.jpg`,
    // Transformations
    `c_thumb,g_face,r_max,w_600,h_600,q_100`,
    // Positioning
    `fl_layer_apply,w_280,g_north_west,x_53,y_49`,

    // BG
    `ab_og.png`,
  ].join('/');

  return ogImageUrl;
}
