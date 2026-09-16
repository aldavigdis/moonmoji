import { useState } from "react";

const moonPhases = [
  { phase: "new", name: "New Moon", emoji: "🌑" },
  { phase: "waxing-cresent", name: "Waxing Cresent Moon", emoji: "🌒" },
  { phase: "first-quarter", name: "First Quarter Moon", emoji: "🌓" },
  { phase: "waxing-gibbous", name: "Waxing Gibbous Moon", emoji: "🌔" },
  { phase: "full", name: "Full Moon", emoji: "🌕" },
  { phase: "waning-gibbous", name: "Waning Gibbous", emoji: "🌖" },
  { phase: "last-quarter", name: "Last Quarter Moon", emoji: "🌗" },
  { phase: "waning-cresent", name: "Waning Cresent Moon", emoji: "🌘" }
];

type MoonPhaseIconProps = { phase: number }

function MoonPhaseIcon(props: MoonPhaseIconProps) {
  const iconClass = "icon " + moonPhases[props.phase].phase;
  return (
    <div>
        <div className={iconClass}>
            <span>{moonPhases[props.phase].emoji}</span>
        </div>
        <p aria-live="assertive">{moonPhases[props.phase].name}</p>
    </div>
  );
}

export function MoonPhase() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const maxIndex = moonPhases.length - 1;
  function handlePrev() {
    if (phaseIndex === 0) {
      return setPhaseIndex(maxIndex);
    }
    return setPhaseIndex(phaseIndex - 1);
  }
  function handleNext() {
    if (phaseIndex < maxIndex) {
      return setPhaseIndex(phaseIndex + 1);
    }
    return setPhaseIndex(0);
  }
  return (
    <div className="moonphase">
      <MoonPhaseIcon phase={phaseIndex}></MoonPhaseIcon>
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <>&nbsp;</>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
