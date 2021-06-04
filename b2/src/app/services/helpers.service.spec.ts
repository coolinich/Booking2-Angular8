import { TestBed } from '@angular/core/testing';

import { HelpersService } from './helpers.service';
import { ALL_HOTELS } from 'src/mock-allhotels';

describe('HelpersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service).toBeTruthy();
  });

  it('convertArrayOfBooleansToObject creates correct object', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service.convertArrayOfBooleansToObject(['string1', 'string2', 'string3'], [true, false, true]))
    .toEqual({
      string1: true,
      string2: false,
      string3: true
    });
  });

  it('convertArrayOfBooleansToStringsArray creates correct array', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service.convertArrayOfBooleansToStringsArray(['string1', 'string2', 'string3'], [true, false, true]))
    .toEqual(['string1', 'string3']);
  });

  it('filterHotelsByLocation filters by provided location value', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service.filterHotelsByLocation(ALL_HOTELS, 'Estonia').length).toEqual(1);
    expect(service.filterHotelsByLocation(ALL_HOTELS, 'Estonia')[0].title).toEqual('Hotel 1');
  });

  it('filterHotelsByMinPrice filters by min price', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service.filterHotelsByMinPrice(ALL_HOTELS, 999).length).toEqual(3);
    expect(service.filterHotelsByMinPrice(ALL_HOTELS, 999)[0].title).toEqual('Hotel 2');
  });

  it('filterHotelsByMaxPrice filters by max price', () => {
    const service: HelpersService = TestBed.get(HelpersService);
    expect(service.filterHotelsByMaxPrice(ALL_HOTELS, 1000).length).toEqual(3);
    expect(service.filterHotelsByMaxPrice(ALL_HOTELS, 1000)[2].title).toEqual('Hotel 3');
  });

});
