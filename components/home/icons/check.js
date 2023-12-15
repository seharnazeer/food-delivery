export default function Check({ classname = "w-6 h-6" }) {
  return (
    <svg className={classname}  style={{verticalAlign: "middle",fill: "currentColor",overflow: "hidden"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 102.4c-226.304 0-409.6 183.296-409.6 409.6s183.296 409.6 409.6 409.6 409.6-183.296 409.6-409.6-183.296-409.6-409.6-409.6z m261.632 271.872l-306.176 306.176-17.408 17.408c-18.432 18.432-47.616 18.432-66.048 0l-17.408-17.408-117.76-117.76c-15.36-15.36-13.824-40.96 4.096-53.76 14.336-10.24 34.304-8.192 46.592 4.608l117.76 116.224 306.688-306.688c15.36-15.36 40.96-13.824 53.76 4.096 10.752 14.848 8.704 34.816-4.096 47.104z"  /></svg>
  );
}
