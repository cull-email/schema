/**
 * An email message.
 */
export interface Message {
    /**
     * Unique Identifier (UUIDv4)
     * @link https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)
     */
    id: string;
    /**
     * Organization ID
     */
    organizationId?: string;
    /**
     * Sender ID
     */
    senderId?: string;
    /**
     * Email `\Seen` flag; message has been "read"
     * @link https://tools.ietf.org/html/rfc3501#section-2.3.2
     */
    seen: boolean;
    /**
     * Tags
     * @link https://en.wikipedia.org/wiki/Tag_(metadata)
     */
    tags: string[];
    /**
     * Image URI
     * @link https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
     */
    thumbnail?: string;
    /**
     * Email originator `From` header values
     * @link context: https://tools.ietf.org/html/rfc2822#section-3.6.2
     */
    from: string[];
    /**
     * Email destination `To` header values
     * @link context: https://tools.ietf.org/html/rfc2822#section-3.6.3
     */
    to: string[];
    /**
     * Email informational `Subject` header value
     * @link context: https://tools.ietf.org/html/rfc2822#section-3.6.5
     */
    subject: string;
    /**
     * Email originator `Date` header value
     * @link context: https://tools.ietf.org/html/rfc2822#section-3.6.1
     * @link format: https://tools.ietf.org/html/rfc3339#section-5.8
     */
    date: string;
    /**
     * Email message body
     * @link context: https://tools.ietf.org/html/rfc3501#section-2.3.6
     */
    body: string;
}
export declare class Message {
    constructor(data: {
        id?: string;
        organizationId?: string;
        senderId?: string;
        seen?: boolean;
        tags?: string[];
        thumbnail?: string;
        from: string[];
        to: string[];
        subject: string;
        date: string;
        body: string;
    });
}
export default Message;
