

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

variable "project"{
    type = string
    default = "ignite-logistics"
}

variable "network_name"{
    type = string
    default = "network-name-1"
}

variable "cluster_name" {
  description = "cluster-1"
  type        = string
  default = "cluster-1"
}

variable "release_channel" {
  description = "release-1"
  type        = string
  default     = "RAPID"
}

# ====================================
# ========= Location Variables =======
# ====================================

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "regional" {
  description = "Regional or Zonal cluster"
  type        = string
  default     = false
}

variable "zone" {
  description = "GCP Zone"
  type        = string
  default     = "us-central1-a"
}

variable "zones" {
  description = "GKE Cluster Zones"
  type        = list(any)
  default     = ["us-central1-a"]
#   default     = ["us-central1-a", "us-central1-b"]
}

# data "terraform_remote_state" "vpc" {
#   backend = "gcs"

#   config = {
#     bucket  = "network-tf-state"
#     prefix  = "network"
#   }
# }



# ====================================
# ========= Subnet Variables =========
# ====================================

variable "network" {
  description = "Network name"
  type        = string
  default     = "walkerignite-network"
}

variable "subnetwork" {
  description = "GKE Subnet name"
  type        = string
  default     = "gke-subnet"
}
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


# variable "subnet_users" {
#   type        = map(list(string))
#   description = "The list of users for all subnets"
# }

variable "secondary_pods" {
  description = "Pods Secondary Name"
  type        = string
  default     = "gke-pods-secondary"
}

variable "secondary_services" {
  description = "Services Secondary Name"
  type        = string
  default     = "gke-services-secondary"
}

variable "master_ipv4_cidr_block" {
  description = "CIDR block to be used for the GKE master"
  type        = string
  default     = "10.10.18.0/28"
}

variable "master_authorized_networks" {
  description = "Authorized network for master node pool"
  type        = list(object({ cidr_block = string, display_name = string }))
  default = [
    {
      cidr_block   = "10.10.18.0/28"
      display_name = "master-auth-network"
    }
  ]
}


# ====================================
# ========= GKE Add-ons ==============
# ====================================

variable "network_policy" {
  description = "Whether or not to use Kubernetes Network Policy"
  type        = bool
  default     = false
}

variable "istio" {
  description = "Whether or not Istio should be enabled"
  type        = bool
  default     = false
}

variable "cloudrun" {
  description = "Whether or not Cloudrun should be enabled"
  type        = bool
  default     = false
}

variable "dns_cache" {
  description = "Whether or not DNS Cache should be enabled"
  type        = bool
  default     = false
}

variable "config_connector" {
  description = "Whether or not config connector should be enabled"
  type        = bool
  default     = true
}

variable "kalm_config" {
  description = "Whether or not k8s application lifecycle manager should be enabled"
  type        = bool
  default     = false
}

variable "datapath_provider" {
  description = "Set to ADVANCED_DATAPATH to enable Dataplane v2 - requires 1.20.2??"
  type        = string
  default     = "ADVANCED_DATAPATH"
}

# ====================================
# ========= Node Pool Variables ======
# ====================================

variable "node_pools" {
  description = "Node pool declaration"
  type        = list(map(string))
  default = [
    {
      name               = "default-node-pool"
      machine_type       = "e2-small"
      node_locations     = "us-central1-b"
      min_count          = 1
      max_count          = 2
      local_ssd_count    = 0
      disk_size_gb       = 10
      disk_type          = "pd-standard"
      image_type         = "COS"
      auto_repair        = true
      auto_upgrade       = true
      service_account    = "iac-terraform@ignite-logistics.iam.gserviceaccount.com"
      preemptible        = true
      initial_node_count = 1
    },
  ]
}

variable "node_pools_oauth_scopes" {
  description = "Node pool OAuth scopes"
  type        = map(list(string))
  default = {
    all = [
      "https://www.googleapis.com/auth/cloud-platform",
      "https://www.googleapis.com/auth/devstorage.read_only"
    ]
  }
}

variable "node_pools_labels" {
  description = "Node pool labels"
  type        = map(map(string))
  default = {
    all = {}

    general-pool = {
      app = "general"
    }

    preemptible-pool = {
      app = "preemptible"
    }

  }
}

variable "node_pools_metadata" {
  description = "Node pool meta data"
  type        = map(map(string))
  default     = {}
}

variable "node_pools_taints" {
  description = "Node pool taints"
  type        = map(list(object({ key = string, value = bool, effect = string })))
  default = {
    all = []

    general-pool = [
      {
        key    = "general-pool"
        value  = true
        effect = "PREFER_NO_SCHEDULE"
      },
    ]

    preemptible-pool = [
      {
        key    = "preemptible-pool"
        value  = true
        effect = "PREFER_NO_SCHEDULE"
      },
    ]

  }
}

variable "node_pools_tags" {
  description = "Node pool tags"
  type        = map(list(string))
  default     = {}
}
