/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

export const handlers = [
    rest.get(
        "https://react-http-bcb91-default-rtdb.europe-west1.firebasedatabase.app/skills.json",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    s1: {
                        name: "JavaScript",
                        iconUrl: "https://i.postimg.cc/BPxd7b3V/js-icon.png",
                    },
                })
            );
        }
    ),
    rest.get(
        "https://react-http-bcb91-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    s1: {
                        name: "Tank Squad",
                        logo: "https://i.postimg.cc/Xqh77Yv7/Tank-Squad.png",
                        link: "https://store.steampowered.com/app/1498130/Tank_Squad/",
                        description:
                            "I currently work for DeGenerals S.A. over the Tank Squad project. My main responsibilities include designing levels and inventing various game mechanics. In addition to my duties as a level designer, my responsibilities also include some programming tasks. In general, the game consists in the passage of a tank campaign during the Second World War.",
                        leader: false,
                        timeperiod:
                            "I currently work for DeGenerals S.A. over the Tank Squad project. My main responsibilities include designing levels and inventing various game mechanics. In addition to my duties as a level designer, my responsibilities also include some programming tasks. In general, the game consists in the passage of a tank campaign during the Second World War.",
                        translationID: "ts",
                    },
                })
            );
        }
    ),
];
