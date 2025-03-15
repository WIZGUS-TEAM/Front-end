import Image from 'next/image';

const TooltipLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    className="text-[#E30613] hover:text-[#B30000] underline block break-all"
    target="_blank"
    href={href}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const EFlexyTooltipContent = () => (
  <div className="space-y-4 text-sm text-[#666666]">
    <p>
      Le service E-Flexy permet le transfert de crédit pour tous nos abonnés Control & Prépayés
      d'une manière électronique en toute sécurité,
    </p>
    <p>
      <TooltipLink href="http://www.djezzy.dz/particuliers/services/e-flexy">
        http://www.djezzy.dz/particuliers/services/e-flexy
      </TooltipLink>
    </p>
    <p>Pour en bénéficier l'abonné Djezzy doit avoir :</p>
    <p>Une carte Monétique de paiement CIB où EDAHABIA en cours de validité.</p>
    <p>Avoir signé un contrat d'adhésion au paiement en ligne.</p>
    <p>
      Avoir un code confidentiel (Mot de passe) reçu auprès de sa banque ou un numéro de
      téléphone relié à sa carte de paiement EDAHABIA
    </p>
    <p>pour la réception du mot de passe unique relatif aux paiements via internet.</p>
  </div>
);

export const CCPTooltipContent = () => (
  <div className="space-y-4 text-sm text-[#666666]">
    <p>
      Carte de paiement et de retrait électroniques sous système EMV (assurant la sécurité
      des transactions à ses porteurs), permettant d'effectuer diverses opérations de retrait
      et de paiement sur le compte (CCP), sur les guichets automatiques de banques (GAB) et
      les terminaux de paiement électronique (TPE), aussi sur le paiement en ligne.
    </p>
    <p>
      <TooltipLink href="https://www.poste.dz/services/particular/edahabia">
        https://www.poste.dz/services/particular/edahabia
      </TooltipLink>
    </p>
    <p className="flex items-center">
      <span className="font-medium text-[#333333]">Pour Commander sa carte:&nbsp;</span>
      <Image
        src="/E-Flexy_files/ccp_card.25c13477d6ae.png"
        alt="CCP Card"
        width={80}
        height={50}
        className="border border-[#E5E5E5] rounded"
      />
    </p>
    <p>
      <TooltipLink href="https://edcarte.poste.dz/fr/order_card.php">
        https://edcarte.poste.dz/fr/order_card.php
      </TooltipLink>
    </p>
  </div>
);

export const CIBTooltipContent = () => (
  <div className="space-y-4 text-sm text-[#666666]">
    <p>
      La carte CIB, est une carte interbancaire, elle est reconnaissable par le logo CIB de
      l'interbancarité qui est imprimé sur la carte, C'est un instrument de paiement et de
      retrait interbancaire domestique qui est accepté chez les commerçants affiliés au
      réseau monétique interbancaire et sur tout les DAB installés sur le territoire
      national.
    </p>
    <p>
      <TooltipLink href="http://www.satim-dz.com/?to=detail&id_cat=24&id_article=31">
        http://www.satim-dz.com/?to=detail&id_cat=24&id_article=31
      </TooltipLink>
    </p>
    <p className="flex items-center">
      <span className="font-medium text-[#333333]">Pour Commander sa carte:&nbsp;</span>
      <Image
        src="/E-Flexy_files/cib.bc8403a65f49.png"
        alt="CIB"
        width={80}
        height={40}
        className="border border-[#E5E5E5] rounded"
      />
    </p>
    <p>
      <TooltipLink href="https://www.bitakati.dz/fr/page/demande-de-carte-cib-p55">
        https://www.bitakati.dz/fr/page/demande-de-carte-cib-p55
      </TooltipLink>
    </p>
  </div>
); 