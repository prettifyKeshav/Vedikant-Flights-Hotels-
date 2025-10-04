'use client';
import { useEffect } from 'react';
import { useModalStore } from '../store/modalStore';

export default function Overlay() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const isHamOpen = useModalStore((state) => state.isHamOpen);
  const isEnquireOpen = useModalStore((state) => state.isEnquireOpen);
  const isVideoOpen = useModalStore((state) => state.isVideoOpen);
  const isLoginOpen = useModalStore((state) => state.isLoginOpen);
  const isSignUpOpen = useModalStore((state) => state.isSignUpOpen);
  const isEmbroideryOpen = useModalStore((state) => state.isEmbroideryOpen)
  const isEmbroideryGuideOpen = useModalStore((state) => state.isEmbroideryGuideOpen)
  const isAddressOpen = useModalStore((state) => state.isAddressOpen)
  const isPassChangeOpen = useModalStore((state) => state.isPassChangeOpen)
  const isFilterOpen= useModalStore((state) => state.isFilterOpen)
  const closeAll = useModalStore((state) => state.closeAll);

  const isAnyOpen = isSearchOpen || isHamOpen || isEnquireOpen || isVideoOpen || isLoginOpen || isSignUpOpen || isEmbroideryOpen || isEmbroideryGuideOpen || isAddressOpen || isPassChangeOpen || isFilterOpen;

  useEffect(() => {
    if (isAnyOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isAnyOpen]);

  return (
    <div
      className={`overlay ${isAnyOpen ? 'is-open' : ''}`}
      onClick={closeAll}
    />
  );
}