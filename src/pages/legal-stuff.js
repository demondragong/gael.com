import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function LegalStuffPage() {
  return (
    <>
      <Seo title="Legal Stuff" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="legal-stuff" heading="Legal Stuff" />
      </Page>
    </>
  );
}
