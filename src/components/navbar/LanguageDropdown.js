import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { langActions } from "../../store/language";
import styles from "./LanguageDropdown.module.css";

const LanguageDropdown = ({ chosenLanguage }) => {
  const dispatch = useDispatch();

  const languageChooseHandler = (chosenLanguage) => {
    dispatch(langActions.changeLanguage(chosenLanguage));
  };

  return (
    <nav>
      <div className={styles.lang_menu}>
        <div className={styles.selected_lang}>
          <FormattedMessage
            id={"CurrentLanguage.text"}
            defaultMessage="English"
            description="CurrentLanguage Element"
          />
        </div>
        <ul>
          <li>
            <button
              className="en"
              onClick={() => languageChooseHandler("English")}
            >
              <FormattedMessage
            id={"EnglishLanguage.text"}
            defaultMessage="English"
            description="CurrentLanguage Element"
          />
            </button>
          </li>
          <li>
            <button
              className="pl"
              onClick={() => languageChooseHandler("Polish")}
            >
              <FormattedMessage
            id={"PolishLanguage.text"}
            defaultMessage="Polish"
            description="CurrentLanguage Element"
          />
            </button>
          </li>
          <li>
            <button
              className="ua"
              onClick={() => languageChooseHandler("Ukrainian")}
            >
              <FormattedMessage
            id={"UkrainianLanguage.text"}
            defaultMessage="Ukrainian"
            description="CurrentLanguage Element"
          />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

LanguageDropdown.propTypes = {
  chosenLanguage: PropTypes.string,
};

export default LanguageDropdown;
