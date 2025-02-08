// Delay before carousel moves on from gifs / images.
var carouselTime = 4000;

// Images in front page carousel.
var images = ["resources/2022_fluid_simulation/1.mp4", "resources/2024_solar_panel_drive/2.mp4", "resources/2024_maze_navigating_drone/1.mp4", "resources/protegon/8.gif", "resources/protegon/2.gif", "resources/2024_pizzicato/1.mp4", "resources/2024_pizzicato/2.mp4", "resources/2024_maze_navigating_drone/2.mp4", "resources/2024_gmtk_jam/2.png", "resources/2025_cozy_winter_jam/1.png", "resources/2024_brackeys_jam/3.png", "resources/2024_aqualife/1.png", "resources/2023_slingshot/2.mp4", "resources/2023_gmtk_jam/3.png", "resources/2023_connector_internship/2.png", "resources/2023_connector_internship/3.png", "resources/2023_bayes_tvc/1.mp4", "resources/2023_bayes_tvc/3.mp4", "resources/2023_bachelor_thesis/2.png", "resources/2023_bachelor_thesis/4.jpg", "resources/2022_wind_turbine/1.mp4", "resources/2022_wind_turbine/2.mp4", "resources/2022_wind_turbine/4.mp4", "resources/2022_hoberman_thesis/1.mp4", "resources/2022_collision_detection/2.gif", "resources/2022_collision_detection/3.gif", "resources/2022_collision_detection/5.gif", "resources/2022_fluid_simulation/2.mp4"];

var json_object = [
  {
    title: "Cozy Winter Jam 2025 Entry: Cozy Cabin",
    link: "https://bicyclemice.itch.io/cozy-cabin",
    image_folder: "2025_cozy_winter_jam",
    images: ["0.png", "1.png", "2.png", "3.png"],
    completion: "Completed in January, 2025&nbsp|&nbsp <a href='https://bicyclemice.itch.io/cozy-cabin'>Play in Browser</a>",
    info: "Cozy game jam theme: 'Metamorphosis.' Our game takes place in the remote wilderness of Alaska, where the main character is tasked with transforming their house from dark and dusty to warm and cozy."
  },
  {
    title: "Brackeys Game Jam 2024 Entry: Storm Chaser",
    link: "https://bicyclemice.itch.io/storm-chaser",
    image_folder: "2024_brackeys_jam",
    images: ["1.png", "2.png", "3.png", "4.png"],
    completion: "Completed in September, 2024&nbsp|&nbsp <a href='https://bicyclemice.itch.io/storm-chaser'>Play in Browser</a>",
    info: "Game jam theme: 'Into The Storm.' This addicting game is about driving your car near tornadoes to collect thrills but if you get too close you might get sucked in!"
  },
  {
    title: "GMTK 2024 Game Jam Entry: Barkin Madness",
    link: "https://bicyclemice.itch.io/barkin-madness",
    image_folder: "2024_gmtk_jam",
    images: ["1.png", "2.png"],
    completion: "Completed in August, 2024&nbsp|&nbsp <a href='https://bicyclemice.itch.io/barkin-madness'>Play in Browser</a>",
    info: "Game jam theme: 'Built to Scale.' This game was made in loving memory of our Vizsla Anvic, who passed over the summer. It is about a father trying to manage the desires of all the new dogs his daughter brings home."
  },
  {
    title: "Fault Tolerant Solar Panel Drive",
    image_folder: "2024_solar_panel_drive",
    images: ["1.mp4", "2.mp4", "2.jpg", "3.jpg"],
    completion: "Completed in July, 2024",
    info: "As part of a class on embedded systems, I designed and programmed a fault tolerant solar panel drive. If one of the servos turning the solar panel failed, the mechanism could automatically switch to the second servo by moving the coupling gear."
  },
  {
    title: "Pixel Game Jam 2024 Entry: AquaLife",
    link: "https://bicyclemice.itch.io/aqualife",
    image_folder: "2024_aqualife",
    images: ["0.png", "2.png", "3.png", "1.png"],
    completion: "Completed in May, 2024",
    info: "Game jam theme: 'Aqua.' This game is about transforming a polluted unstable underwater ecosystem into a thriving home for marine life. The player places down structures and cultivates fish habitats to find a delicate balance between environmental variables such as pH and salinity."
  },
  {
    title: "Autonomous Maze Navigating Drone",
    image_folder: "2024_maze_navigating_drone",
    images: ["1.mp4", "2.mp4"],
    completion: "Completed in March, 2024",
    info: "As part of a course on micro air vehicles, I participated in a competition where teams would try to navigate a maze of dynamically changing obstacles to see which drone could fly the longest distance in a given time period. The algorithm I programmed detected the grassy ground and identified the horizon, after this it estimated what shapes are obstacles and mapped them into a bird's-eye view 2D map which it used to navigate and avoid obstacles. Our team made it to 4th place out of 13 teams."
  },
  {
    title: "Pizzicato: Motor Rehabiliation Serious Game",
    link: "https://pizzicato-game.github.io/",
    image_folder: "2024_pizzicato",
    images: ["1.mp4", "2.mp4", "1.png",],
    completion: "Completed in February, 2024&nbsp|&nbsp <a href='https://pizzicato-game.github.io/'>Play in Browser</a>",
    info: "For the course 'Building Serious Games', neuropsychology researchers from the University of Leiden commissioned me and a team of 5 other students to develop a game to aid the motor rehabilitation of patients through sonification (creating sounds through actions). I worked as the lead programmer on the game. Our work was published under the name <a href='https://ieeexplore.ieee.org/document/10645594'>'Sonifying motor skills with Pizzicato, a game for motor behavior research'</a> in 2024 IEEE Conference on Games (CoG). Afterward, I was commissioned to further expand the game by connecting it to an online database for ease of data collection during clinical trials."
  },
  {
    title: "Custom C++ Game Engine",
    link: "https://github.com/martinstarkov/protegon",
    image_folder: "protegon",
    images: ["renderer.png", "pathfinding.png", "fluid.png", "procedural.png", "particles.png", "buttons.png", "platforming.png", "collision.png", "text.png"],
    completion: "Long-term ongoing project (2019 → present)",
    info: "Protegon is a C++ game engine which is programmed almost entirely from scratch using OpenGL and SDL2. Some notable features include a custom batch renderer, scenes, animation, physics and collision detection, fluid simulation, chunk-based procedural generation, camera control, and many more. This is my longest running project to date."
  },
  {
    title: "Slingshot",
    image_folder: "2023_slingshot",
    images: ["1.mp4", "3.mp4", "2.mp4", "4.jpg"],
    completion: "Completed in August, 2023",
    info: "During the summer, I decided to visit my highschool physics teacher and built him a slingshot as a gift. He loved it :)"
  },
  {
    title: "GMTK 2023 Game Jam Entry: Tower Offense",
    link: "https://bicyclemice.itch.io/tower-offense",
    image_folder: "2023_gmtk_jam",
    images: ["1.png", "2.png", "3.png"],
    completion: "Completed in July, 2023",
    info: "Game jam theme: 'Roles Reversed.' Our game was a role-reversal on the tower defense genre, where you send waves of units to attack the enemy castle, which they defend with turrets."
  },
  {
    title: "Thrust-Vector-Controlled Lander Vehicle",
    image_folder: "2023_bayes_tvc",
    images: ["1.mp4", "2.mp4", "3.mp4"],
    completion: "Continued by successor after June, 2023",
    info: "During my time on the University of Edinburgh rocketry team, endeavour, I co-created a subteam which was responsible for developing and manufacturing a vehicle which would fly like a drone except instead of differential thrust it would use servos to direct the single electric ducted fan to control the thrust vector. We also built a test stand for the vehicle."
  },
  {
    title: "BEng Thesis: Hybrid Aerial-Aquatic Vehicle",
    link: "modules/thesis/BEng_thesis.pdf",
    image_folder: "2023_bachelor_thesis",
    images: ["2.png", "1.mp4", "3.jpg", "4.jpg"],
    completion: "Completed in May, 2023",
    info: "For my bachelor thesis, I set out to design and manufacture an autonomous hybrid aerial-aquatic vehicle capable of conducting a rapid transition maneuver from water to air. The concept was to set the vehicle at the bottom of a pool and have it propel through the water, rapidly unfolding upon reaching the air and continuing to fly. While the prototype was ready to fly, difficulty with waterproofing resulted in me running out of time to test the full maneuver."
  },
  {
    title: "JST Electrical Connector Vibration Reduction",
    image_folder: "2023_connector_internship",
    images: ["2.png", "3.png", "4.png", "8.png"],
    completion: "Completed in March, 2023",
    info: "For about 5 months, I worked on a research project for JST UK developing electrical connectors which would have improved resistance to vibration. The company sent us some connectors and I reverse engineered accurate CAD models of them with metamaterial ribs. We then SLA printed them and put them through tensile vibration testing."
  },
  {
    title: "Metamaterial CVT Gear System",
    link: "modules/group_thesis/hoberman_group_thesis.pdf",
    image_folder: "2022_hoberman_thesis",
    images: ["1.mp4"],
    completion: "Completed in November, 2022",
    info: "As part of a group thesis, I designed and manufactured a novel gear system which uses the Hoberman ring mechanism to expand and contract a belt to mimic a traditional CVT gear system. The research was published under the name <a href='https://www.research.ed.ac.uk/en/publications/design-of-variable-radius-kinematic-metastructures-for-the-contro'>'Design of variable-radius kinematic metastructures for the control of belt drive transmission ratios'</a> in Proceedings of IEMTRONICS 2024."
  },
  {
    title: "Collision Detection System",
    link: "https://github.com/martinstarkov/protegon/blob/main/src/physics/collision.cpp",
    image_folder: "2022_collision_detection",
    images: ["1.png", "2.gif", "3.gif", "4.gif", "5.gif"],
    completion: "Completed in September, 2022",
    info: "While developing my game engine, I took a detour learning about how to implement collision detection and resolution for various shapes. In the process, I wrote my own math library with matrices and vectors, which taught me to appreciate the practical application of linear algebra."
  },
  {
    title: "Cache-Friendly ECS C++ Library",
    link: "https://github.com/martinstarkov/ecs",
    image_folder: "2022_ecs_library",
    images: ["1.png"],
    completion: "Completed in August, 2022",
    info: "The first ever library I created started from a deep dive of research into entity component systems and computer memory. I worked on it for over a year and still maintain it regularly."
  },
  {
    title: "GPU Optimized Fluid Simulation",
    link: "https://github.com/codeplaysoftware/computecpp-sdk/tree/master/demos/fluid",
    image_folder: "2022_fluid_simulation",
    images: ["1.mp4", "2.mp4"],
    completion: "Completed in June, 2022",
    info: "While interning at Codeplay, I wrote demos (such as this fluid simulation) for SYCL and ComputeCpp, their parallel programming framework."
  },
  {
    title: "Portable Wind Turbine",
    image_folder: "2022_wind_turbine",
    images: ["1.mp4", "2.mp4", "4.mp4", "5.mp4"],
    completion: "Completed in April, 2022",
    info: "I was responsible for the mechanical design and manufacturing of this group project wind turbine. It was subject to requirements such as fitting in a small storage container and being able to be assembled within 60 seconds. To reduce size while maintaining high RPM, I designed a stackable planetary gear."
  },
  {
    title: "GMTK 2022 Game Jam Entry: Stroll of the Dice",
    link: "https://bicyclemice.itch.io/stroll-of-the-dice",
    image_folder: "2022_gmtk_jam",
    images: ["1.mp4"],
    completion: "Completed in July, 2022",
    info: "Game jam theme: 'Roll of the dice.' This was my first ever game jam. We made a simple game about a dice rolling toward a green square."
  },
  {
    title: "Chemical Spill Simulation",
    link: "https://github.com/martinstarkov/cmm3-project",
    image_folder: "2021_chemical_spill_simulation",
    images: ["1.gif", "2.gif"],
    completion: "Completed in November, 2021",
    info: "Program meant to simulate the mixing and spread of chemical spills for various initial conditions."
  },
  {
    title: "Gear Box CAD Design",
    image_folder: "2021_gear_box",
    images: ["1.mp4"],
    completion: "Completed in December, 2021",
    info: "My first ever CAD assignment was a gigantic gear box for a hydropower station. Our team calculated out all the bearing and gear thicknesses to withstand the expected loading. Needless to say, the design was fairly crude.",
  },
  {
    title: "CreatED Hack 2020 Website",
    link: "https://createdhack.github.io/",
    image_folder: "2020_created_hack",
    images: ["1.mp4"],
    completion: "Completed in January, 2020",
    info: "As part of The University of Edinburgh Robotics club, I worked as the lead web developer for the CreatED Hack 2020 webpage."
  },
];