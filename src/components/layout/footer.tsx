import React from "react";
import {Icon} from "@iconify/react";
import {Tooltip} from "@heroui/react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 md:px-8 lg:px-16 bg-background border-t border-divider">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-foreground-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Rafael Molina. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <Tooltip content="LinkedIn" placement="top">
            <a
              href="https://www.linkedin.com/in/rafael-molina-6649ab66/"
              className="text-foreground-500 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="lucide:linkedin" width={20} height={20} />
            </a>
          </Tooltip>

          <Tooltip content="GitHub" placement="top">
            <a
              href="https://github.com/AboveZtars"
              className="text-foreground-500 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="lucide:github" width={20} height={20} />
            </a>
          </Tooltip>

          <Tooltip content="X / Twitter" placement="top">
            <a
              href="https://x.com/spoonkycat"
              className="text-foreground-500 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="lucide:twitter" width={20} height={20} />
            </a>
          </Tooltip>

          <Tooltip content="Email" placement="top">
            <a
              href="mailto:rafael@molina-aquino.com"
              className="text-foreground-500 hover:text-primary transition-colors"
            >
              <Icon icon="lucide:mail" width={20} height={20} />
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
