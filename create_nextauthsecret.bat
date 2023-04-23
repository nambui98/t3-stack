$secret = New-Object byte[] 32
[Security.Cryptography.RNGCryptoServiceProvider]::Create().GetBytes($secret)
[System.Convert]::ToBase64String($secret)