#test branching

provider "google" {
#   credentials = file("ignite-logistics-522db0b05356.json")
  project = var.project
  region  = "us-central1"
  zone    = "us-central1-c"
}

# resource "google_compute_network" "vpc_network" {
#   name = "terraform-network"
# }

resource "google_storage_bucket" "django-storage" {
  default_event_based_hold    = false
  force_destroy               = false
  location                    = var.region
  name                        = "ignite-logistics-storage-bucket"
  requester_pays              = false
  storage_class               = "STANDARD"
  uniform_bucket_level_access = true
  project                     = var.project
}

module "vpc" {
  source                                 = "terraform-google-modules/network/google"
  project_id                             = var.project
  network_name                           = var.network_name
  routing_mode                           = "GLOBAL"
  shared_vpc_host                        = false
  delete_default_internet_gateway_routes = false
  subnets                                = var.subnets
  secondary_ranges                       = var.secondary_ranges
}


module "cloud-nat" {
  source = "terraform-google-modules/cloud-nat/google"

  name       = "nat-name-1"
  project_id = var.project
  region     = var.region
  router     = module.cloud_router.router.name

  depends_on = [module.vpc, module.cloud_router]
}


module "cloud_router" {
  source = "terraform-google-modules/cloud-router/google"

  name    = "router-name-1"
  project = var.project
  region  = var.region
  network = var.network_name

  bgp = {
    asn               = 65010
    advertised_groups = ["ALL_SUBNETS"]
  }

  depends_on = [module.vpc]
}

module "gke" {
  source = "terraform-google-modules/kubernetes-engine/google//modules/beta-private-cluster-update-variant"


  project_id = var.project
  name       = var.cluster_name

  # Network specs
  regional           = var.regional
  zones              = var.zones
  network            = var.network_name
  network_project_id = var.project
  subnetwork         = var.subnetwork
  ip_range_pods      = var.secondary_pods
  ip_range_services  = var.secondary_services

  # General cluster config
  http_load_balancing        = true
  horizontal_pod_autoscaling = true
  create_service_account     = false
  remove_default_node_pool   = true

  # Private cluster config
  enable_private_nodes   = true
  master_ipv4_cidr_block = var.master_ipv4_cidr_block
  network_policy         = var.network_policy

  # Cluster add ons
  istio            = var.istio
  cloudrun         = var.cloudrun
  dns_cache        = var.dns_cache
  config_connector = var.config_connector
  kalm_config      = var.kalm_config
  # resource_usage_export_dataset_id = var.dataset_id

  release_channel   = var.release_channel
  datapath_provider = var.datapath_provider

  # Node pools config
  node_pools              = var.node_pools
  node_pools_oauth_scopes = var.node_pools_oauth_scopes
  node_pools_labels       = var.node_pools_labels
  node_pools_metadata     = var.node_pools_metadata
  node_pools_taints       = var.node_pools_taints
  node_pools_tags         = var.node_pools_tags

  depends_on = [module.vpc]

}

