-- CREATE DATABASE
-- .......................................
create database csdb;

-- CREATE SCHEMA
-- .......................................

drop schema if exists climate;
create schema climate;

-- CREATE USER
-- .......................................
create user climateadm with password 'obiwan';

-- GRANT PERMISSIONS
-- .......................................
grant all on schema climate to climateadm;
grant all on all tables in schema climate to climateadm;

