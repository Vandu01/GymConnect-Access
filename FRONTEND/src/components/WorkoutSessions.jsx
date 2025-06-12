import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our most popular, high-impact workouts designed to help you
          burn fat, build strength, and boost endurance. Whether you're a
          beginner or a seasoned athlete, there's a session tailored for you.
        </p>
        <img src="/img5.jpg" alt="Intense workout session" />
      </div>

      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Take your training to the next level with our featured bootcamps —
          intense, goal-driven programs built by expert trainers to push your
          limits and deliver results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Full-Body Strength Bootcamp</h4>
            <p>
              Build lean muscle and improve overall fitness through targeted
              compound movements and progressive overload.
            </p>
          </div>
          <div>
            <h4>HIIT Fat Burn Challenge</h4>
            <p>
              Torch calories fast with high-intensity interval training designed
              for maximum fat loss in minimum time.
            </p>
          </div>
          <div>
            <h4>Core & Conditioning Circuit</h4>
            <p>
              Strengthen your core and boost functional fitness through dynamic,
              engaging circuits.
            </p>
          </div>
          <div>
            <h4>Mobility & Recovery Flow</h4>
            <p>
              Enhance flexibility, reduce soreness, and promote recovery with
              mobility-focused movement sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
