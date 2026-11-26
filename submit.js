const { createClientFromEnv, keypairSigner } = require('@makedotfun/sdk/node');
const { readFileSync } = require('fs');

(async () => {
  try {
    const client = createClientFromEnv();
    const signer = await keypairSigner('/data/home/makefun-keypair.json');
    
    const bundlePath = '/data/home/makefun-one-honest-line-20261126/bundle/transcripts.tar.gz';
    const bundleData = readFileSync(bundlePath);
    const bundle = new File([bundleData], 'transcripts.tar.gz');

    const result = await client.entries.submit({
      competition: 'u-mfnakmal-one-honest-line-ef68037d',
      commitSha: 'fb9bfe1ab10a481ef3fb932f89b5784b07f8b87e',
      repoUrl: 'https://github.com/wanxbr/makefun-one-honest-line',
      bundle,
      signer,
    });

    console.log('Submission ID:', result.entryId);
    console.log('Receipt Status:', result.receipt?.status || 'pending');
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
