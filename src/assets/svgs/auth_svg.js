import * as React from "react"
import Svg, { Path } from "react-native-svg"




import { screenWidth, screenHeight } from "../../screens/Welcome"
function AUTH_SVG({ props }) {
    return (
        <Svg
            // width={85}
            // height={49}
            width={screenWidth *0.4}
            height={screenHeight * 0.1}
            viewBox="0 0 85 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >

            <Path
                d="M.28 10.092v7.29L19.905 8.13l13.176 6.168v8.13l-13.176-6.729L.28 25.512v7.569l19.625-9.532 19.624 10.653v-24.11L19.905 0 .28 10.092z"
                fill="#fff"
            />
            <Path d="M0 40.93v7.57l20.185-9.532v-8.41L0 40.93z" fill="#fff" />
            <Path
                d="M44.986 14.886h5.317v1.979h-5.317v-1.979zm.19 5.86h-2.563V10.093h8.37v1.978h-5.807v8.675zM53.51 20.746V10.093h2.563v8.644h5.554v2.009H53.51zM62.457 20.746l4.937-10.653h2.532l4.952 10.653h-2.69l-4.05-9.406h1.012l-4.066 9.406h-2.627zm2.468-2.283l.68-1.872h5.697L72 18.463h-7.074zM78.557 20.746V12.1h-3.545v-2.009h9.653v2.01H81.12v8.644h-2.563zM42.613 34.202v-9.531h1.806l4.015 6.726h-.956l3.948-6.726h1.792l.027 9.531h-2.048l-.014-6.359h.378l-3.154 5.352h-.983l-3.221-5.352h.458v6.36h-2.048zM54.917 34.202l4.205-9.531h2.156l4.218 9.531h-2.291l-3.45-8.415h.863l-3.464 8.415h-2.237zm2.102-2.042l.58-1.675h4.851l.593 1.675H57.02zM68.629 34.202v-7.734H65.61v-1.797h8.22v1.797h-3.018v7.734h-2.183zM77.687 28.51h4.541v1.716h-4.541v-1.715zm.161 3.922h5.135v1.77h-7.304v-9.531h7.129v1.77h-4.96v5.991z"
                fill="#000"
            />
        </Svg>
    )
}

export default AUTH_SVG









export function GOOGLE({props}) {
  return (
    <Svg
      width={23}
      height={screenHeight*0.039}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.182 9.806h-.902V9.76H11.2v4.48h6.33A6.717 6.717 0 014.48 12a6.72 6.72 0 016.72-6.72c1.713 0 3.272.646 4.458 1.702l3.168-3.168A11.148 11.148 0 0011.2.8C5.015.8 0 5.815 0 12s5.015 11.2 11.2 11.2S22.4 18.185 22.4 12c0-.751-.077-1.484-.218-2.194z"
        fill="#FFC107"
      />
      <Path
        d="M1.291 6.787l3.68 2.699A6.717 6.717 0 0111.2 5.28c1.713 0 3.272.646 4.458 1.702l3.168-3.168A11.148 11.148 0 0011.2.8C6.898.8 3.167 3.229 1.291 6.787z"
        fill="#FF3D00"
      />
      <Path
        d="M11.2 23.2c2.893 0 5.522-1.107 7.509-2.907l-3.466-2.934A6.67 6.67 0 0111.2 18.72a6.717 6.717 0 01-6.319-4.45L1.23 17.084C3.083 20.711 6.847 23.2 11.2 23.2z"
        fill="#4CAF50"
      />
      <Path
        d="M22.182 9.806h-.902V9.76H11.2v4.48h6.33a6.743 6.743 0 01-2.289 3.12l.002-.001 3.466 2.933C18.464 20.515 22.4 17.6 22.4 12c0-.751-.077-1.484-.218-2.194z"
        fill="#1976D2"
      />
    </Svg>
  )
}




export function NOTIFY({props}) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.94 23.65c-.26.228-.59.358-.936.366a1.467 1.467 0 01-1.257-.68h2.46c-.074.116-.164.221-.268.313zM21.37 20.138l.002.002a.238.238 0 01.08.178v.595l-.706-.683a11.408 11.408 0 01-1.713-2.102 9.992 9.992 0 01-1.148-4.073v-3.624s0 0 0 0c0-.358-.027-.715-.08-1.068.161.058.326.109.492.153.039.301.06.605.062.91v3.656l.001.018a9.804 9.804 0 001.048 3.734l.011.023.014.02a11.104 11.104 0 001.936 2.261zm-.972.952h1.055v.23a.237.237 0 01-.237.236H.736a.237.237 0 01-.236-.237v-.23h19.898zm-19.213-.86l-.685.662v-.574a.237.237 0 01.08-.178h0l.006-.005a11.107 11.107 0 001.906-2.26l.012-.02.011-.021A9.804 9.804 0 003.563 14.1l.002-.018V10.423h0a7.463 7.463 0 016.42-7.409l.43-.06v-1.4a.483.483 0 11.967 0v1.369l.437.055c.693.09 1.37.278 2.01.56V3.698c.003.11.009.22.018.33a6.842 6.842 0 00-2.833-.616h-.002a6.982 6.982 0 00-6.967 7.013v3.63a9.99 9.99 0 01-1.148 4.073 11.41 11.41 0 01-1.712 2.102z"
        fill="#000"
        stroke="#000"
      />
      <Path
        d="M23.037 3.683a3.183 3.183 0 11-6.367 0 3.183 3.183 0 016.367 0z"
        fill="#D92121"
        stroke="#000"
      />
    </Svg>
  )
}



export function HOMEICON({props}) {
  return (
    <Svg
    width={29}
    height={29}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 10.8L15 1l14 9.8v15.4c0 .743-.328 1.455-.911 1.98a3.295 3.295 0 01-2.2.82H4.11a3.295 3.295 0 01-2.2-.82C1.328 27.655 1 26.943 1 26.2V10.8z"
        stroke="#191D23"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.333 29V15h9.334v14"
        stroke="#191D23"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export function HOMEICON2({props}) {
  return (
    <Svg
    width={25}
    height={25}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 10.8L15 1l14 9.8v15.4c0 .743-.328 1.455-.911 1.98a3.295 3.295 0 01-2.2.82H4.11a3.295 3.295 0 01-2.2-.82C1.328 27.655 1 26.943 1 26.2V10.8z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.333 29V15h9.334v14"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function LOVE({props}) {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.84 3.245a6.417 6.417 0 00-9.077 0l-1.236 1.237-1.237-1.237a6.418 6.418 0 00-9.077 9.077l1.237 1.237 9.077 9.076 9.076-9.076 1.237-1.237a6.419 6.419 0 000-9.077v0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export function LOVE2({props}) {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.84 3.245a6.417 6.417 0 00-9.077 0l-1.236 1.237-1.237-1.237a6.418 6.418 0 00-9.077 9.077l1.237 1.237 9.077 9.076 9.076-9.076 1.237-1.237a6.419 6.419 0 000-9.077v0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function CHATICON({props}) {
    return (
      <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.296 11.417a9.777 9.777 0 01-1.05 4.433 9.917 9.917 0 01-8.867 5.483 9.777 9.777 0 01-4.433-1.05L1.296 22.5l2.216-6.65a9.776 9.776 0 01-1.05-4.433A9.917 9.917 0 017.946 2.55a9.777 9.777 0 014.433-1.05h.583a9.893 9.893 0 019.334 9.333v.584z"
        stroke="#191D23"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    )
}
export function CHATICON2({props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.296 11.417a9.777 9.777 0 01-1.05 4.433 9.917 9.917 0 01-8.867 5.483 9.777 9.777 0 01-4.433-1.05L1.296 22.5l2.216-6.65a9.776 9.776 0 01-1.05-4.433A9.917 9.917 0 017.946 2.55a9.777 9.777 0 014.433-1.05h.583a9.893 9.893 0 019.334 9.333v.584z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function PROFILE({props}) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.333 22.5v-2.333a4.667 4.667 0 00-4.666-4.667H6.333a4.667 4.667 0 00-4.666 4.667V22.5M11 10.833A4.667 4.667 0 1011 1.5a4.667 4.667 0 000 9.333z"
        stroke="#191D23"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export function PROFILE2({props}) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.333 22.5v-2.333a4.667 4.667 0 00-4.666-4.667H6.333a4.667 4.667 0 00-4.666 4.667V22.5M11 10.833A4.667 4.667 0 1011 1.5a4.667 4.667 0 000 9.333z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}




