import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


type FeatureWrapperProps = {
  feature: FeaturesList;
  children: ReactNode;
};

export function FeatureWrapper({ feature, children }: FeatureWrapperProps) {
  const navigate = useNavigate();
  const { abilites } = useOrganizationStore();

  useEffect(() => {
    if (abilites && !abilites.can('use', feature)) {
      navigate('/', { replace: true });
    }
  }, [abilites, feature, navigate]);

  return children;
}
