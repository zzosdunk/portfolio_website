import FirstBlood from "../../pages/ArticlesPages/FirstBlood/FirstBlood";
import Elevations from "../../pages/ArticlesPages/Elevations/Elevations";
import Seasons from "../../pages/ArticlesPages/Seasons/Seasons";
import Rld from "../../pages/ArticlesPages/RLD/Rld";
import Landmarks from "../../pages/ArticlesPages/Landmarks/Landmarks";
import Covers from "../../pages/ArticlesPages/Covers/Covers";
import ModularDesign from "../../pages/ArticlesPages/ModularDesign/ModularDesign";
import BlockoutColors from "../../pages/ArticlesPages/BlockoutColors/BlockoutColors";
import Shapes from "../../pages/ArticlesPages/Shapes/Shapes";
import Rewards from "../../pages/ArticlesPages/Rewards/Rewards";
import TalentTrees from "../../pages/ArticlesPages/TalentTrees/TalentTrees";
import GamesMovies from "../../pages/ArticlesPages/GamesVSMovies/GamesMovies";
import DecisionPoints from "../../pages/ArticlesPages/DecisionPoints/DecisionPoints";
import LevelStorytelling from "../../pages/ArticlesPages/LevelStorytelling/LevelStorytelling";

import firstBloodHeader from "../../assets/ArticlesAssets/FirstBlood/firstBloodHeader.png";
import elevationsHeader from "../../assets/ArticlesAssets/Elevations/elevationsHeader.png";
import seasonsHeader from "../../assets/ArticlesAssets/Novelty/seasonsHeader.png";
import rldHeader from "../../assets/ArticlesAssets/RLD/rldHeader.png";
import landmarksHeader from "../../assets/ArticlesAssets/Landmarks/ladnmarksHeader.png";
import coversHeader from "../../assets/ArticlesAssets/Covers/coversHeader.png";
import modularDesignHeader from "../../assets/ArticlesAssets/ModularDesign/modularDesignHeader.png";
import colors from "../../assets/ArticlesAssets/BlockoutColors/colouringHeader.png";
import shapesHeader from "../../assets/ArticlesAssets/Shapes/shapesHeader.png";
import rewardsHeader from "../../assets/ArticlesAssets/Rewards/rewardsHeader.png";
import talentTreesHeader from "../../assets/ArticlesAssets/TalentTrees/talentTreesHeader.png";
import gamesmoviesHeader from "../../assets/ArticlesAssets/GamesVSMovies/gamesVSmoviesHeader.png";
import decisionPointsHeader from "../../assets/ArticlesAssets/DecisionPoints/decisionPointsHeader.png";
import levelStoryHeader from "../../assets/ArticlesAssets/LevelStorytelling/levelstorytellingHeader.png";

const articles = [
    {
        id: 1,
        url: "FirstBlood",
        title: "First Blood",
        headerImg: firstBloodHeader,
    },
    {
        id: 2,
        url: "ExploringElevations",
        title: "Exploring Elevations",
        headerImg: elevationsHeader,
    },
    { id: 3, url: "Seasons", title: "Seasons", headerImg: seasonsHeader },
    { id: 4, url: "rld", title: "Rational Level Design", headerImg: rldHeader },
    { id: 5, url: "Landmarks", title: "Landmarks", headerImg: landmarksHeader },
    { id: 6, url: "Covers", title: "Covers", headerImg: coversHeader },
    {
        id: 7,
        url: "ModularDesign",
        title: "Modular Design",
        headerImg: modularDesignHeader,
    },
    {
        id: 8,
        url: "BlockoutColors",
        title: "Blockout Colors",
        headerImg: colors,
    },
    { id: 9, url: "Shapes", title: "Shapes", headerImg: shapesHeader },
    { id: 10, url: "Rewards", title: "Rewards", headerImg: rewardsHeader },
    {
        id: 11,
        url: "TalentTrees",
        title: "Talent Trees",
        headerImg: talentTreesHeader,
    },
    {
        id: 12,
        url: "GamesMovies",
        title: "Games vs. Movies",
        headerImg: gamesmoviesHeader,
    },
    {
        id: 13,
        url: "DecisionPoints",
        title: "Decision Points",
        headerImg: decisionPointsHeader,
    },
    {
        id: 14,
        url: "LevelStorytelling",
        title: "Level Storytelling",
        headerImg: levelStoryHeader,
    },
];

const articlesPages = {
    1: FirstBlood,
    2: Elevations,
    3: Seasons,
    4: Rld,
    5: Landmarks,
    6: Covers,
    7: ModularDesign,
    8: BlockoutColors,
    9: Shapes,
    10: Rewards,
    11: TalentTrees,
    12: GamesMovies,
    13: DecisionPoints,
    14: LevelStorytelling,
};

export { articles, articlesPages };
