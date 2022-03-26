import {
  AccountStatus,
  DeclarationType,
  DelegationStatus,
  DelegationType,
  OnboardingTask,
} from '../enums';

export * from './activity-group.type';
export * from './activity.type';
export * from './network.type';
export * from './user.type';
export * from './order.type';

/**
 * Represents a set of declarations about what (if any) third party companies are associated with a given creative.
 *
 * This can be set at the network level, as a default for all creatives, or overridden for a particular creative.
 *
 */
export type ThirdPartyDataDeclaration = {
  declarationType: DeclarationType;
  thirdPartyCompanyIds: number[];
};

export type ChildPublisher = {
  approvedDelegationType: DelegationType;
  proposedDelegationType: DelegationType;
  status: DelegationStatus;
  accountStatus: AccountStatus;
  childNetworkCode: string;
  sellerId: string;
  proposedRevenueShareMillipercent: number;
  onboardingTasks: OnboardingTask[];
};
