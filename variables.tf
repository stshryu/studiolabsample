variable "aws_region" {
  description = "AWS Region"
  default     = "us-east-2"
}

variable "access_key" {
  description = "Access Key"
  default = "access"
}

variable "secret_key" {
  description = "Secret Key"
  default = "secret"
}

variable "docker_image_tag" {
  type        = string
  description = "This is the tag which will be used for the image that you created"
  default     = "latest"
}
