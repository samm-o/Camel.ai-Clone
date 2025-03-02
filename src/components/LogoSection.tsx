import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <section className="show">
      <div className="logo-carousel-container">
        <div className="logo-track">
          {/* First set of logos */}
          <div className="logo-slide">
            <Link href="/postgres">
              <Image src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB Logo" width={60} height={60} />
            <Link href="https://camelai.com/blog/peliqan_data_warehouse/">
              <Image src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynamoDB Logo" width={60} height={60} />
            <Link href="/csv">
              <Image src="https://camelai.com/assets/images/csv-square.png" alt="CSV Logo" width={60} height={60} />
            </Link>
            <Link href="/sqlite">
              <Image src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite Logo" width={60} height={60} />
            </Link>
            <Link href="/bigquery">
              <Image src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery Logo" width={60} height={60} />
            </Link>
            <Link href="/mongodb">
              <Image src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB Logo" width={60} height={60} />
            </Link>
            <Link href="/motherduck">
              <Image src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck Logo" width={60} height={60} />
            </Link>
            <Link href="/clickhouse">
              <Image src="https://camelai.com/assets/images/clickhouse-square.png" alt="ClickHouse Logo" width={60} height={60} />
            </Link>
            <Link href="/excel">
              <Image src="https://camelai.com/assets/images/excel-square.png" alt="Excel Logo" width={60} height={60} />
            </Link>
            <Link href="/mysql">
              <Image src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL Logo" width={60} height={60} />
            </Link>
            <Link href="/supabase">
              <Image src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce Logo" width={60} height={60} />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="logo-slide">
            <Link href="/postgres">
              <Image src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB Logo" width={60} height={60} />
            <Link href="https://camelai.com/blog/peliqan_data_warehouse/">
              <Image src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynamoDB Logo" width={60} height={60} />
            <Link href="/csv">
              <Image src="https://camelai.com/assets/images/csv-square.png" alt="CSV Logo" width={60} height={60} />
            </Link>
            <Link href="/sqlite">
              <Image src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite Logo" width={60} height={60} />
            </Link>
            <Link href="/bigquery">
              <Image src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery Logo" width={60} height={60} />
            </Link>
            <Link href="/mongodb">
              <Image src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB Logo" width={60} height={60} />
            </Link>
            <Link href="/motherduck">
              <Image src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck Logo" width={60} height={60} />
            </Link>
            <Link href="/clickhouse">
              <Image src="https://camelai.com/assets/images/clickhouse-square.png" alt="ClickHouse Logo" width={60} height={60} />
            </Link>
            <Link href="/excel">
              <Image src="https://camelai.com/assets/images/excel-square.png" alt="Excel Logo" width={60} height={60} />
            </Link>
            <Link href="/mysql">
              <Image src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL Logo" width={60} height={60} />
            </Link>
            <Link href="/supabase">
              <Image src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce Logo" width={60} height={60} />
          </div>
        </div>
        
        <div className="logo-track reverse">
          {/* First set of logos */}
          <div className="logo-slide">
            <Link href="/bigquery">
              <Image src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery Logo" width={60} height={60} />
            </Link>
            <Link href="/mongodb">
              <Image src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB Logo" width={60} height={60} />
            </Link>
            <Link href="/motherduck">
              <Image src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck Logo" width={60} height={60} />
            </Link>
            <Link href="/excel">
              <Image src="https://camelai.com/assets/images/excel-square.png" alt="Excel Logo" width={60} height={60} />
            </Link>
            <Link href="/mysql">
              <Image src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL Logo" width={60} height={60} />
            </Link>
            <Link href="/supabase">
              <Image src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets Logo" width={60} height={60} />
            <Link href="/clickhouse">
              <Image src="https://camelai.com/assets/images/clickhouse-square.png" alt="ClickHouse Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce Logo" width={60} height={60} />
            <Link href="/postgres">
              <Image src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB Logo" width={60} height={60} />
            <Link href="https://camelai.com/blog/peliqan_data_warehouse/">
              <Image src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake Logo" width={60} height={60} />
            <Link href="/csv">
              <Image src="https://camelai.com/assets/images/csv-square.png" alt="CSV Logo" width={60} height={60} />
            </Link>
            <Link href="/sqlite">
              <Image src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynamoDB Logo" width={60} height={60} />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="logo-slide">
            <Link href="/bigquery">
              <Image src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery Logo" width={60} height={60} />
            </Link>
            <Link href="/mongodb">
              <Image src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB Logo" width={60} height={60} />
            </Link>
            <Link href="/motherduck">
              <Image src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck Logo" width={60} height={60} />
            </Link>
            <Link href="/excel">
              <Image src="https://camelai.com/assets/images/excel-square.png" alt="Excel Logo" width={60} height={60} />
            </Link>
            <Link href="/mysql">
              <Image src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL Logo" width={60} height={60} />
            </Link>
            <Link href="/supabase">
              <Image src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets Logo" width={60} height={60} />
            <Link href="/clickhouse">
              <Image src="https://camelai.com/assets/images/clickhouse-square.png" alt="ClickHouse Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce Logo" width={60} height={60} />
            <Link href="/postgres">
              <Image src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB Logo" width={60} height={60} />
            <Link href="https://camelai.com/blog/peliqan_data_warehouse/">
              <Image src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable Logo" width={60} height={60} />
            <Image src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake Logo" width={60} height={60} />
            <Link href="/csv">
              <Image src="https://camelai.com/assets/images/csv-square.png" alt="CSV Logo" width={60} height={60} />
            </Link>
            <Link href="/sqlite">
              <Image src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite Logo" width={60} height={60} />
            </Link>
            <Image src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynamoDB Logo" width={60} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
} 