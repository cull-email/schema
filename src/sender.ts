import { v4 as uuid } from 'uuid';
/**
 * A sub-organization, department or individual that sends Messages on behalf of an Organization.
 */
export interface Sender {
  /**
   * Unique Identifier (UUIDv4)
   * @link https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)
   */
  id: string;
  /**
   * Organization ID
   */
  organizationId: string;
  /**
   * Disregard this Sender
   */
  ignore: boolean;
  /**
   * Elevate Messages from this Sender
   */
  feature: boolean;
  /**
   * Email Addresses
   * @link https://en.wikipedia.org/wiki/Email_address
   */
  addresses: string[];
  /**
   * Tags
   * @link https://en.wikipedia.org/wiki/Tag_(metadata)
   */
  tags: string[];
}

export class Sender {
  constructor(data: {
    id?: string;
    organizationId: string;
    ignore?: boolean;
    feature?: boolean;
    addresses: string[];
    tags?: string[];
  }) {
    this.id = data.id ?? uuid();
    this.organizationId = data.organizationId;
    this.ignore = data.ignore ?? false;
    this.feature = data.feature ?? false;
    this.addresses = data.addresses;
    this.tags = data.tags ?? [];
  }
}

export default Sender;
