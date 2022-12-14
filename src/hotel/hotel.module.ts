import { HttpModule, HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { HotelController } from "./hotel.controller";
import { HotelService } from "./hotel.service";

@Module({
    imports: [HttpModule],
    controllers: [HotelController],
    providers: [HotelService],
    exports: [HotelService]
})
export class HotelModule { }