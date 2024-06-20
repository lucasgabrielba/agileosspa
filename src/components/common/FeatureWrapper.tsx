import { useOrganizationStore } from '@/store/useOrganizationStore';
import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type FeaturesList = 'Dashboard' | 'Settings' | 'Orders';

type FeatureWrapperProps = {
  feature: FeaturesList;
  children: ReactNode;
};

export function FeatureWrapper({ feature, children }: FeatureWrapperProps) {
  const navigate = useNavigate();
  const { abilities } = useOrganizationStore();

  useEffect(() => {
    if (abilities && !abilities.includes(feature)) {
      navigate('/', { replace: true });
    }
  }, [abilities, feature, navigate]);

  return children;
}
