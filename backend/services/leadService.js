import axios from "axios";
import * as cheerio from "cheerio";
import keywordWebsites from "../config/websites.js";

const extractEmails = (text) => {
  const emailRegex =
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

  return text.match(emailRegex) || [];
};

const scrapeWebsite = async (url) => {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const bodyText = $("body").text();

    const emails = extractEmails(bodyText);

    return {
      website: url,
      emails: [...new Set(emails)],
    };
  } catch (error) {
    return null;
  }
};

const searchLeads = async (keyword) => {
  let websites = [];

  const lowerKeyword =
    keyword.toLowerCase();

  if (
    lowerKeyword.includes("singing")
  ) {
    websites =
      keywordWebsites.singingBowl;
  } else if (
    lowerKeyword.includes(
      "meditation"
    )
  ) {
    websites =
      keywordWebsites.meditation;
  } else {
    websites =
      keywordWebsites.wellness;
  }

  const scrapedResults =
    await Promise.all(
      websites.map((site) =>
        scrapeWebsite(site)
      )
    );

  return scrapedResults.filter(
    Boolean
  );
};

export default searchLeads;