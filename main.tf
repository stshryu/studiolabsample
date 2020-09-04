terraform {
  required_version = ">= 0.12"
}

provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region = var.aws_region
}

# Create ECR
resource "aws_ecr_repository" "studiolabsample" {
  name = "studiolabsample"
}

# TF script that automatically builds and pushes to specified ECR repository
module "ecr_docker_build" {
  source = "github.com/onnimonni/terraform-ecr-docker-build-module"
  version = "0.1"

  dockerfile_folder = "${path.module}"

  docker_image_tag = "${var.docker_image_tag}"

  aws_region = "${var.aws_region}"

  ecr_repository_url = "${aws_ecr_repository.studiolabsample.repository_url}"
}
