
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import * as React from "react";
//@jsxRuntime automatic @jsxImportSource react
export const meta = {"title":"Inspiration and Successful Game Principles","date":"2025-03-25","author":"Aaron Alcalde"};

/*@jsxRuntime automatic @jsxImportSource react*/

function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    strong: "strong",
    h3: "h3",
    h4: "h4"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Welcome to the first actual entry in the devlog!"
    }), "\n", _jsx(_components.p, {
      children: "Today, I'll sort of be catching everyone up to where I am at the time of creating my portfolio site. It's going to cover the main sources of inspiration for the game, as well as some personal takeaways from each."
    }), "\n", _jsx(_components.p, {
      children: "let's get into it!"
    }), "\n", _jsx(_components.h2, {
      children: "Inspiration and Where it Comes From"
    }), "\n", _jsxs(_components.p, {
      children: ["When thinking back on the many games that i've played over the years, there are a few that really stand out to me as sources of inspiration for this project. The games that have really stuck out to me in terms of exceptional design are ", _jsx(_components.strong, {
        children: "Hades"
      }), ", ", _jsx(_components.strong, {
        children: "Devil May Cry 5"
      }), ", ", _jsx(_components.strong, {
        children: "Breath of the Wild"
      }), " , and ", _jsx(_components.strong, {
        children: "Super Mario Odyssey"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: "Here's what I noticed about each of these games, potentially thinking about the type of game I would want to make using the principles learned."
    }), "\n", _jsx(_components.h3, {
      children: "Hades"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsx("img", {
        src: "/assets/devlog/2025-03-25/hades-art.webp",
        alt: "Hades Artwork",
        width: "auto",
        height: "300px"
      }), _jsx("div", {
        className: "text-content",
        children: _jsx("p", {
          children: _jsx(_components.p, {
            children: "Hades is a roguelike dungeon crawler from Supergiant Games, and it's well known for blending a deep narrative with fast-paced gameplay. The roguelike genre isn't typically thought of as being defined by compelling storytelling, which is why Hades stands out so well. It's set within the vast world of Greek Mythology, it invites players into a vivid underworld teeming with both depth and replayability."
          })
        })
      })]
    }), "\n", _jsx(_components.h4, {
      children: "Key Principles and Takeaways"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Character Depth"
        }), _jsxs("p", {
          children: [_jsx(_components.p, {
            children: "Hades excels in character depth through its intricate storytelling, distinct personalities, and rich dialogues. Characters evolve alongside the player as he they progress, revealing nuanced traits and backstories."
          }), _jsx("br", {}), _jsxs(_components.p, {
            children: ["I recommend watching this video to gain a better understanding of how Hades' dialogue system achieves such a high bar:\r\n", _jsx("strong", {
              children: _jsx("a", {
                href: "https://www.youtube.com/watch?v=bwdYL0KFA_U",
                target: "_blank",
                children: " The System Behind Hades' Astounding Dialogue "
              })
            })]
          }), _jsx("br", {}), _jsx(_components.p, {
            children: "Zagreus's witty personality, coupled with an incredibly long script displaying authentic familial dynamics through believable dialogue, creates strong connections with main, side, and tertiary characters, enhancing the overall player immersion."
          })]
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/skelly.webp",
          alt: "Skelly",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Skelly is one of the major side characters in Hades.", _jsx("br", {}), "\r\nHe has an incredibly robust library of dialogue,", _jsx("br", {}), "\r\ncontaining everything from tips to witty one-liners", _jsx("br", {}), "\r\nto reminiscient monologues about his time as a ", _jsx("br", {}), "\r\nship captain when he was alive."]
          })
        })]
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Art Style"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Hades’s art style uses vibrant visuals with a strong emphasis on Greek mythology aesthetics. As the game is played entirely in isometric perspective, many background elements and still objects are hand drawn, with characters and moving assets sculpted in 3D with a 2D shader over top."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/thanatos-concept-art.jpg",
          alt: "Thanatos Concept Art",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Every character portrait is hand-drawn in 2D,", _jsx("br", {}), "\r\nwith 3D models being shaded to look as close to their", _jsx("br", {}), "\r\n2D counterparts as possible."]
          })
        })]
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Boss Design"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Bosses in Hades are meticulously crafted, offering unique challenges that evolve dynamically. Each encounter requires a new strategy as well as quick thinking and reactions. This design rewards players for mastering mechanics while ensuring encounters remain fresh and engaging due to the many possible weapon builds in the game."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/bone-hydra.jpg",
          alt: "Bone Hydra",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["The Bone Hydra is one of the more iconic fights", _jsx("br", {}), "\r\nin Hades, with several attacks, phases,", _jsx("br", {}), "\r\nand tests of the player's skill."]
          })
        })]
      })]
    }), "\n", _jsx(_components.h3, {
      children: "Devil May Cry 5"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsx("img", {
        src: "/assets/devlog/2025-03-25/devil-may-cry-art.png",
        alt: "Devil May Cry 5 Artwork",
        width: "auto",
        height: "300px"
      }), _jsx("div", {
        className: "text-content",
        children: _jsx("p", {
          children: _jsx(_components.p, {
            children: "Devil May Cry 5, developed by Capcom, is renowned for its exhilarating combat system and stylish action sequences. The game continues the legacy of the franchise, pushing boundaries in fluid combat and player expression."
          })
        })
      })]
    }), "\n", _jsx(_components.h4, {
      children: "Key Principles and Takeaways"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Combat Fluidity and Depth"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Devil May Cry 5 set a new benchmark for fluidity and combat depth in action games. The diverse combat system, featuring distinct playstyles for each character, allows for intricate combos and player freedom. Seamless transitions between attacks create an intuitive yet profoundly deep combat experience, rewarding player skill and creativity."
          })
        })]
      }), _jsx("figure", {
        children: _jsx("img", {
          src: "/assets/devlog/2025-03-25/dmc-combat.jpg",
          alt: "DMC5 Combat",
          width: "auto",
          height: "175px"
        })
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Player Expression"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Beyond fluidity, the game excels at enabling player expression through combat. Players craft unique combat sequences reflecting their personality and playstyle, fostering a personalized gameplay experience and significant replayability."
          })
        })]
      }), _jsx("figure", {
        children: _jsx("img", {
          src: "/assets/devlog/2025-03-25/dmc-expression.webp",
          alt: "DMC5 Player Expression",
          width: "auto",
          height: "175px"
        })
      })]
    }), "\n", _jsx(_components.h3, {
      children: "Breath of the Wild"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsx("img", {
        src: "/assets/devlog/2025-03-25/breath-of-the-wild-art.jpg",
        alt: "Breath of the Wild Artwork",
        width: "auto",
        height: "300px"
      }), _jsx("div", {
        className: "text-content",
        children: _jsx("p", {
          children: _jsx(_components.p, {
            children: "Nintendo's The Legend of Zelda: Breath of the Wild redefined the open-world genre, emphasizing freedom, exploration, and player-driven storytelling. Its innovative approach to world design sets a benchmark for immersion and creativity."
          })
        })
      })]
    }), "\n", _jsx(_components.h4, {
      children: "Key Principles and Takeaways"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Exploration"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Breath of the Wild revolutionizes exploration in open-world design by prioritizing player curiosity and freedom. The meticulously designed world invites organic discovery through environmental storytelling and an intuitive physics engine, empowering players to experiment creatively with interactions and solutions. Exploration is deeply intrinsic to gameplay, offering constant and meaningful rewards for player curiosity."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/botw-exploration.avif",
          alt: "BOTW Exploration",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["The world in Breath of the Wild is much larger than any", _jsx("br", {}), "\r\nprevious Zelda title, and much of the game consists of ", _jsx("br", {}), "\r\nsimply wandering around seeing what the map has to offer."]
          })
        })]
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Emergent Gameplay"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Breath of the Wild masters emergent gameplay, encouraging experimentation through open-ended mechanics. Interactions between systems—weather, fire, physics—lead to player-driven narratives, enriching immersion and personalizing experiences significantly."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/botw-emergent-gameplay.avif",
          alt: "BOTW Emergent Gameplay",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Many of Breath of the Wild's systems interact with each other.", _jsx("br", {}), "\r\nSetting a patch of grass on fire creates an updraft,", _jsx("br", {}), "\r\nwhich can be flown up with the paraglider, allowing Link ", _jsx("br", {}), "\r\nto enter bullet time, a powerful combat state that can only ", _jsx("br", {}), "\r\nbe acessed while in midair."]
          })
        })]
      })]
    }), "\n", _jsx(_components.h3, {
      children: "Super Mario Odyssey"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsx("img", {
        src: "/assets/devlog/2025-03-25/super-mario-odyssey-art.jpg",
        alt: "Super Mario Odyssey Artwork",
        width: "auto",
        height: "300px"
      }), _jsx("div", {
        className: "text-content",
        children: _jsx("p", {
          children: _jsx(_components.p, {
            children: "Super Mario Odyssey revitalizes Nintendo’s iconic mascot in a vibrant, imaginative 3D platformer. Featuring diverse worlds and inventive movement mechanics, it delivers an unforgettable experience of exploration and joyful gameplay."
          })
        })
      })]
    }), "\n", _jsx(_components.h4, {
      children: "Key Principles and Takeaways"
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Multiple Worlds to Explore"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Super Mario Odyssey captivates players through its diverse worlds, each uniquely themed and packed with secrets, puzzles, and imaginative environments. The worlds are distinct yet cohesive, fostering continuous exploration. Attention to environmental design detail ensures every space is engaging, rewarding exploration with tangible gameplay benefits."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/smo-capkingdom.webp",
          alt: "Cap Kingdom",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Cap Kingdom is one of the many Kingdoms ", _jsx("br", {}), "\r\nyou can explore throughout the game, each one with ", _jsx("br", {}), "\r\ntheir own unique theme and mechanics."]
          })
        })]
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Movement"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "Odyssey’s movement mechanics are remarkably polished, providing precision, fluidity, and freedom. Mario's versatile move set—combining traditional jumps with innovative captures—encourages creative problem-solving and skilled play, making traversal satisfying and accessible to both casual and advanced players."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/smo-movement.webp",
          alt: "SMO Movement",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Mario Odyssey has a handful of movement options ", _jsx("br", {}), "\r\nto keep gameplay fluid, notably rolling, triple jumping, ", _jsx("br", {}), "\r\nand diving."]
          })
        })]
      })]
    }), "\n", _jsxs("div", {
      className: "image-container",
      children: [_jsxs("div", {
        className: "text-content",
        children: [_jsx("h5", {
          children: "Accessibility with Mastery"
        }), _jsx("p", {
          children: _jsx(_components.p, {
            children: "The game’s intuitive controls cater seamlessly to a broad audience, enabling newcomers to enjoy fundamental gameplay while providing depth for advanced players. This balance ensures sustained engagement through progressive mastery of movement and exploration techniques."
          })
        })]
      }), _jsxs("figure", {
        children: [_jsx("img", {
          src: "/assets/devlog/2025-03-25/smo-roll-cancel.jpg",
          alt: "Roll Cancel Tutorial",
          width: "auto",
          height: "175px"
        }), _jsx("figcaption", {
          children: _jsxs(_components.p, {
            children: ["Roll Canceling is an advanced technique ", _jsx("br", {}), "\r\nused by speedrunners that allows mario to move ", _jsx("br", {}), "\r\nat the maximum speed without being locked into ", _jsx("br", {}), "\r\nthe roll animation."]
          })
        })]
      })]
    }), "\n", _jsx(_components.p, {
      children: "That's it for today's post, next time I'll go into depth about the initial ideation phase."
    }), "\n", _jsx(_components.p, {
      children: "Take care,"
    }), "\n", _jsx(_components.p, {
      children: "Aaron"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
  