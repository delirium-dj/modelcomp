# GLM 5.3 Free — findings by Fledge Alpha

- Source: Z.ai (`glm-5.3-free`, GLM-5.3 free tier)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Free OpenCode Zen tier of Z.ai's GLM-5.3 flagship — a 753B text MoE optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** OpenCode Zen free promotional tier; OpenRouter `z-ai/glm-5.3`; NVIDIA NIM `z-ai/glm-5-3`; QwenCloud `ZHIPU/GLM-5.3`; Chat Completions/Responses APIs.
- **Release / knowledge:** August 18–27, 2026; knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-free` (free Zen tier); paid `z-ai/glm-5.3`.
- **Context window:** 1M tokens native (1,048,576); up to 128K–131K output.
- **Modalities:** text in/out; reasoning (low/high/max effort); function calling, MCP tools, structured output, context caching.
- **Pricing (as of 2026-10-05):** free on the OpenCode Zen tier; paid listings ~$0.27–$1.82 in / $0.86–$5.72 out per 1M depending on provider.
- **Architecture:** 753B-parameter text MoE, DeepSeek-style sparse attention (DSA), native FP8, MTP speculative decoding; same base as GLM-5.2 with large post-training.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **28.5** (vendor-reported, up from 23.8 on 5.2; open-weights SOTA claim)
- CyberGym: **84.5%** (vendor-reported)
- MCP/tool calling: supported; no separate tau3 numeric published

Reasoning / knowledge:

- DeepSWE v1.1: **66.9** (vendor-reported, up from 46.2)
- Agents' Last Exam 28.5 (see above)
- GPQA-style numbers: no verified public score found
- HLE: no verified public score found

Coding:

- Terminal-Bench 3.0: **28.3** (vendor-reported; GLM-5.2 was 4.6), ranked first among open-source models per Z.ai
- DeepSWE v1.1 66.9 (see above)
- Internal Code Bench: ~50% improvement over GLM-5.2 (vendor claim)

Long context:

- 1M-token context with DSA; no MRCR/RULER/GraphWalks numeric published

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 82/100.** Agents' Last Exam 28.5 (open-weights SOTA) and CyberGym 84.5 show strong agent/cyber tool execution; breadth of independent tool benchmarks is thin.
- **Reasoning: 78/100.** DeepSWE 66.9 and Terminal-Bench gains imply strong agentic reasoning; no GPQA/HLE numbers to verify breadth, capping the score.
- **Context window: 97/100.** 1M native, vendor-documented, DSA architecture; up to 131K output.
- **Multimodal: 15/100.** Text-only in/out per NVIDIA card and vendor docs.
- **Coding: 84/100.** Terminal-Bench 3.0 28.3 first among open weights and DeepSWE 66.9 are credible coding-agent signals.
- **Cost efficiency: 100/100.** Free OpenCode Zen tier; paid fallback ~$0.27–$1.82/$0.86–$5.72 per 1M.
- **Overall Score: 71/100.** Mean of five non-cost dims (82+78+97+15+84)/5 = 71.2 → 71; best fit: free tier long-horizon agentic coding, text-only.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (TechApple Zhipu writeup, NVIDIA NIM card, CloudPrice/LM Market Cap pricing, Gate News flash); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
