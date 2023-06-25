import React from "react";
import WorkoutPlan from "./WorkoutPlan";
import "../css/plans.css";
import Navbar from "./Navbar";
function PlansPage() {
  return (
    <div>
      <Navbar />
      <header>
        <h1 className="workout-plan">Workout Plans</h1>
      </header>
      <WorkoutPlan
        title="Beginner Full-Body Workout"
        description="A beginner-friendly workout plan targeting all major muscle groups."
        instructions={[
          "Squats: 3 sets of 12 reps",
          "Push-ups: 3 sets of 10 reps",
          "Lunges: 3 sets of 12 reps per leg",
          "Dumbbell Shoulder Press: 3 sets of 10 reps",
          "Plank: 3 sets of 30 seconds",
        ]}
        images={[
          require("../images/beg 1.jpg"),
          require("../images/beg 2.jpg"),
          require("../images/hiit 1.webp"),
        ]}
      />

      <WorkoutPlan
        title="High-Intensity Interval Training (HIIT)"
        description="An intense cardio workout plan to boost metabolism and burn calories."
        instructions={[
          "Jumping Jacks: 3 sets of 30 seconds",
          "Mountain Climbers: 3 sets of 30 seconds",
          "Burpees: 3 sets of 10 reps",
          "High Knees: 3 sets of 30 seconds",
          "Bicycle Crunches: 3 sets of 12 reps per side",
        ]}
        images={[
          require("../images/hiit 1.webp"),
          require("../images/hiit4.png"),
          require("../images/hiit5.jpg"),
        ]}
      />

      <WorkoutPlan
        title="Cardio Blast"
        description="A high-intensity cardio workout to improve endurance and burn calories."
        instructions={[
          "Jumping Jacks: 3 sets of 30 seconds",
          "High Knees: 3 sets of 30 seconds",
          "Mountain Climbers: 3 sets of 30 seconds",
          "Burpees: 3 sets of 10 reps",
          "Running: 20 minutes",
        ]}
        images={[
          require("../images/cardio 1.jpg"),
          require("../images/cardio 2.jpg"),
          require("../images/cardio 3.jpg"),
        ]}
      />
    </div>
  );
}

export default PlansPage;
