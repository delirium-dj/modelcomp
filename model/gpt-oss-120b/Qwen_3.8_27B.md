# GPT OSS 120B — findings by Qwen 3.8 27B

- Source: OpenAI (`opencode/gpt-oss-120b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B (gpt-oss-120b)
- **Short description:** OpenAI's open-weight 117B MoE (5.1B active) for reasoning and agentic use cases, trained on the harmony response format with configurable reasoning effort (low/medium/high) and MXFP4-quantized expert weights; permissive Apache 2.0 license.
- **Provider / access:** Open weights on Hugging Face (`openai/gpt-oss-120b`); ~20 API providers per the Artificial Analysis page; local via Ollama (`gpt-oss:120b`) / LM Studio / vLLM / SGLang. meta.json lists OpenCode Zen ID `opencode/gpt-oss-120b` — the ID was not present in the Zen docs model list or `zen/v1/models` fetched 2026-09-29.
- **Release / knowledge:** Released August 5, 2025 (Artificial Analysis); knowledge cutoff May 31, 2024.
- **IDs:** `openai/gpt-oss-120b` (Hugging Face / provider IDs); `opencode/gpt-oss-120b` per meta.json (not verified on the current Zen list).
- **Context window:** 131K (Artificial Analysis) / 128K (BenchLM, meta.json) — ~128–131K total.
- **Modalities:** Text in / text out; reasoning yes (three effort levels, full chain-of-thought); function calling, structured outputs, built-in web browsing / Python code execution tools.
- **Pricing (as of 2026-09-29):** $0.15 input / $0.59 output per 1M (median across providers, Artificial Analysis "high" variant page fetched today); open weights free to self-host.
- **Architecture:** 117B total / 5.1B active MoE, MXFP4 post-training quantization, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (**benchlm.ai/models/gpt-oss-120b**): **65.8%**
- GDPval-AA (**benchlm.ai/models/gpt-oss-120b**): **745** Elo (4.8% normalized)
- APEX-Agents-AA (**benchlm.ai/models/gpt-oss-120b**): **3.1%**
- AA Agentic Index (**benchlm.ai/models/gpt-oss-120b**): **6.2%**
- Gert Labs (**benchlm.ai/models/gpt-oss-120b**): **29.61%**
- Terminal-Bench 2.1: no verified public score found (TB 2.0 **18.7%** per the comparison table on **huggingface.co/poolside/Laguna-XS-2.1**, which cites the official leaderboard)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (**benchlm.ai/models/gpt-oss-120b**): **78.2%** (AA-GPQA); GPQA Diamond **80.81** (HF evaleval, **huggingface.co/openai/gpt-oss-120b**)
- HLE (**benchlm.ai/models/gpt-oss-120b**): **19.6%**
- LCR (**benchlm.ai/models/gpt-oss-120b**): **52.0%**
- CritPt (**benchlm.ai/models/gpt-oss-120b**): **1.1%**
- AA Intelligence Index (**benchlm.ai/models/gpt-oss-120b**): **11.6**; **12** for the "high" variant, #9 of 65 in its class (**artificialanalysis.ai/models/gpt-oss-120b**)
- Omniscience Accuracy / Hallucination Rate (**benchlm.ai/models/gpt-oss-120b**): **21.8% / 90.8%**
- MMLU-Pro (**huggingface.co/openai/gpt-oss-120b**, HF evaleval): **80.8**
- BenchLM overall: **37.74/100, #133 of 514** (**benchlm.ai/models/gpt-oss-120b**)

Coding:

- SWE-bench Verified: no verified public score found on the fetched pages (listed on HF with value collapsed)
- SWE-bench Pro: **16.2%** (comparison table on **huggingface.co/poolside/Laguna-XS-2.1**, highest published verified score from the official leaderboard)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode (**benchlm.ai/models/gpt-oss-120b**): **34.0%**
- Vibe Code Bench: no verified public score found
- AA Coding Index (**benchlm.ai/models/gpt-oss-120b**): **30.4**
- React Native Evals (**benchlm.ai/models/gpt-oss-120b**): **71.6%**

Long context:

- LCR **52.0%** at the ~128–131K window (**benchlm.ai/models/gpt-oss-120b**); no MRCR/RULER numbers published on the fetched pages.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 65.8% is decent, but GDPval-AA 745 sits below the mid band (900–1200), the AA Agentic Index is 6.2%, and TB 2.0 is only 18.7% — agentic tool use is its weak spot.
- **Reasoning: 55/100.** GPQA 78.2–80.8% lands in the mid band (60–80 → 55–65), but the AA Intelligence Index of 11.6–12 (below the mid 20–35 reference) and HLE 19.6% pull it to the bottom of that band.
- **Context window: 55/100.** ~128–131K total — 100K–200K tier = 50–64.
- **Multimodal: 15/100.** Text in / text out only.
- **Coding: 40/100.** SWE-bench Pro 16.2%, AA Coding Index 30.4 and AA-SciCode 34.0% are well below the mid references; no SWE-bench Verified figure found.
- **Cost efficiency: 95/100.** $0.15/$0.59 per 1M sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) tiers; Apache-2.0 open weights add free self-hosting.
- **Overall Score: 42.0/100.** Mean of Tool 45, Reasoning 55, Context 55, Multimodal 15, Coding 40; best fit: very fast, cheap single-GPU reasoning/agentic inference where absolute benchmark strength is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (benchlm.ai/models/gpt-oss-120b, artificialanalysis.ai/models/gpt-oss-120b, huggingface.co/openai/gpt-oss-120b, huggingface.co/poolside/Laguna-XS-2.1 comparison table, opencode.ai/zen/v1/models; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
