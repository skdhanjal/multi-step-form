import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (step: number) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    steps,
    step: steps[currentStep],
    next,
    back,
    goTo,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
}
