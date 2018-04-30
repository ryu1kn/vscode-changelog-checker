import {EXTENSION_ID} from './const';
import * as vscode from 'vscode';
import {ObjectMap} from './utils';

const EXTENSION_VERSION_MAP = 'extensionVersions';

export default class ConfigStore {
  private vscWorkspace: any;

  constructor(vscWorkspace: any) {
    this.vscWorkspace = vscWorkspace;
  }

  get extensionVersions(): ObjectMap {
    return this.extensionConfig.get(EXTENSION_VERSION_MAP) || {};
  }

  private get extensionConfig(): vscode.WorkspaceConfiguration {
    return this.vscWorkspace.getConfiguration(EXTENSION_ID);
  }

  async updateExtensionVersions(extensionVersions: ObjectMap) {
    return this.extensionConfig.update(EXTENSION_VERSION_MAP, extensionVersions, true);
  }
}
