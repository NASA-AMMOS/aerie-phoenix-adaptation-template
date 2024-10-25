import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';
import { ChannelDictionary, CommandDictionary, ParameterDictionary } from '@nasa-jpl/aerie-ampcs';
import { ISequenceAdaptation } from './sharedTypes';

export const SampleAdaptation: ISequenceAdaptation =  {
  inputFormat: {
    linter: undefined,
    name: '',
    toInputFormat: undefined
  },
  outputFormat: [],
  autoComplete: function (channelDictionary: ChannelDictionary | null, commandDictionary: CommandDictionary | null, parameterDictionaries: ParameterDictionary[]): (context: CompletionContext) => CompletionResult | null {
    throw new Error('Function not implemented.');
  }
}
