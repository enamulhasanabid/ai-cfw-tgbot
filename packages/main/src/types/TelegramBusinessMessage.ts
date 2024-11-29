import TelegramChat from './TelegramChat.js';
import { TelegramDocument } from './TelegramDocument.js';
import TelegramFrom from './TelegramFrom.js';
import TelegramMessageEntity from './TelegramMessageEntity.js';
import TelegramPhotoSize from './TelegramPhotoSize.js';
import TelegramUser from './TelegramUser.js';
import TelegramMessage from './TelegramMessage.js';

interface TelegramBusinessMessage {
	message_id: number;
	business_connection_id: string;
	from: TelegramFrom;
	sender_chat?: TelegramChat;
	date: number;
	chat: TelegramChat;
	forward_from?: TelegramUser;
	forward_from_chat?: TelegramChat;
	forward_from_message_id?: number;
	forward_signature?: string;
	forward_sender_name?: string;
	forward_date?: number;
	is_automatic_forward?: boolean;
	reply_to_message?: TelegramMessage;
	via_bot?: TelegramUser;
	edit_date?: number;
	has_protected_content?: boolean;
	media_group_id?: string;
	author_signature?: string;
	text?: string;
	entities?: TelegramMessageEntity[];
	// animation?: TelegramAnimation;
	// audio?: TelegramAudio;
	document?: TelegramDocument;
	photo?: TelegramPhotoSize[];
	// sticker?: TelegramSticker;
	// video?: TelegramVideo;
	// video_note?: TelegramVideoNote;
	// voice?: TelegramVoice;
	caption?: string;
	caption_entities?: TelegramMessageEntity[];
	// contact?: TelegramContact;
	// dice?: TelegramDice;
	// poll?: TelegramPoll;
	// venue?: TelegramVenue;
	// location?: TelegramLocation;
	new_chat_members?: TelegramUser[];
	new_chat_member?: TelegramUser;
	left_chat_member?: TelegramUser;
	new_chat_title?: string;
	// new_chat_photo?: TelegramPhotoSize[];
	delete_chat_photo?: boolean;
	group_chat_created?: boolean;
	supergroup_chat_created?: boolean;
	channel_chat_created?: boolean;
	// message_auto_delete_timer_changed?: TelegramAutoDeleteTimerChanged;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: TelegramMessage;
	// invoice?: TelegramInvoice;
	// successful_payment?: TelegramSuccessfulPayment;
	connected_website?: string;
}
export default TelegramBusinessMessage;
