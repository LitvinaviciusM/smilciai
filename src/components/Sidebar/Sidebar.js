import React from 'react';
import {AnimatePresence} from "framer-motion";
import {Overlay, SidebarContainer, SidebarContent, SidebarLinks} from "./Sidebar.styles";
import SidebarNavigation from "../../constants/SidebarNavigation/SidebarNavigation"

const Sidebar = ({menuState,setMenuState}) => {

  return (
      <>
        <AnimatePresence>
          {menuState && (
              <Overlay
                  initial={{y: '-100%'}}
                  exit={{y: '-100%'}}
                  animate={{y: menuState ? 0 : '-100%'}}
                  transition={{duration: .4, ease: [0.6, 0.05, -0.01, 0.9]}}
              >
                  <SidebarContainer>
                      <SidebarContent>
                          <SidebarLinks>
                              <SidebarNavigation menuState={menuState} setMenuState={setMenuState}/>
                          </SidebarLinks>
                      </SidebarContent>
                  </SidebarContainer>

              </Overlay>
          )}
        </AnimatePresence>
      </>
  );
};

export default Sidebar;