const vm = Vue.createApp({
    data () {
        return {
            projects: [
                {
                photo: "loop-cover.jpeg",
                name: "Loop Magazine Layout",
                course: "Typography",
                completed: "May 2021",
                skills: "Adobe InDesign, Adobe Photoshop",
                description: "To be determined and updated later"
                },
                {
                photo: "lepavot-facade.jpeg",
                name: "Le Pavot Branding System",
                course: "Typography",
                completed: "May 2021",
                skills: "Adobe InDesign, Adobe Photoshop",
                description: "To be determined and updated later"
                },
                {
                photo: "lepavot-homepage.jpeg",
                name: "Le Pavot Website",
                course: "Web Development",
                completed: "May 2021",
                skills: "HTML, Adobe Photoshop",
                description: "To be determined and updated later"
                },
                {
                photo: "michaels-homepage.jpeg",
                name: "Michael's Website Re-Design and Re-Brand",
                course: "Web Design",
                completed: "December 2021",
                skills: "Figma, Adobe Photoshop",
                description: "To be determined and updated later"
                }
            ],
            newPortPhoto: "",
            newPortName: "",
            newPortCourse: "",
            newPortCompleted: "",
            newPortSkills: "",
            newPortDescription: ""
            }
        },
        methods: {
            handleSubmit () {
                const newPortObject = {
                    photo: this.newPortPhoto,
                    name: this.newPortName,
                    course: this.newPortCourse,
                    completed: this.newPortCompleted,
                    skills: this.newPortSkills,
                    description: this.newPortDescription
                    };
                this.projects.push(newPortObject);
                this.newPortPhoto = "";
                this.newPortName = "";
                this.newPortCourse = "";
                this.newPortCompleted = "";
                this.newPortSkills = "";
                this.newPortDescription = "";
                },
            
            isValid() {
                return this.newPortPhoto && this.newPortName && this.newPortCourse && this.newPortCompleted && this.newPortSkills && this.newPortDescription;
            },

            handleDelete (item) {
                this.projects = this.projects.filter(project => {
                    return project !== item;
                });
        }
    }
}).mount("#portfolio");
