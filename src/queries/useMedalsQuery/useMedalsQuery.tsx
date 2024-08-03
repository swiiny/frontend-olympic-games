import { EContinent } from '@home/_components/Continent/continent.enums';
import { countryIdContinentMap } from '@home/_components/Continent/Continent.variables';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { defaultMedalsQueryResult } from './useMedalsQuery.variables';

export const medalsKeys = {
	all: ['medals']
};

export const useMedalsQuery = () => {
	const { data = defaultMedalsQueryResult } = useQuery({
		queryKey: medalsKeys.all,
		staleTime: 5 * 60 * 1000,
		// refetch every 5 minutes + 1 second
		refetchInterval: 5 * 60 * 1000 + 1000,
		queryFn: async () => {
			const res = await axios.get<{
				MedalTableNOC: {
					c_NOC: string;
					c_NOCShort: string;
					n_Bronze: number;
					n_Gold: number;
					n_NOCGeoID: number;
					n_NOCID: number;
					n_RankGold: number;
					n_RankSortGold: number;
					n_RankSortTotal: number;
					n_RankTotal: number;
					n_Silver: number;
					n_Total: number;
				}[];
			}>(
				`https://api-gracenote.nbcolympics.com/svc/games_v2.svc/json/GetMedalTable_Season?competitionSetId=1&season=2024&languageCode=2`
			);

			const data = res.data.MedalTableNOC;

			const result: Record<
				EContinent,
				{ goldAmount: number; silverAmount: number; bronzeAmount: number; totalAmount: number }
			> = {
				[EContinent.africa]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
				[EContinent.america]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
				[EContinent.asia]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
				[EContinent.europe]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
				[EContinent.oceania]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 }
			};

			data.forEach((medal) => {
				// find from which continent the nation is
				const nation = countryIdContinentMap[medal.c_NOCShort];

				if (nation) {
					result[nation].goldAmount += medal.n_Gold;
					result[nation].silverAmount += medal.n_Silver;
					result[nation].bronzeAmount += medal.n_Bronze;
					result[nation].totalAmount += medal.n_Total;
				}
			});

			return result;
		}
	});

	return {
		data
	};
};
