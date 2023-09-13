import { SkillsInfo } from "./SkillsInfo";
const getSkillIcon = (skillName) => {
  const skill = SkillsInfo.find(skill => skill.alt === skillName);
  return skill ? skill.alt : null;
};

const ProjectsInfo = [
  {
    title:
      "Real-Time Road Sign Detection, Recognition, and Driver Guidance System",
    date: "APRIL 2023",
    description:
      "Developed a system using YOLOv7 and a two-layer neural network for real-time road sign detection and recognition with high accuracy.",
    image: "/Files/traffic_sign.jpg", // Replace with your image path
    overview: [
    "In the rapidly evolving landscape of autonomous driving and advanced driver assistance systems, the ability to accurately detect and recognize road signs in real-time is paramount. This project aimed to develop a state-of-the-art system capable of detecting road signs and subsequently categorizing them into distinct types, all in real-time.",
    
    "The system was architected in two layers. The first layer focused on the detection of signboards, while the second was dedicated to classifying the detected signs into one of 47 distinct categories. Through rigorous iterations and model evaluations, the system achieved high accuracy, making it a potential candidate for integration into real-world driving assistance systems.",
    
    "Detailed Breakdown:",
    
    "Signboard Detection:",
    
    "Initial trials were conducted using YOLOv3 and YOLOv5. However, after six iterative versions, YOLOv5 emerged as the optimal choice for signboard detection due to its superior performance metrics.",
    "The model's training parameters were meticulously configured using the train.py file from the YOLOv5 library.",
    "Performance tracking was done using metrics such as training loss, validation loss, object loss, boundary-box loss, and class loss. This rigorous evaluation allowed for the identification of areas of improvement, leading to hyperparameter tuning and model optimization.",
    "Signboard Classification:",
    
    "The journey began with a basic neural network model with a sigmoid activation function. However, the transition to ResNet significantly enhanced the classification results.",
    "The model was trained on a curated dataset comprising original and augmented images. The augmentation was achieved using advanced computer vision techniques, ensuring a robust training process.",
    "Continuous monitoring of training and validation losses facilitated further refinements, with techniques like model assembly and alternative backbone architectures being explored to elevate the system's performance.",
    "Data Collection & Preprocessing:",
    
    "The LISA dataset served as the foundation for the first layer of the model. The entire process of data acquisition and preprocessing was managed to ensure its suitability for training.",
    "For the second dataset, a combination of web scraping and manual curation was employed. Images were sourced from diverse platforms, including the http://www.trafficsign.us/ website.",
    "Advanced computer vision techniques were employed to augment the dataset, ensuring a comprehensive training process. Proper labeling and dataset preparation were paramount, ensuring the models were trained on high-quality data.",
    ],
   tools: [
    // getSkillIcon("Deep Learning"),
    // getSkillIcon("YOLOv7"),
    getSkillIcon("Python"),
    getSkillIcon("TensorFlow"),
    // getSkillIcon("Performance Metrics")
  ],
  //[
  //   "Deep Learning Frameworks: YOLOv3, YOLOv5, ResNet",
  //   "Data Augmentation: Image transformations, Gaussian blur, Salt and pepper noise, Median filters",
  //   "Data Acquisition: Web scraping techniques, Manual curation",
  //   "Performance Metrics: Training loss, Validation loss, Object loss, Boundary-box loss, Class loss",
  //   "Optimization Techniques: Hyperparameter tuning, Model assembly, Backbone architectural adjustments",
  // ],
  },




  {
    title: "News Classifier using Kafka",
    date: "FEB 2023",
    description:
      "Real-time news classification system to classify articles into different categories using NLP and ML algorithms. Utilized Kafka to consume, classify, and store news articles in real-time.",
    image: "/Files/News_Classification.png", // Replace with your image path
    overview: [
    "The project aimed to develop a real-time news classification system capable of categorizing news articles from various sources into distinct categories such as politics, sports, entertainment, and more. With the rapid surge of online news content, there was a pressing need for an efficient system that could handle the classification task in real-time. The solution leveraged Kafka for real-time data streaming, ensuring the efficient ingestion and processing of news articles. Machine learning and natural language processing algorithms were employed to classify the articles based on their content. The classified articles were then stored in appropriate categories for easy retrieval and display.",

    "Objectives:",
    
    "Develop a real-time news classification system.",
    "Classify news articles into distinct categories using machine learning and NLP algorithms.",
    "Use Kafka to consume news articles in real-time.",
    "Implement MLOps practices for continuous model improvement.",
    "Design a user interface to display classified news articles in real-time.",
    "Results:",
    "The system was capable of classifying news articles into different categories in real-time, offering an effective and scalable solution for news classification. The Logistic Regression model demonstrated the best overall performance in terms of accuracy and runtime. The project achieved a scalable and efficient real-time news classification system capable of handling large volumes of data.",
    
    "Lessons Learned:",
    "The project provided insights into the importance of data preprocessing, model selection, and evaluation, MLOps practices, and the challenges of handling real-time data. The team also learned the significance of selecting the right tools and techniques to address specific challenges.",
    
    "Team Contributions:",
    "The project was a collaborative effort, with each team member focusing on specific aspects. From researching data sources, handling real-time data streaming with Kafka, implementing NLP techniques for preprocessing, developing the machine learning pipeline, to designing the MongoDB storage solution and the front-end interface, every team member played a crucial role in the project's success.",
  ],
    tools: [
    "Kafka: Used as a distributed streaming platform for real-time data streaming.",
    "MongoDB: A NoSQL database chosen for storing the categorized news articles.",
    "Natural Language Processing (NLP) Libraries: Python NLP libraries, including NLTK and spaCy, were used for preprocessing the news articles.",
    "PySpark: Handled the big data processing and machine learning aspects of the project.",
    "Machine Learning Libraries: Algorithms such as Logistic Regression, RandomForest, and Naive Bayes were implemented using the PySpark ML library.",
    "Front-End Interface: Developed using web technologies, including HTML, CSS, and JavaScript, to display classified news articles and enable user interaction.",
  ],

  },




  {
    title:
      "AI-Powered Environmental Adaptive Assistant for the Visually Impaired",
    date: "DEC 2022",
    description:
      "AI-driven solution utilizing YOLOv5, empowers visually impaired individuals with enhanced mobility and safety by providing real-time object detection, recognition, and audio guidance for obstacle-free navigation.",
    image: "/Files/yolo_edit.jpg", // Replace with your image path
    overview: [
    "The AI-Powered Environmental Adaptive Assistant is a groundbreaking initiative aimed at enhancing the quality of life for visually impaired individuals. Recognizing the challenges faced by the blind community in navigating their surroundings, a team from the University of Colorado Denver's Department of Computer Science and Engineering embarked on a mission to harness the power of artificial intelligence to bridge this gap.",

    "The core objective of this project was to transform the visual world into an auditory one, enabling blind individuals to see through sound. By leveraging real-time object detection and recognition, the system provides immediate audio feedback about the environment, ensuring safer and more confident mobility for its users.",
    
    "The project's foundation is built upon the YOLO (You Only Look Once) algorithm, known for its speed and accuracy in object detection. The system captures video through a portable camera device, which then streams to a server equipped with the YOLO model for real-time image recognition. Once objects are detected, their spatial positions are translated into audio cues, guiding the user about potential obstacles or points of interest.",
    
    "Additionally, the system boasts an Optical Character Recognition (OCR) feature, which uses the Tesseract engine. This feature allows visually impaired users to read printed text, as the system captures text patterns and translates them into audio output. Whether it's reading a book, a signboard, or any printed material, the user receives clear and accurate verbal feedback.",
    ],
    tools:[
    "YOLO (You Only Look Once) Algorithm",
    "Tesseract OCR Engine",
    "Python's Libraries",
  ],

  },




  {
    title: "Cloud-based e-commerce application using flutter and firebase",
    date: "OCT 2021 - JUNE 2022",
    description:
      "Created a full-featured Flutter application with Firebase backend services, incorporating authentication, authorization, and in-app purchases.",
    image: "/Files/flutterfirebase.png",
    overview: [
    "The project aimed to develop a cloud-based e-commerce application using Flutter and Firebase. This application serves as a comprehensive platform for users to browse various product categories, such as shirts, shoes, and purses, and make purchases seamlessly. The application is built on the robust Flutter framework, which is a Google product known for its capability to design, test, and publish stunning applications across multiple platforms using a single codebase.",

    "The application's backend is powered by Firebase, a Google program that provides a real-time database, allowing for instantaneous data access and offline data availability. Firebase's built-in APIs have been leveraged to expedite functionalities that would traditionally take longer in conventional database systems. The application also incorporates Firebase's authentication services, ensuring secure user registration and login processes.",
    ],
    tools:[
    "Flutter",
    "Firebase",
    "Dart Language",
    "Android Studio",
    "Google Firebase Authentication Packages",
    ],
  },




  {
    title: "Software for polyclinic in python",
    date: "NOV 2021",
    description:
      "Developed a web application to manage appointments, prescriptions, and billing for a polyclinic.",
    image: "/Files/polyclinic.png",
    overview: [
    "The Software for Polyclinic in Python is a comprehensive web application designed to streamline and automate the daily operations of a polyclinic. The primary objective of this project was to transition from the conventional manual methods of managing a polyclinic, which were time-consuming and involved extensive paperwork, to an efficient IT-based solution.",

    "The software offers a centralized platform that electronically processes all facets of hospital activities, from patient and doctor registrations to appointment scheduling, prescription management, and billing. It ensures that patient information is kept updated and secure, with the ability to retrieve and manipulate these details as required. The system also provides an interactive dashboard for admins, doctors, and patients, allowing for efficient communication and management.",
    
    "Key features include:",
    
    "User Registration: Both doctors and patients can register, with each registration requiring administrative approval.",
    "Appointment Management: Admins can view, confirm, or reject appointments based on doctor availability and patient needs.",
    "Prescription Management: Doctors can create and manage prescriptions for their respective patients.",
    "Billing: Admins can generate bills by inputting details such as room charges, doctor fees, and medication costs. Patients can view and download their bills.",
    "User Dashboards: Separate dashboards for admins, doctors, and patients, each tailored to their specific needs and functionalities.",
    "The software aims to eliminate manual errors, enhance patient satisfaction by providing quality healthcare, and improve the overall operational efficiency of the polyclinic. With its deployment, the polyclinic can expect faster information processing, reduced bookkeeping efforts, and increased accuracy.",
    ],
    tools:[
    "Django",
    "HTML & CSS",
    "PyCharm",
    ],
  },




  {
    title: "Enhancing the Prediction of Hazardous Asteroids using a Hybrid XGBoost Classifier Method",
    date: "SEPT 2021",
    description:
      "Developed a web application to manage appointments, prescriptions, and billing for a polyclinic.",
    image: "/Files/asteroid.gif", // Replace with your image path
    overview: [
    "The unpredictable trajectory of asteroids necessitates the use of computational power for accurate predictions and mitigation strategies. With vast amounts of data being collected every minute, traditional algorithms struggle to process it in real-time. Preliminary studies have shown promising results with machine learning algorithms. This research proposes an enhanced method using the XGBOOST algorithm combined with XGBclassifier based feature selection. The study also evaluates various machine learning techniques and feature selection algorithms to determine the most effective approach for predicting hazardous asteroids. The vastness of space and the unpredictable nature of asteroids make it a challenge to forecast potential asteroid collisions with Earth. With the continuous influx of data from automated solutions like NASA’s Goldstone Deep Space Communications and Spacewatch's Moving Object Detection Program, there's a pressing need for efficient computational methods to process this data in real-time. This project introduces a novel method that leverages the XGBOOST algorithm, enhanced with XGBclassifier based feature selection, to improve the accuracy of predicting hazardous asteroids.",
    ],
    tools: [
    "XGBOOST Classifier: An optimized gradient boosting machine learning algorithm known for its efficiency and performance.",
    "XGBClassifier for Feature Selection: A method derived from XGBOOST to select the most informative features from a dataset, enhancing the prediction accuracy.",
    "Support Vector Machines (SVM): A supervised learning algorithm effective in high-dimensional spaces, used for classification.",
    "Random Forest: An ensemble learning method suitable for high-dimensional data modeling, known for its accuracy in classification and regression tasks.",
    "Mutual Information (MI): A statistical measure used for feature selection, indicating the dependency between two random variables.",
  ]
  },
];

export { ProjectsInfo };
