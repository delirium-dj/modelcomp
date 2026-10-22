# GPT-OSS 120B — findings by GPT 6.1 Sol

- Source: OpenAI, `openai/gpt-oss-120b`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / architecture:** Apache2.0 open-weight text MoE, **117B total/5.1B active**, not20B or a “Lite” checkpoint. Publisher evaluated the same **MXFP4 MoE quantization** used for the single80GB-GPU deployment claim; runtime/KV/workload costs still apply.[1]
- **Release / cutoff:** **August5,2025**, AA cutoff **May31,2024**. **131,072 context**, text→text, low/medium/high reasoning, functions/browser/Python orchestration and structured output. **Harmony format is required**; tool/media artifacts do not establish native vision.[1][2]
- **Access / price:** Local weights and Groq exact `openai/gpt-oss-120b`; current primary **Groq Free Plan** explicitly lists **30RPM/1,000requests-day/8KTPM/200Ktokens-day**. Account, free-tier request limits and provider terms apply; no zero-retention guarantee verified. This hosted entitlement, not free weights, supports cost100. AA paid reference$0.15/$0.60 per1M is separate. OpenRouter`:free` currently has empty endpoints.[2][3][4]

### Raw benchmarks found

- **AA independent high**, UUID`f0083258-8646-45b8-8082-7aaf6c2ea82a`: measured Index **11.6028**, **GPQA78.1818% /HLE19.6015% /AIME25 93.4417% /LCR52% /CritPt1.1429% /SciCode34.0278%**.[2]
- **LCB87.8307% /τ²65.7895% /banking12.7835% /TB2.1 26.2172% /TB4 0% measured**, GDPval605.47Elo, APEX3.0973%, AutomationBench0.1991%partial. Strong contest coding does not imply professional end-to-end execution.[2]
- **MLCR1.6667%**, IFBench68.9796%, Omniscience accuracy21.7833%/hallucination90.8161%; evaluator-defined denominators, not all questions answered incorrectly. MMMU-Pro null, notzero.[2]
- AA226.76tokens/s/0.826s first chunk are scoped serving measurements, not guaranteed Groq free-tier speed. No verified exact Claw/MCP, native perception or≥98% full-window retention. No metadata-only SWE number imported as freshly audited primary evidence.

### Normalized scores (1–100)

- **Tool use: 45/100.** Independent terminal/banking and very low workflow completion cap real agents despite useful functions.[2]
- **Reasoning: 62/100.** GPQA/HLE/math strength tempered by weak difficult science/context and high hallucination/low answer coverage.[2]
- **Context window: 60/100.** Verified~128K model capacity; Groq free request quotas can be more restrictive.[1][2][3]
- **Multimodal: 15/100.** Exact model is native text-only.[1]
- **Coding: 61/100.** High LCB but weak terminal/professional task completion; no broad repository extrapolation.[2]
- **Cost efficiency: 100/100.** Verified current exact Groq free-plan entitlement with explicit quotas; local operation is not free.[3]
- **Overall Score: 49/100.** Half-up mean `(45+62+60+15+61)/5=48.6`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22GPT-OSS-120B%22%20benchmark): generic OpenAI pages.
- [Google](https://www.google.com/search?q=%22GPT-OSS-120B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22GPT-OSS-120B%22%20model%20benchmark): human challenge, not bypassed. Primary model/runtime and exact independent/free-plan records inspected; no peer findings or authenticated inference.

[1]: https://huggingface.co/openai/gpt-oss-120b/raw/main/README.md
[2]: https://artificialanalysis.ai/models/gpt-oss-120b
[3]: https://console.groq.com/docs/rate-limits
[4]: https://openrouter.ai/api/v1/models/openai/gpt-oss-120b:free/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/AA research; measured zeros, native modalities, high-effort scope and actual hosted free quotas separated. Ratings are interpretations.
