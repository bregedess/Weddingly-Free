import { time } from "console";

// lib/config.ts
export const config = {
    coupleNames: process.env.NEXT_PUBLIC_COUPLE_NAMES || "Default Names",
    eventDate: process.env.NEXT_PUBLIC_EVENT_DATE || "2025-01-01T00:00:00",
    groom: process.env.NEXT_PUBLIC_GROOM_NAME || "Default Groom",
    groomNickName: process.env.NEXT_PUBLIC_GROOM_NICKNAME || "Default Nickname",
    groomInstagram: process.env.NEXT_PUBLIC_GROOM_INSTAGRAM || "Default Instagram",
    groomBio: process.env.NEXT_PUBLIC_GROOM_BIO || "Default Bio",
    bride: process.env.NEXT_PUBLIC_BRIDE_NAME || "Default Bride",
    brideNickName: process.env.NEXT_PUBLIC_BRIDE_NICKNAME || "Default Nickname",
    brideInstagram: process.env.NEXT_PUBLIC_BRIDE_INSTAGRAM || "Default Instagram",
    brideBio: process.env.NEXT_PUBLIC_BRIDE_BIO || "Default Bio",
    bibleVerse: process.env.NEXT_PUBLIC_BIBLE_VERSE || "Default Bible Verse",
    bibleVerseContent: process.env.NEXT_PUBLIC_BIBLE_VERSE_CONTENT || "Default Bible Verse Content",
    timeline_1: process.env.NEXT_PUBLIC_YEAR_1 || "Default Timeline 1",
    timeline_1_content: process.env.NEXT_PUBLIC_YEAR_1_CONTENT || "Default Timeline 1 Content",
    timeline_2: process.env.NEXT_PUBLIC_YEAR_2 || "Default Timeline 2",
    timeline_2_content: process.env.NEXT_PUBLIC_YEAR_2_CONTENT || "Default Timeline 2 Content",
    timeline_3: process.env.NEXT_PUBLIC_YEAR_3 || "Default Timeline 3",
    timeline_3_content: process.env.NEXT_PUBLIC_YEAR_3_CONTENT || "Default Timeline 3 Content",
    holyMatrimony: {
        enabled: process.env.NEXT_PUBLIC_HOLY_MATRIMONY === 'true',
        time: process.env.NEXT_PUBLIC_HOLY_MATRIMONY_TIME || "00:00",
        place: process.env.NEXT_PUBLIC_HOLY_MATRIMONY_PLACE || "Default Church",
        place_details: process.env.NEXT_PUBLIC_HOLY_MATRIMONY_PLACE_DETAILS || "Default Street",
        googleMapsLink: process.env.NEXT_PUBLIC_HOLY_MATRIMONY_GOOGLE_MAPS || "https://maps.app.goo.gl/vPmfWux29qYYfkJTA",
    },
    weddingReception: {
        enabled: process.env.NEXT_PUBLIC_WEDDING_RECEPTION === 'true',
        time: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_TIME || "00:00",
        place: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE || "Default Venue",
        place_details: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE_DETAILS || "Default Street",
        googleMapsLink: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_GOOGLE_MAPS || "https://maps.app.goo.gl/fQGiC37iEx6fcuNq8",
    },
    livestreaming: {
        enabled: process.env.NEXT_PUBLIC_LIVE_STREAMING === 'true',
        time: process.env.NEXT_PUBLIC_LIVE_STREAMING_TIME || "00:00",
        link: process.env.NEXT_PUBLIC_LIVE_STREAMING_LINK || "#",
        detail: process.env.NEXT_PUBLIC_LIVE_STREAMING_DETAIL || "Default Livestreaming Detail",
    },
    prewedding: {
        enabled: process.env.NEXT_PUBLIC_PREWEDDING === 'true',
        link: process.env.NEXT_PUBLIC_PREWEDDING_CODE_LINK_EMBED || "#",
        detail: process.env.NEXT_PUBLIC_PREWEDDING_DETAIL || "Default Prewedding Detail",
    },
    rsvp: {
        enabled: process.env.NEXT_PUBLIC_RSVP === 'true',
        detail: process.env.NEXT_PUBLIC_RSVP_DETAIL || "Default RSVP Detail",
    },
    thankyou: process.env.NEXT_PUBLIC_THANKYOU || "Default Thank You",
    thankyouDetail: process.env.NEXT_PUBLIC_THANKYOU_DETAIL || "Default Thank You Detail",
};
