create table if not exists admin_users (
  id serial primary key,
  email text unique not null,
  name text not null,
  password_hash text not null,
  role text not null default 'staff' check (role in ('admin','staff')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists appointments (
  id serial primary key,
  reference text unique not null,
  name text not null,
  phone text not null,
  email text,
  service text,
  preferred_date date,
  preferred_time text,
  message text,
  status text not null default 'pending' check (status in ('pending','contacted','confirmed','completed','cancelled')),
  internal_notes text,
  scheduled_for timestamptz,
  updated_by int references admin_users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists appointments_status_idx on appointments(status, created_at desc);
create table if not exists services (
  id serial primary key, title text not null, summary text, image_url text,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists doctors (
  id serial primary key, name text not null, specialty text, qualifications text, photo_url text, bio text,
  visible boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists health_articles (
  id serial primary key, title text not null, slug text unique not null, excerpt text, body text, cover_url text,
  published boolean not null default false, published_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists website_content (
  key text primary key, value jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists site_settings (
  key text primary key, value text, updated_at timestamptz not null default now()
);
create table if not exists audit_logs (
  id serial primary key, user_id int references admin_users(id), action text not null,
  entity text, entity_id text, meta jsonb, created_at timestamptz not null default now()
);
