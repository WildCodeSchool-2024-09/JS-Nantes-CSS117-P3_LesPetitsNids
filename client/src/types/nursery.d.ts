export interface NurseryData {
  id: number;
  ns_name: string;
  ns_capacity: number;
  ns_address: string;
  ns_image: string;
  ns_type: string;
  ns_mail: string;
  ns_num_tel: string;
}

interface NurseryDetails extends NurseryData {
  ns_num_tel: string;
  ns_mail: string;
  ns_description: string;
}

// Interface à garder pour la suite
