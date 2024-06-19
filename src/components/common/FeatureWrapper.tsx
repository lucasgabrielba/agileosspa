import { useOrganizationStore } from '@/store/useOrganizationStore';
import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type FeaturesList = 'Dashboard' | 'Settings' | 'Campaigns';

type FeatureWrapperProps = {
  feature: FeaturesList;
  children: ReactNode;
};

export function FeatureWrapper({ feature, children }: FeatureWrapperProps) {
  const navigate = useNavigate();
  const { organization } = useOrganizationStore();
  const abilites = organization?.abilites;

  useEffect(() => {
    if (abilites && !abilites.includes(feature)) {
      navigate('/', { replace: true });
    }
  }, [abilites, feature, navigate]);

  return children;
}
