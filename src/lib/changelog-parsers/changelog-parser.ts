import Changelog from '../entities/changelog';

export interface ChangelogParser {
  isOfType (changelog: string): boolean;
  parse (changelog: string, knownVersion: string): Changelog|undefined;
}

