import database from "infra_fp/database.js";

const status = async function status(request, response) {
  const updatedAt = new Date().toISOString();

  let version = await database.query("SHOW server_version;");
  version = version.rows[0].server_version;

  let max_connections = await database.query("SHOW max_connections;");
  max_connections = max_connections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  let usedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;",
    values: [databaseName],
  });
  usedConnections = usedConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: version,
        max_connections: parseInt(max_connections),
        opened_connections: usedConnections,
      },
    },
  });
};

export default status;
