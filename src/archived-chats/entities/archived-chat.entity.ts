import { ChatRoom } from 'src/chat-rooms/entities/chat-room.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
} from 'typeorm';

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

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', select: false })
  deletedAt: Date;

  @BeforeUpdate() async beforeUpdateQueryExecution() {
    this.updatedAt = new Date();
  }
}
