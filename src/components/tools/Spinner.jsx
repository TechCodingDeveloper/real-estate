import spinner from "../../assets/svg/Spinner.svg";
export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="h-24" />
    </div>
  );
}
