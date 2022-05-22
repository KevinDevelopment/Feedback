import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de uma nuvem'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

//Object.Entries

/*[
    [ BUG, {...} ],
    [],
    []

]*/

export function WidgetForm() {

    function handleRestartFeedback() {
        setFeedbackType(null);  
       
    }

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Developed by Kevin Ferreira
            </footer>
        </div>
    );
}