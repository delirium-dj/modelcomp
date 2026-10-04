# DeepSeek V4 Flash Vision Experimental — Independent Research Report

## Summary and evidence

DeepSeek V4 Flash Vision Experimental was an August 2026 multimodal extension of V4 Flash. It accepted mixed text and images through Chat Completions, Messages, and Responses APIs and matched V4 Flash's text capability. DeepSeek reported **83.9 Terminal-Bench 2.1**, **59.3 DeepSWE**, **57.7 NL2Repo**, **64.3 Chartography**, and **35.0 ZeroBench pass@5**.

Sources: [DeepSeek vision release](https://api-docs.deepseek.com/news/news260821/), [DeepSeek changelog](https://api-docs.deepseek.com/updates/)

## Cost and limitations

Images used up to 384 billed tokens each at V4 Flash rates. The experimental model is retired; its legacy ID now routes to the native-multimodal DeepSeek V4.1 Flash, so reproducible access to the original is no longer available.

## Scores

- **Tool use: 88/100.** Multiple agent APIs and solid terminal performance supported practical workflows.
- **Reasoning: 84/100.** Text reasoning matched V4 Flash but trailed later V4.1.
- **Context window: 96/100.** It inherited V4's million-token context.
- **Multimodal: 88/100.** Vision-agent capability approached Opus 4.8 in DeepSeek's evaluation.
- **Coding: 87/100.** Terminal and DeepSWE results were strong for an experimental Flash model.
- **Cost efficiency: 94/100.** Low Flash pricing and compact image billing were attractive.
- **Overall Score: 89/100.** Half-up rounded mean: (88 + 84 + 96 + 88 + 87) / 5 = 88.6.

## Bottom line

This model was a useful vision preview, but all current deployments should target DeepSeek V4.1 Flash.
