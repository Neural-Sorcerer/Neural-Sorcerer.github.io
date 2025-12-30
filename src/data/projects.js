export const projects = [
    {
        title: "Image Processing",
        description: "Enhancing images to improve quality or extract info. Techniques: filtering, edge detection, sharpening, color adjustment. Used in medical imaging, surveillance.",
        image: "/assets/images/preview-gallery/Image-Processing.png",
        tags: ["OpenCV", "Pillow", "NumPy"]
    },
    {
        title: "Image Classification",
        description: "Assigning labels to entire images. Output is confidence scores (e.g., 80% bird, 15% plane). Crucial for medical/legal precision.",
        image: "/assets/images/preview-gallery/Image-Classification.png",
        tags: ["Classification", "CNN", "ResNet"]
    },
    {
        title: "Object Detection",
        description: "Detecting instances of objects with bounding boxes and confidence scores. More complex than classification as it locates objects in space.",
        image: "/assets/images/preview-gallery/Object-Detection.png",
        tags: ["YOLO", "R-CNN", "Bounding Boxes"]
    },
    {
        title: "Segmentation",
        description: "Pixel-wise masking for precise object outlines. Delineates boundaries (e.g., grass vs path). Essential for autonomous driving.",
        image: "/assets/images/preview-gallery/Segmentation.png",
        tags: ["U-Net", "Mask R-CNN", "Semantic"]
    },
    {
        title: "Pose Estimation",
        description: "identifying positions/orientations of body joints (keypoints). Used in AR, sports analytics, animation.",
        image: "/assets/images/preview-gallery/Pose-Estimation.png",
        tags: ["Keypoints", "Skeleton", "Human Pose"]
    },
    {
        title: "OCR",
        description: "Converting scanned text/handwriting into machine-encoded text. Automates data entry, digitizes documents.",
        image: "/assets/images/preview-gallery/OCR.png",
        tags: ["Tesseract", "Text Recognition", "Digitization"]
    },
    {
        title: "Generative Models",
        description: "Creating new data mimicking training set (GANs, VAEs). Generates art, music, or synthetic training data.",
        image: "/assets/images/preview-gallery/Generative-Models.png",
        tags: ["GAN", "VAE", "Diffusion"]
    },
    {
        title: "Super Resolution",
        description: "Enhancing low-res images to high-res, adding missing details via Deep Learning. Used in satellite imaging, old media restoration.",
        image: "/assets/images/preview-gallery/Super-Resolution.png",
        tags: ["SRGAN", "Upscaling", "Restoration"]
    },
    {
        title: "Anomaly Detection",
        description: "Identifying unusual patterns/defects. Used in manufacturing quality control and security surveillance.",
        image: "/assets/images/preview-gallery/Anomaly-Detection.png",
        tags: ["Autoencoders", "Quality Control", "Security"]
    },
    {
        title: "Action Recognition",
        description: "Identifying actions in video sequences (e.g., running, fighting). Critical for sports analysis and security.",
        image: "/assets/images/preview-gallery/Action-Recognition.png",
        tags: ["Video Analysis", "Temporal", "Behavior"]
    },
    {
        title: "Depth Estimation",
        description: "Determining distance of each pixel from the camera. Creates depth maps for autonomous vehicles, robotics.",
        image: "/assets/images/preview-gallery/Depth-Estimation.png",
        tags: ["Stereo", "Monocular", "3D"]
    },
    {
        title: "Model Optimization",
        description: "Refining models for edge devices. Techniques: Quantization, Pruning, Knowledge Distillation. Essential for real-time mobile apps.",
        image: "/assets/images/preview-gallery/Model-Optimization.png",
        tags: ["Quantization", "Pruning", "Distillation"]
    }
]
