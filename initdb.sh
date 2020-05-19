#!/bin/bash

set -e
set -u

function create_user_and_database() {
	local database=$1
    psql -v ON_ERROR_STOP=1 --username=$POSTGRES_USER --dbname=$POSTGRES_DB \
       		 -c "CREATE DATABASE $database;"
	echo "  Creating user and database '$database'"
}
