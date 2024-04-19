"use Client";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header, Layout, SliderData } from "@/components";
import React from "react";
import Head from "next/head";
import OurGoal from "@/components/OurGoal/OurGoal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saidoff - Biznesingizni birga quramiz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Saidoff - Biznesingizni birga quramiz" />
        <meta
          name="description"
          content="saidoff - Biznesingizni birga quramiz - Web-saytlar va mobil ilovalarni ishlab chiqish Foydalanuvchi interfeyslarini loyihalash va ishlab chiqish, front-end va back-end ishlab chiqish, veb-saytlar va ilovalarni sinovdan o'tkazish va qo'llab-quvvatlash. CRM va ERP tizimlari integratsiyasi Mijozlar va kompaniya resurslari bilan munosabatlarni boshqarish uchun dasturiy ta'minotni tanlash va sozlash, biznes jarayonlarini avtomatlashtirish."
        />
        <meta property="#" content="/Seo.jpg" />
        <meta property="og:url" content="/Seo.jpg" />
        <meta
          name="description"
          content="saidoff - Biznesingizni birga quramiz - Web-saytlar va mobil ilovalarni ishlab chiqish Foydalanuvchi interfeyslarini loyihalash va ishlab chiqish, front-end va back-end ishlab chiqish, veb-saytlar va ilovalarni sinovdan o'tkazish va qo'llab-quvvatlash. CRM va ERP tizimlari integratsiyasi Mijozlar va kompaniya resurslari bilan munosabatlarni boshqarish uchun dasturiy ta'minotni tanlash va sozlash, biznes jarayonlarini avtomatlashtirish."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/Seo.jpg" />
        <meta property="og:title" content="Saidoff Group" />
        <meta
          property="og:description"
          content="saidoff - Biznesingizni birga quramiz - Web-saytlar va mobil ilovalarni ishlab chiqish Foydalanuvchi interfeyslarini loyihalash va ishlab chiqish, front-end va back-end ishlab chiqish, veb-saytlar va ilovalarni sinovdan o'tkazish va qo'llab-quvvatlash. CRM va ERP tizimlari integratsiyasi Mijozlar va kompaniya resurslari bilan munosabatlarni boshqarish uchun dasturiy ta'minotni tanlash va sozlash, biznes jarayonlarini avtomatlashtirish."
        />
        <meta property="og:image" content="/Seo.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/Seo.jpg" />
        <meta property="og:title" content="Saidoff Group" />
        <meta
          property="og:description"
          content="saidoff - Biznesingizni birga quramiz - Web-saytlar va mobil ilovalarni ishlab chiqish Foydalanuvchi interfeyslarini loyihalash va ishlab chiqish, front-end va back-end ishlab chiqish, veb-saytlar va ilovalarni sinovdan o'tkazish va qo'llab-quvvatlash. CRM va ERP tizimlari integratsiyasi Mijozlar va kompaniya resurslari bilan munosabatlarni boshqarish uchun dasturiy ta'minotni tanlash va sozlash, biznes jarayonlarini avtomatlashtirish."
        />
        <meta property="og:image" content="/Seo.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/Seo.jpg" />
        <meta property="twitter:title" content="Saidoff Group" />
        <meta
          property="twitter:description"
          content="saidoff - Biznesingizni birga quramiz - Web-saytlar va mobil ilovalarni ishlab chiqish Foydalanuvchi interfeyslarini loyihalash va ishlab chiqish, front-end va back-end ishlab chiqish, veb-saytlar va ilovalarni sinovdan o'tkazish va qo'llab-quvvatlash. CRM va ERP tizimlari integratsiyasi Mijozlar va kompaniya resurslari bilan munosabatlarni boshqarish uchun dasturiy ta'minotni tanlash va sozlash, biznes jarayonlarini avtomatlashtirish."
        />
        <meta property="twitter:image" content="/Seo.jpg" />
      </Head>
      <Layout>
        <Header />
        <OurGoal />
        <SliderData />
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
