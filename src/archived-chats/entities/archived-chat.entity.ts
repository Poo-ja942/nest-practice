import { ChatRoom } from "src/chat-rooms/entities/chat-room.entity";
import { User } from "src/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class ArchivedChat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.archived_chats)
  room: ChatRoom;

  @ManyToOne(() => User, (user) => user.archived_chats)
  archived_by: User;

  @CreateDateColumn({ name: "created_at", type: "timestamp", select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp", select: false })
  deletedAt: Date;
}
