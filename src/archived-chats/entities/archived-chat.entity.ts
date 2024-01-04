import { ChatRoom } from 'src/chat-rooms/entities/chat-room.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ArchivedChat {
  @PrimaryGeneratedColumn()
  archive_id: number;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.archived_chats)
  room: ChatRoom;

  @ManyToOne(() => User, (user) => user.archived_chats)
  archived_by: User;

  @Column()
  archived_at: Date;
}
