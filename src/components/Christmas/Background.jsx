import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const Background = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "bg-primary", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "repulse", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "bubble",
            parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
          },
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1
              },
              bounce: {
                distance: 200
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5
                },
                radius: 60
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 0.5
                }
              },
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
          },
          bubble: {
            distance: 400,
            duration: 0.3,
            mix: false,
            opacity: 1,
            size: 4,
          },
          slow: {
            factor: 3,
            radius: 200
          },
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff"
                },
                stop: {
                  value: "#000000"
                }
              },
              radius: 1000
            },
            shadow: {
              color: {
                value: "#000000"
              },
              length: 2000
            }
          }
        },
      },
      particles: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          }
        },
        collisions: {
          absorb: {
            speed: 2
          },
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            }
          },
          enable: false,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0
          }
        },
        color: {
          value: "#fff",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            }
          }
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 600,
              y: 1200
            }
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0
          },
          decay: 0,
          distance: {},
          direction: "bottom",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50
          },
          path: {
            clamp: true,
            delay: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0
            },
            enable: false,
            options: {}
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fillColor: {
              value: "#000000"
            }
          },
          vibrate: false,
          warp: false
        },
        number: {
          density: {
            enable: true,
            area: 800,
            factor: 1000
          },
          limit: 0,
          value: 400
        },
        opacity: {
          random: {
            enable: true,
            minimumValue: 0.1
          },
          value: {
            min: 0.1,
            max: 0.5
          },
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.1
          }
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000"
          },
          enable: false,
          offset: {
            x: 0,
            y: 0
          }
        },
        shape: {
          options: {},
          type: "circle"
        },
        size: {
          random: {
            enable: true,
            minimumValue: 1
          },
          value: {
            min: 1,
            max: 10
          },
          animation: {
            count: 0,
            enable: false,
            speed: 40,
            decay: 0,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.1
          }
        },
        stroke: {
          width: 0
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1
        },
        life: {
          count: 0,
          delay: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 0,
            sync: false
          },
          duration: {
            random: {
              enable: false,
              minimumValue: 0.0001
            },
            value: 0,
            sync: false
          }
        },
        rotate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: "clockwise",
          path: false
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 3
            },
            rate: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: {
                min: 4,
                max: 9
              }
            },
            sizeOffset: true
          }
        },
        roll: {
          darken: {
            enable: false,
            value: 0
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0
          },
          mode: "vertical",
          speed: 25
        },
        tilt: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false
          },
          direction: "clockwise",
          enable: false
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1
          }
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10
          }
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            sync: false
          },
          enable: false,
          opacity: 1,
          rotation: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 45
          },
          width: 1
        },
        links: {
          blink: false,
          color: {
            value: "#ffffff"
          },
          consent: false,
          distance: 500,
          enable: false,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000"
            },
            enable: false
          },
          triangles: {
            enable: false,
            frequency: 1
          },
          width: 2,
          warp: false
        },
        repulse: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default Background;