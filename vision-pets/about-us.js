
// ======== GSAP  animation =============


let vactextpackanimation = gsap.timeline();

vactextpackanimation.from('.vac-text',{
opacity:0,
duration:1.5,
});


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2
let vactext = gsap.timeline({
  scrollTrigger: {
    trigger: ".vac-text-leader",
    start: 'top center',
    end: 'bottom start',
    once: true, // Adjust the scrub value as needed
  },
});

vactext.from('.vac-text-leader', {
    y:30,
  opacity: 0,
 
});

// 3
let vactexthere = gsap.timeline({
    scrollTrigger: {
      trigger: ".vac-text-here",
      start: 'top center',
      end: 'bottom center',
      once: true, // Adjust the scrub value as needed
    },
  });
  
  vactexthere.from('.vac-text-here', {
      y:30,
    opacity: 0,
  });
  
// 4
  let dogcrd = gsap.timeline({
    scrollTrigger: {
      trigger: ".dog_card",
      once: true, // Adjust the scrub value as needed
    },
  });

  dogcrd.from('.dog_card',{
    y:50,
    opacity:0,
    stagger:{
      each: 0.2,
    }
    });
    
    // 5

    let vactextstnd = gsap.timeline({
        scrollTrigger: {
          trigger: ".vac-text-dog",
          start: 'top center',
          end: 'bottom center',
          once: true, // Adjust the scrub value as needed
        },
      });
      
      vactextstnd.from('.vac-text-dog', {
          y:30,
        opacity: 0,
      });

    //   6

    let vactextsexp = gsap.timeline({
        scrollTrigger: {
          trigger: ".what_we_about_pups h2",
          once: true, // Adjust the scrub value as needed
        },
      });
      
      vactextsexp.from('.what_we_about_pups h2', {
          y:30,
        opacity: 0,
      });

    //   7

    let dogcrdpup = gsap.timeline({
        scrollTrigger: {
          trigger: ".dog_card-pups",
          once: true, // Adjust the scrub value as needed
        },
      });
    
      dogcrdpup.from('.dog_card-pups',{
        y:30,
        opacity:0,
        stagger:{
          each: 0.2,
        }
        });

        // 8

        let vactextsexph = gsap.timeline({
            scrollTrigger: {
              trigger: ".what_we_about",
              start: 'top center',
              end: 'bottom center',
              once: true, // Adjust the scrub value as needed
            },
          });
          
          vactextsexph.from('.what_we_about', {
            opacity: 0,
            duration:1,
          });

        //   9
        let vactexttour = gsap.timeline({
            scrollTrigger: {
              trigger: ".vac-text-leader-our-expert",
              start: 'top center',
              end: 'bottom start',
              once: true, // Adjust the scrub value as needed
            },
          });
          
          vactexttour.from('.vac-text-leader-our-expert', {
              y:30,
            opacity: 0,
           
          });

        //   10
        let vactextt = gsap.timeline({
            scrollTrigger: {
              trigger: ".vac-text-leader-expert",
              start: 'top center',
              end: 'bottom start',
              once: true, // Adjust the scrub value as needed
            },
          });
          
          vactextt.from('.vac-text-leader-expert', {
              y:30,
            opacity: 0,
           
          });

        //   11

          let vactexttdog = gsap.timeline({
            scrollTrigger: {
              trigger: ".vac-text-dog-expert",
              start: 'top center',
              end: 'bottom start',
              once: true, // Adjust the scrub value as needed
            },
          });
          
          vactexttdog.from('.vac-text-dog-expert', {
              y:30,
            opacity: 0,
           
          });

          //   12

          let vactexttdogcard = gsap.timeline({
            scrollTrigger: {
              trigger: ".dog_card-expert",
              once: true, // Adjust the scrub value as needed
            },
          });
          
          vactexttdogcard.from('.dog_card-expert', {
              y:30,
            opacity: 0,
            stagger:{
                each: 0.2,
              }
          });