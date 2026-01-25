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
import MentalMap from "../../pages/ArticlesPages/MentalMap/MentalMap";
import Choises from "../../pages/ArticlesPages/Choises/Choises";
import Pacing from "../../pages/ArticlesPages/Pacing/Pacing";
import Puzzles from "../../pages/ArticlesPages/Puzzles/Puzzles";
import Stealth from "../../pages/ArticlesPages/Stealth/Stealth";

import firstBloodHeader from "../../assets/ArticlesAssets/FirstBlood/firstBloodHeader.png";
import elevationsHeader from "../../assets/ArticlesAssets/Elevations/elevationsHeader.png";
import seasonsHeader from "../../assets/ArticlesAssets/Novelty/seasonsHeader.png";
import rldHeader from "../../assets/ArticlesAssets/RLD/rldHeader.png";
import landmarksHeader from "../../assets/ArticlesAssets/Landmarks/landmarksHeader.png";
import coversHeader from "../../assets/ArticlesAssets/Covers/coversHeader.png";
import modularDesignHeader from "../../assets/ArticlesAssets/ModularDesign/modularDesignHeader.png";
import colors from "../../assets/ArticlesAssets/BlockoutColors/colouringHeader.png";
import shapesHeader from "../../assets/ArticlesAssets/Shapes/shapesHeader.png";
import rewardsHeader from "../../assets/ArticlesAssets/Rewards/rewardsHeader.png";
import talentTreesHeader from "../../assets/ArticlesAssets/TalentTrees/talentTreesHeader.png";
import gamesmoviesHeader from "../../assets/ArticlesAssets/GamesVSMovies/gamesVSmoviesHeader.png";
import decisionPointsHeader from "../../assets/ArticlesAssets/DecisionPoints/decisionPointsHeader.png";
import levelStoryHeader from "../../assets/ArticlesAssets/LevelStorytelling/levelstorytellingHeader.png";
import mentalMapHeader from "../../assets/ArticlesAssets/MentalMap/mental_map.png";
import choisesHeader from "../../assets/ArticlesAssets/Choises/choises.png";
import pacingHeader from "../../assets/ArticlesAssets/Pacing/pacing.png";
import puzzlesHeader from "../../assets/ArticlesAssets/Puzzles/puzzles.png";
import stealthHeader from "../../assets/ArticlesAssets/Stealth/stealth.png";

import firstBloodPreview from "../../assets/ArticlesAssets/PREVIEWS/firstBloodPreview.png";
import elevationsPreview from "../../assets/ArticlesAssets/PREVIEWS/elevationsPreview.png";
import seasonsPreview from "../../assets/ArticlesAssets/PREVIEWS/seasonsPreview.png";
import rldPreview from "../../assets/ArticlesAssets/PREVIEWS/rldPreview.png";
import landmarksPreview from "../../assets/ArticlesAssets/PREVIEWS/landMarksPreview.png";
import coversPreview from "../../assets/ArticlesAssets/PREVIEWS/CoversPreview.png";
import modularDesignPreview from "../../assets/ArticlesAssets/PREVIEWS/modularDesignPreview.png";
import colorsPreview from "../../assets/ArticlesAssets/PREVIEWS/blockoutColorsPreview.png";
import rewardsPreview from "../../assets/ArticlesAssets/PREVIEWS/rewardsPreview.png";
import talentTreesPreview from "../../assets/ArticlesAssets/PREVIEWS/talentTreesPreview.png";
import gamesmoviesPreview from "../../assets/ArticlesAssets/PREVIEWS/gamesMoviesPreview.png";
import decisionPointsPreview from "../../assets/ArticlesAssets/PREVIEWS/decisionPointsPreview.png";
import levelStoryPreview from "../../assets/ArticlesAssets/PREVIEWS/levelStoryPreview.png";
import mentalMapPreview from "../../assets/ArticlesAssets/PREVIEWS/mentalMapPreview.png";
import choisesPreview from "../../assets/ArticlesAssets/PREVIEWS/choisesPreview.png";
import pacingPreview from "../../assets/ArticlesAssets/PREVIEWS/pacingPreview.png";
import puzzlesPreview from "../../assets/ArticlesAssets/PREVIEWS/puzzlesPreview.png";
import stealthPreview from "../../assets/ArticlesAssets/PREVIEWS/stealthPreview.png";

const ArticleTypes = {
    LEVEL_DESIGN: "Level Design",
    GAME_DESIGN: "Game Design",
    OTHER: "Other",
};

const articles = [
    {
        id: 1,
        url: "FirstBlood",
        title: "First Blood",
        headerImg: firstBloodHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: firstBloodPreview,
    },
    {
        id: 2,
        url: "ExploringElevations",
        title: "Exploring Elevations",
        headerImg: elevationsHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: elevationsPreview,
    },
    {
        id: 3,
        url: "Seasons",
        title: "Seasons",
        headerImg: seasonsHeader,
        type: ArticleTypes.GAME_DESIGN,
        previewImg: seasonsPreview,
    },
    {
        id: 4,
        url: "rld",
        title: "Rational Level Design",
        headerImg: rldHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: rldPreview,
    },
    {
        id: 5,
        url: "Landmarks",
        title: "Landmarks",
        headerImg: landmarksHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: landmarksPreview,
    },
    {
        id: 6,
        url: "Covers",
        title: "Covers",
        headerImg: coversHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: coversPreview,
    },
    {
        id: 7,
        url: "ModularDesign",
        title: "Modular Design",
        headerImg: modularDesignHeader,
        type: ArticleTypes.GAME_DESIGN,
        previewImg: modularDesignPreview,
    },
    {
        id: 8,
        url: "BlockoutColors",
        title: "Blockout Colors",
        headerImg: colors,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: colorsPreview,
    },
    {
        id: 9,
        url: "Shapes",
        title: "Shapes",
        headerImg: shapesHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: shapesHeader,
    },
    {
        id: 10,
        url: "Rewards",
        title: "Rewards",
        headerImg: rewardsHeader,
        type: ArticleTypes.GAME_DESIGN,
        previewImg: rewardsPreview,
    },
    {
        id: 11,
        url: "TalentTrees",
        title: "Talent Trees",
        headerImg: talentTreesHeader,
        type: ArticleTypes.GAME_DESIGN,
        previewImg: talentTreesPreview,
    },
    {
        id: 12,
        url: "GamesMovies",
        title: "Games vs. Movies",
        headerImg: gamesmoviesHeader,
        type: ArticleTypes.OTHER,
        previewImg: gamesmoviesPreview,
    },
    {
        id: 13,
        url: "DecisionPoints",
        title: "Decision Points",
        headerImg: decisionPointsHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: decisionPointsPreview,
    },
    {
        id: 14,
        url: "LevelStorytelling",
        title: "Level Storytelling",
        headerImg: levelStoryHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: levelStoryPreview,
    },
    {
        id: 15,
        url: "MentalMap",
        title: "Mental Map",
        headerImg: mentalMapHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: mentalMapPreview,
    },
    {
        id: 16,
        url: "Choises",
        title: "Choises",
        headerImg: choisesHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: choisesPreview,
    },
    {
        id: 17,
        url: "Pacing",
        title: "Pacing",
        headerImg: pacingHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: pacingPreview,
    },
    {
        id: 18,
        url: "Puzzles",
        title: "Puzzles",
        headerImg: puzzlesHeader,
        type: ArticleTypes.GAME_DESIGN,
        previewImg: puzzlesPreview,
    },
    {
        id: 19,
        url: "Stealth",
        title: "Stealth",
        headerImg: stealthHeader,
        type: ArticleTypes.LEVEL_DESIGN,
        previewImg: stealthPreview,
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
    15: MentalMap,
    16: Choises,
    17: Pacing,
    18: Puzzles,
    19: Stealth,
};

function getArticle(articleId) {
    return articles.filter((article) => article.id === articleId);
}

export { articles, articlesPages, getArticle };
