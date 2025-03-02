import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  src: string;
  alt: string;
  href?: string;
}

export default function ClientLogos() {
  const logos: LogoProps[] = [
    { src: "https://camelai.com/assets/images/postgres-square.png", alt: "Postgres Logo", href: "/postgres" },
    { src: "https://camelai.com/assets/images/duckdb-square.png", alt: "DuckDB Logo" },
    { src: "https://camelai.com/assets/images/peliqan-square.png", alt: "Peliqan Logo", href: "https://camelai.com/blog/peliqan_data_warehouse/" },
    { src: "https://camelai.com/assets/images/linkedin-square.png", alt: "LinkedIn Logo" },
    { src: "https://camelai.com/assets/images/airtable-square.png", alt: "Airtable Logo" },
    { src: "https://camelai.com/assets/images/snowflake-square.png", alt: "Snowflake Logo" },
    { src: "https://camelai.com/assets/images/dynmodb-square.png", alt: "DynamoDB Logo" },
    { src: "https://camelai.com/assets/images/csv-square.png", alt: "CSV Logo", href: "/csv" },
    { src: "https://camelai.com/assets/images/sqlite-square.png", alt: "SQLite Logo", href: "/sqlite" },
    { src: "https://camelai.com/assets/images/bigquery-square.png", alt: "BigQuery Logo", href: "/bigquery" },
    { src: "https://camelai.com/assets/images/mongodb-square.png", alt: "MongoDB Logo", href: "/mongodb" },
    { src: "https://camelai.com/assets/images/motherduck-square.png", alt: "Motherduck Logo", href: "/motherduck" },
    { src: "https://camelai.com/assets/images/clickhouse-square.png", alt: "ClickHouse Logo", href: "/clickhouse" },
    { src: "https://camelai.com/assets/images/excel-square.png", alt: "Excel Logo", href: "/excel" },
    { src: "https://camelai.com/assets/images/mysql-square.png", alt: "MySQL Logo", href: "/mysql" },
    { src: "https://camelai.com/assets/images/supabase-square.png", alt: "Supabase Logo", href: "/supabase" },
    { src: "https://camelai.com/assets/images/sheets-square.png", alt: "Sheets Logo" },
    { src: "https://camelai.com/assets/images/salesforce-square.png", alt: "Salesforce Logo" },
  ];

  return (
    <section className="show">
      <div className="client-logos-section">
        <h2 className="client-logos-title">Supported Data Sources</h2>
        <div className="client-logos-grid">
          {logos.map((logo, index) => (
            <div key={index} className="client-logo-item">
              {logo.href ? (
                <Link href={logo.href}>
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={100} 
                    height={100} 
                  />
                </Link>
              ) : (
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={100} 
                  height={100} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 