import { AxiosResponse } from 'axios';
import { getApiInstance } from './instance/instance';

export interface IPlaceResult {
  candidates: [
    {
      business_status: 'OPERATIONAL';
      formatted_address: '444 ถนน พญาไท อาคารมาบุญครองเซ็นเตอร์ ชั้น 2 โซน C แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330 ไทย';
      geometry: {
        location: {
          lat: 13.7443276;
          lng: 100.5302537;
        };
        viewport: {
          northeast: {
            lat: 13.74567742989272;
            lng: 100.5316035298927;
          };
          southwest: {
            lat: 13.74297777010728;
            lng: 100.5289038701073;
          };
        };
      };
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png';
      name: 'สุกี้ตี๋น้อย มาบุญครอง';
      opening_hours: {
        open_now: true;
      };
      photos: [
        {
          height: 2256;
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/117018034303064442067">A Google User</a>'
          ];
          photo_reference: 'AWU5eFg9zztGEk10d44o2LD7drjfOmnFIpVvcrnPzDywLuhJPLz8oHqp5mX9rNrRsZ16RvXPmuyzi9lsukUQsWMOKeA8-5EGra0hYm_MYPrdywI_27o4XgLjiGA2mEOdjZy9TSFjGk8mpILNgriABUPGKEcOiyteXKGyi7GTNYe9KvXOG5qy';
          width: 4000;
        }
      ];
      place_id: 'ChIJA5cMDa2f4jARdzGsomAsufM';
      rating: 4.4;
    }
  ];
  status: 'OK';
}
export function searchPlaces(
  search: string
): Promise<AxiosResponse<IPlaceResult>> {
  return getApiInstance().get('/jenosize', { params: { search } });
}
export function getXoBotTurn(
  slots: (number | null)[]
): Promise<AxiosResponse<number>> {
  return getApiInstance().get('/jenosize/gamexo', { params: { slots } });
}
