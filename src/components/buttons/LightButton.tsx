"use client";

import { ReactEventHandler } from "react";

interface Props {
  title: string;
  Icon?: React.ElementType;
  iconClass?: string;
  onClick?: ReactEventHandler;
  type?: "submit" | "reset" | "button" | undefined;
}

const LightButton = ({ title, Icon, iconClass, onClick,type }: Props) => {
  return (
    <button
      className='flex items-center gap-1 rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full justify-center'
      onClick={onClick} type={type}>
      {Icon && <Icon className={iconClass} />}
      {title}
    </button>
  );
};

export default LightButton;
