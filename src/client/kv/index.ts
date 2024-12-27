import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();
const keyVaultName = "KV_NAME";
const url = "https://" + keyVaultName + ".vault.azure.net";

export const kvClient = new SecretClient(url, credential);