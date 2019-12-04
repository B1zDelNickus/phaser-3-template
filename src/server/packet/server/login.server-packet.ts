import {ServerPacket} from "../server.packet";
import {ServerPacketCode} from "../server-packet.code";
import {Player} from "../../../core/player/player";

export class LoginServerPacket extends ServerPacket {

    private readonly playerData: Player = null;

    constructor() {
        super(ServerPacketCode.SP_LOGIN);

        /**
         * must by read but will be hardcoded
         */
        // this.readAny() as Player ...

        this.playerData = new Player(
            "B1zDelNick",
            80
        );
    }

    getPlayerData = () => this.playerData;

}