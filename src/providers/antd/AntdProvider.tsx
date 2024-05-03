import { useTranslation } from "react-i18next";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { Locale } from "antd/es/locale";
import enLocale from "antd/es/locale/en_GB";
import ukLocale from "antd/es/locale/uk_UA";
import { ConfigProviderProps } from "antd/lib/config-provider";

const LOCALES: Record<string, Locale> = {
  en: enLocale,
  uk: ukLocale
};

export const AntdProvider = ({ children, ...props }: ConfigProviderProps) => {
  AntdConfigProvider.config({});

  const {
    i18n: { language }
  } = useTranslation();

  return (
    <AntdConfigProvider
      locale={LOCALES[language]}
      theme={{
        token: {
          fontFamily: "var(--host-primary-font)"
        },

        components: {
          Button: {
            fontWeight: 700,
            defaultBorderColor: "var(--host-blue-80)",
            defaultColor: "var(--host-blue-80)",
            defaultGhostColor: "var(--host-dark-40)",
            defaultGhostBorderColor: "var(--host-grey-60)",
            onlyIconSize: 24,
            fontFamily: "var(--host-primary-font)"
          },
          Input: {
            paddingInline: 20
          }
        }
      }}
      {...props}
    >
      <>{children}</>
    </AntdConfigProvider>
  );
};
