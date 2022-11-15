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
                    name: "JavaScript",
                    icon: "https://i.postimg.cc/BPxd7b3V/js-icon.png",
                })
            );
        }
    ),
];
