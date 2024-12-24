// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { Card } from "../Home/Card";

export const Colleges = () => {
  // const [cards, setCards] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/colleges")
  //     .then((response) => {
  //       setCards(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  const fetchCards = [
    {
      _id: "676994b48754bd892f642d7b",
      name: "Harvard University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply online through the university portal.",
      events: [
        {
          name: "Cultural Fest",
          description: "A celebration of arts and culture.",
        },
        {
          name: "Science Expo",
          description: "Showcase of innovative projects.",
        },
      ],
      research: [
        {
          title: "AI in Healthcare",
          link: "https://example.com/research1",
        },
        {
          title: "Climate Change Solutions",
          link: "https://example.com/research2",
        },
      ],
      sports: ["Football", "Basketball"],
      gallery: [
        "https://example.com/gallery1.jpg",
        "https://example.com/gallery2.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d7c",
      name: "Stanford University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Submit your application through the Common App.",
      events: [
        {
          name: "Tech Fair",
          description: "Innovations in technology and startups.",
        },
        {
          name: "Music Night",
          description: "A night of melodies and rhythms.",
        },
      ],
      research: [
        {
          title: "Renewable Energy",
          link: "https://example.com/research3",
        },
        {
          title: "Advanced Robotics",
          link: "https://example.com/research4",
        },
      ],
      sports: ["Tennis", "Swimming"],
      gallery: [
        "https://example.com/gallery3.jpg",
        "https://example.com/gallery4.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d7d",
      name: "MIT",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Submit your application through the MIT portal.",
      events: [
        {
          name: "Hackathon",
          description: "24-hour coding competition.",
        },
        {
          name: "Innovation Week",
          description: "Workshops and networking for innovators.",
        },
      ],
      research: [
        {
          title: "Quantum Computing",
          link: "https://example.com/research5",
        },
        {
          title: "Autonomous Vehicles",
          link: "https://example.com/research6",
        },
      ],
      sports: ["Soccer", "Rowing"],
      gallery: [
        "https://example.com/gallery5.jpg",
        "https://example.com/gallery6.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d7e",
      name: "Oxford University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply via UCAS with a strong personal statement.",
      events: [
        {
          name: "Debate Championship",
          description: "Global leaders in debating.",
        },
        {
          name: "Literature Fest",
          description: "Exploration of literature and poetry.",
        },
      ],
      research: [
        {
          title: "Genomics Research",
          link: "https://example.com/research7",
        },
        {
          title: "Artificial Intelligence",
          link: "https://example.com/research8",
        },
      ],
      sports: ["Cricket", "Hockey"],
      gallery: [
        "https://example.com/gallery7.jpg",
        "https://example.com/gallery8.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d7f",
      name: "Cambridge University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply through the university application portal.",
      events: [
        {
          name: "Open Day",
          description: "Campus tours and information sessions.",
        },
        {
          name: "Research Symposium",
          description: "Presentation of groundbreaking studies.",
        },
      ],
      research: [
        {
          title: "Cancer Treatments",
          link: "https://example.com/research9",
        },
        {
          title: "Space Exploration",
          link: "https://example.com/research10",
        },
      ],
      sports: ["Rowing", "Rugby"],
      gallery: [
        "https://example.com/gallery9.jpg",
        "https://example.com/gallery10.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d80",
      name: "Yale University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply online through the Yale application portal.",
      events: [
        {
          name: "Drama Week",
          description: "Stage performances by students.",
        },
        {
          name: "Tech Conference",
          description: "Discussing the future of technology.",
        },
      ],
      research: [
        {
          title: "Blockchain Technology",
          link: "https://example.com/research11",
        },
        {
          title: "Renewable Agriculture",
          link: "https://example.com/research12",
        },
      ],
      sports: ["Lacrosse", "Track and Field"],
      gallery: [
        "https://example.com/gallery11.jpg",
        "https://example.com/gallery12.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d81",
      name: "California Institute of Technology",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply through the Common App or Coalition App.",
      events: [
        {
          name: "Science Fair",
          description: "Showcasing scientific achievements.",
        },
        {
          name: "Robotics Championship",
          description: "Competitions for innovative robots.",
        },
      ],
      research: [
        {
          title: "Astrophysics Discoveries",
          link: "https://example.com/research13",
        },
        {
          title: "Nanotechnology",
          link: "https://example.com/research14",
        },
      ],
      sports: ["Swimming", "Tennis"],
      gallery: [
        "https://example.com/gallery13.jpg",
        "https://example.com/gallery14.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d82",
      name: "Princeton University",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply through the Princeton-specific application.",
      events: [
        {
          name: "Innovation Summit",
          description: "Talks and panels on innovation.",
        },
        {
          name: "Film Festival",
          description: "Student-made films and documentaries.",
        },
      ],
      research: [
        {
          title: "Quantum Physics",
          link: "https://example.com/research15",
        },
        {
          title: "Sustainable Energy",
          link: "https://example.com/research16",
        },
      ],
      sports: ["Basketball", "Football"],
      gallery: [
        "https://example.com/gallery15.jpg",
        "https://example.com/gallery16.jpg",
      ],
    },
    {
      _id: "676994b48754bd892f642d83",
      name: "University of California, Berkeley",
      image:
        "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      admission_process: "Apply online through the UC system.",
      events: [
        {
          name: "Startup Pitch Day",
          description: "Pitch your startup ideas.",
        },
        {
          name: "Cultural Diversity Week",
          description: "Celebrating cultural diversity on campus.",
        },
      ],
      research: [
        {
          title: "AI Ethics",
          link: "https://example.com/research17",
        },
        {
          title: "Environmental Science",
          link: "https://example.com/research18",
        },
      ],
      sports: ["Baseball", "Volleyball"],
      gallery: [
        "https://example.com/gallery17.jpg",
        "https://example.com/gallery18.jpg",
      ],
    },
  ];

  console.log(fetchCards);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fetchCards?.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};
