import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivedChatDto } from './create-archived-chat.dto';

export class UpdateArchivedChatDto extends PartialType(CreateArchivedChatDto) {}
