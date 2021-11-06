import React from "react";
import { Input, Label } from "./style";
import script from "./script";

const Index = () => {
  return (
    <div>
      <Label class="checkbox">
        <Input type="checkbox" checked />
        <svg viewBox="0 0 24 24" filter="url(#goo-light)">
          <path class="tick" d="M4.5 10L10.5 16L24.5 1" />
          <circle class="dot" cx="10.5" cy="15.5" r="1.5" />
        </svg>
      </Label>
    </div>
  );
};

export default Index;
