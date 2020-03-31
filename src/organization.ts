import { v4 as uuid } from 'uuid';
/**
 * A company, club or other organized body that sends Messages
 */
export interface Organization {
  /**
   * Unique Identifier (UUIDv4)
   * @link https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)
   */
  id: string;
  /**
   * Disregard this Organization
   */
  ignore: boolean;
  /**
   * Elevate Messages from this Organization
   */
  feature: boolean;
  /**
   * Domain names
   * @link https://en.wikipedia.org/wiki/Domain_name
   */
  domains: string[];
  /**
   * URL
   * @link https://en.wikipedia.org/wiki/URL
   */
  url?: string;
  /**
   * Short-form name
   */
  name?: string;
  /**
   * Long-form description
   */
  description?: string;
  /**
   * Image URI
   * @link context: https://en.wikipedia.org/wiki/Favicon
   * @link format: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
   */
  icon?: string;
  /**
   * Tags
   * @link https://en.wikipedia.org/wiki/Tag_(metadata)
   */
  tags: string[];
}

export class Organization {
  constructor(data: {
    id?: string;
    ignore?: boolean;
    feature?: boolean;
    domains: string[];
    url?: string;
    name?: string;
    description?: string;
    icon?: string;
    tags?: string[];
  }) {
    this.id = data.id ?? uuid();
    this.ignore = data.ignore ?? false;
    this.feature = data.feature ?? false;
    this.domains = data.domains;
    this.url = data.url;
    this.name = data.name;
    this.description = data.description;
    this.icon = data.icon;
    this.tags = data.tags ?? [];
  }
}

export default Organization;
