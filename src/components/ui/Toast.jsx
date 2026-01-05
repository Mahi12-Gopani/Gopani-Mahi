import * as React from "react";

export function ToastProvider({ children }) {
  return <>{children}</>;
}

export function Toast({ children }) {
  return <div>{children}</div>;
}

export function ToastTitle({ children }) {
  return <div>{children}</div>;
}

export function ToastDescription({ children }) {
  return <div>{children}</div>;
}

export function ToastClose() {
  return null;
}

export function ToastViewport() {
  return null;
}
