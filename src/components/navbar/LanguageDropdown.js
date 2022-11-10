import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { langActions } from "../../store/language";
import styles from "./LanguageDropdown.module.css";

function LanguageDropdown() {
  const dispatch = useDispatch();

  const languageChooseHandler = (chosenLanguage) => {
    dispatch(langActions.changeLanguage(chosenLanguage));
  };

  return (
    <nav>
      <div className={styles.lang_menu}>
        <div className={styles.selected_lang}>
          <FormattedMessage
            id="CurrentLanguage.text"
            defaultMessage="English"
            description="CurrentLanguage Element"
          />
        </div>
        <ul>
          <li>
            <button
              type="button"
              className="en"
              onClick={() => languageChooseHandler("English")}
            >
              <FormattedMessage
                id="EnglishLanguage.text"
                defaultMessage="English"
                description="CurrentLanguage Element"
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="pl"
              onClick={() => languageChooseHandler("Polish")}
            >
              <FormattedMessage
                id="PolishLanguage.text"
                defaultMessage="Polish"
                description="CurrentLanguage Element"
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="ua"
              onClick={() => languageChooseHandler("Ukrainian")}
            >
              <FormattedMessage
                id="UkrainianLanguage.text"
                defaultMessage="Ukrainian"
                description="CurrentLanguage Element"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LanguageDropdown;
