import { ChatRoom } from "src/chat-rooms/entities/chat-room.entity";
import { User } from "src/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.messages_sent)
  sender: User;

  @ManyToOne(() => User, (user) => user.messages_receive)
  receiver: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.messages)
  chat_room: ChatRoom;

  @Column({ name: "content", nullable: true })
  content: string;

  @Column({ name: "type" })
  type: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp", select: false })
  deletedAt: Date;
}
