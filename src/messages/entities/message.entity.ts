import { ChatRoom } from 'src/chat-rooms/entities/chat-room.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  message_id: number;

  @ManyToOne(() => User, (user) => user.messages_sent)
  sender: User;

  @ManyToOne(() => User)
  receiver: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.messages)
  chat_room: ChatRoom;

  @Column()
  content: string;

  @Column()
  timestamp: Date;

  @Column()
  type: string;
}
