{ pkgs ? import <nixpkgs> { }, ... }:
pkgs.mkShell {
  packages = [
    pkgs.hugo
    pkgs.nodejs
    pkgs.nodePackages.npm
  ];
}
