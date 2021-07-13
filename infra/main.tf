terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
    }
  }
}

provider "google" {
  credentials = file("ignite-logistics-522db0b05356.json")
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


# module "cloud-nat" {
#   source = "terraform-google-modules/cloud-nat/google"

#   name       = "nat-name-1"
#   project_id = var.project
#   region     = var.region
#   router     = module.cloud_router.router.name

#   depends_on = [module.vpc, module.cloud_router]
# }


# module "cloud_router" {
#   source = "terraform-google-modules/cloud-router/google"

#   name    = "router-name-1"
#   project = var.project
#   region  = var.region
#   network = var.network_name

#   bgp = {
#     asn               = 65010
#     advertised_groups = ["ALL_SUBNETS"]
#   }

#   depends_on = [module.vpc]
# }


#variables 

variable "subnets" {
  type        = list(map(string))
  description = "The list of subnets being created"
  default = [
    {
      subnet_name           = "gke-subnet"
      subnet_ip             = "10.10.48.0/20"
      subnet_region         = "us-central1"
      subnet_private_access = "true"
    },
  ]
}

variable "secondary_ranges" {
  type        = map(list(object({ range_name = string, ip_cidr_range = string })))
  description = "Secondary ranges that will be used in some of the subnets"
  default = {
    gke-subnet = [
      {
        range_name    = "gke-pods-secondary"
        ip_cidr_range = "240.0.0.0/12"
      },
      {
        range_name    = "gke-services-secondary"
        ip_cidr_range = "240.16.0.0/20"
      }
    ]
  }
}

variable "region" {
    type = string
    default = "us-central1"
}

variable "project"{
    type = string
    default = "ignite-logistics"
}

variable "network_name"{
    type = string
    default = "network-name-1"
}