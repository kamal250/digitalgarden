module.exports = {
  title: "Web Server & Server-Admin Docs — Ilajna's Digital Garden",
  tagline: "A curated digital garden of web-server guides, shell commands, configs and dev notes — perfect for developers seeking practical tutorials and real-world references.",
  url: "https://digitalgarden.ilajna.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "Ilajna", // Usually your GitHub org/user name.
  projectName: "DigitalGarden", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Ilajna's Digital Garden",
      logo: {
        alt: "A curated digital garden of web-server guides, shell commands, configs and dev notes — perfect for developers seeking practical tutorials and real-world references.",
        src: "img/digitalgarden.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Home",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "1. Web Server (Apache/Nginx)",
              to: "docs/web-server",
            },
            {
              label: "2. Server Script (PHP 7.2)",
              to: "docs/server-script/",
            },
            {
              label: "3. Database (MariaDB)",
              to: "docs/database/",
            },
            {
              label: "4. Firewall, Security & non-default SSH port",
              to: "docs/firewall-security-and-non-default-ssh-port",
            },
            {
              label: "5. Server timezone",
              to: "docs/server-timezone",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "6. SSL certificate (LetsEncrypt)",
              to: "docs/ssl-certificate-letsencrypt/",
            },
            {
              label: "7. Swap memory",
              to: "docs/swap-memory/",
            },
            {
              label: "8. sFTP (VSFTPD)",
              to: "docs/sftp-vsftpd",
            },
            {
              label: "9. SMTP (SendGrid)",
              to: "docs/smtp-sendgrid",
            },
            {
              label: "10. HTTP2",
              to: "docs/http2/",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "11. MySQL Optimization",
              to: "docs/mysql-optimization/",
            },
            {
              label: "12. PHP-FPM Optimization",
              to: "docs/php-fpm-optimization",
            },
            {
              label: "13. Miscellaneous",
              to: "docs/miscellaneous",
            },
            {
              label: "14. GIT",
              to: "docs/git",
            },
            {
              label: "15. SSH",
              to: "docs/ssh",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DigitalGarden - Built with Docusaurus and Love for ilajna.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/kamal250/digitalgarden/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
