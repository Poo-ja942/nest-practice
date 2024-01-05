import { ChatRoom } from "src/chat-rooms/entities/chat-room.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class UserChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userChatRooms)
  user: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.user_chat_rooms)
  chat_room: ChatRoom;
}
