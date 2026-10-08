# Qwen 3.5 397b — findings by GLM 5.3 Flash

- Source: Alibaba / Qwen (`qwen-3.5-397b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b (Qwen3.5-397B-A17B)
- **Short description:** Alibaba Cloud's largest and most capable Qwen 3.5 multimodal foundation model (released February 2026): 397B total parameters with 17B active via sparse MoE (512 experts) plus a hybrid linear-attention mechanism, native vision-language, and open weights under Apache 2.0.
- **Provider / access:** OpenRouter `qwen/qwen3.5-397b-a17b` (OpenAI-compatible); NovitaAI, SiliconFlow CN, Run BiOS serverless `qwen3.5-397b-a17b`; OpenCode Zen `opencode/qwen-3.5-397b` (standard pricing). Function calling, per-request thinking toggle, vision input, prompt caching.
- **Release / knowledge:** Released 2026-02-24 (apxml model card; OpenRouter lists 2026-02-16 for series availability); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-397b` (Zen); `qwen/qwen3.5-397b-a17b` (OpenRouter).
- **Context window:** 262,144 tokens native (262K), max output 65,536 tokens (OpenRouter/llm-stats); extended context up to 1M tokens claimed in Alibaba's own description (unverified at 1M — scored on the verified 262K native window).
- **Modalities:** Text/image in (native vision-language) → text out; reasoning yes (hybrid, thinking mode toggleable per request); tool calls yes (function calling, BFCL-v4 listed); JSON mode yes.
- **Pricing (as of 2026-10-08):** varies by provider — $0.39/$2.34 per 1M in/out (OpenRouter), $0.45 in / $0.22 cached / $3.00 out (llm-stats), $0.60/$3.60 (apxml/Novita), $0.29/$1.74 (SiliconFlow CN). Paid only; no Free ID confirmed on Zen.
- **Architecture:** Open weights, Apache 2.0; sparse MoE — 397B total, 17B active (11 of 512 experts), 450M auxiliary parameters; hybrid attention: linear attention (75% ratio) + grouped-query attention (32Q/2KV, head dim 256); 60 layers; 248,320 vocab; multi-token prediction head.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.0%** (apxml model card summary)
- Artificial Analysis Agentic Index: **0.08 (8)**, rank #103 (apxml/AA)
- Tau2-Bench (t2-bench): tracked on llm-stats (value not independently confirmed — provisional)
- GDPval-AA: no verified public score found
- Toolathon / MCP-Mark / MCP-Atlas / SWE Atlas Codebase QnA: tracked on llm-stats (MCP-Mark, Toolathlon listed; values not independently confirmed)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (apxml model card, rank #29)
- HLE: no verified public score found
- MMLU-Pro: **87.8%**, rank #3 (apxml)
- LCR / MLCR: AA-LCR tracked on llm-stats (value not independently confirmed)
- Artificial Analysis Intelligence Index: **0.18 (18)** (apxml/AA); AA Standard 0.21, rank #1161
- Stack Unseen: **76.3%**, rank #17 (apxml)

Coding:

- SWE-bench Verified: **80.0%** (apxml model card summary)
- WebDev Arena: **1399** Elo, rank #78 (apxml)
- LiveCodeBench v6: tracked on llm-stats (value not independently confirmed — provisional)
- SciCode / AA-SciCode: no verified public score found
- Artificial Analysis Coding Index: **0.48 (48)**, rank #93 (apxml/AA)

Long context:

- 262K native window documented; extended 1M claimed by Alibaba but no MRCR/RULER/GraphWalks retrieval values found — "no long-context retrieval reported" at verified length

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 54.0% sits in the 45–60% mid band (50–70 range) but AA Agentic Index 8 is low-band; GDPval/Tau3 values unconfirmed, which caps the score in the high 50s.
- **Reasoning: 72/100.** GPQA Diamond 88.4% is near-frontier (just under the 90% band) and MMLU-Pro 87.8% is rank #3, but AA Intelligence Index 18 is mid-low and pulls the blended score down.
- **Context window: 78/100.** Verified native 262K tokens (200K–500K tier = 65–84; 262K ≈ 78); the 1M extended claim is unverified with no retrieval data, and the 65K max output is a noted caveat.
- **Multimodal: 65/100.** Native unified vision-language (text/image in) maps to the +image-in 60–70 band; no audio/video input documented.
- **Coding: 78/100.** SWE-bench Verified 80.0% is strong agentic-coding territory; Stack Unseen 76.3 and WebDev Arena 1399 corroborate; capped below the 90 band by AA Coding Index 48 and unconfirmed LiveCodeBench/SciCode values.
- **Cost efficiency: 85/100.** $0.60/$3.60 per MTok (apxml) — below the ~$0.60/$2.20 ≈ 92 reference because of the higher output rate; OpenRouter's $0.39/$2.34 would score ~88.
- **Overall Score: 70.2/100.** Mean of the five quality dims (58+72+78+65+78)/5 = 70.2; best fit: cost-efficient open-weights coding agent and vision-language work at 262K context — not for frontier reasoning or top-tier autonomous tool use.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (apxml model card, OpenRouter, llm-stats, provider pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
