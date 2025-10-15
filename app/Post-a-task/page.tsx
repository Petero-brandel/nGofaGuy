"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import {
  STEPS,
  TASK_CATEGORIES,
  type FormData,
} from "@/components/post-a-task/constants";
import { Header } from "@/components/explore-page/exp-header";
import StepIndicator from "@/components/post-a-task/StepIndicator";
import Step1Description from "@/components/post-a-task/Step1Description";
import Step2Skills from "@/components/post-a-task/Step2Skills";
import Step3Timeline from "@/components/post-a-task/Step3Timeline";
import Step4Payment from "@/components/post-a-task/Step4Payment";
import Step5Review from "@/components/post-a-task/Step5Review";
import SuccessNotification from "@/components/post-a-task/SuccessNotification";

export default function JobPostPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    description: "",
    category: "",
    selectedSuggestions: [],
    skills: [],
    urgency: "",
    duration: "",
    location: "",
    budgetAmount: "",
  });

  const [showTips, setShowTips] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedCategory = TASK_CATEGORIES.find(
    (cat) => cat.id === formData.category
  );
  const needsSkills = selectedCategory?.needsSkills || false;

  const filteredSteps = STEPS.filter(
    (s) => s.id !== 2 || needsSkills || !formData.category
  );

  const handleFormDataChange = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.description.length >= 20 && formData.category;
      case 2:
        return formData.skills.length >= 1;
      case 3:
        return formData.urgency && formData.duration && formData.location;
      case 4:
        return formData.budgetAmount;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !needsSkills) {
      setCurrentStep(3);
    } else if (canProceed() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 3 && !needsSkills) {
      setCurrentStep(1);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#EEF7FF] flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded-full mb-3">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">GofaGuy</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Connect with fellow students. Get things done on campus.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <Step1Description
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                    onNext={handleNext}
                    canProceed={canProceed()}
                    showTips={showTips}
                    onToggleTips={() => setShowTips(!showTips)}
                  />
                )}

                {currentStep === 2 && needsSkills && (
                  <Step2Skills
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                    onNext={handleNext}
                    onBack={handleBack}
                    canProceed={canProceed()}
                  />
                )}

                {currentStep === 3 && (
                  <Step3Timeline
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                    onNext={handleNext}
                    onBack={handleBack}
                    canProceed={canProceed()}
                  />
                )}

                {currentStep === 4 && (
                  <Step4Payment
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                    onNext={handleNext}
                    onBack={handleBack}
                    canProceed={canProceed()}
                  />
                )}

                {currentStep === 5 && (
                  <Step5Review
                    formData={formData}
                    needsSkills={needsSkills}
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                    onEditStep={setCurrentStep}
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="lg:w-80 order-1 lg:order-2">
              <StepIndicator
                currentStep={currentStep}
                filteredSteps={filteredSteps}
                onStepClick={setCurrentStep}
              />
            </div>
          </div>

          <SuccessNotification show={showSuccess} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-[var(--color-text-muted)] text-sm">
              Empowering students across African campuses
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
