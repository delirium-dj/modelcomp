# Qwen3-Max — findings by Step 5 Preview

- Source: Alibaba Qwen (`qwen3-max`, snapshot `qwen3-max-2026-01-23`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max (Alibaba's first trillion-parameter model — and the flagship that stayed closed)
- **Short description:** The model that broke Qwen's open-weights pattern: announced at the Apsara Conference on 2025-09-24 (preview Sep 5), trained on ~36T tokens, over 1T MoE parameters — and proprietary, API-only through Alibaba Cloud Model Studio, a deliberate repositioning that set the shape of the lineup (Max proprietary, numbers open). It shipped in two variants: the fast non-thinking **Qwen3-Max-Instruct** (vendor SWE-bench Verified 69.6%, Tau2-bench 74.8%) and the tool-augmented **Qwen3-Max-Thinking**, with the 2026-01-23 snapshot fusing both into hybrid thinking + non-thinking modes with web search, web extraction and a code interpreter. It hit LMArena's global top three at preview. By 2026 it is a deprecated legacy tier — Alibaba's retirement notice (id=1950) shuts it down **2026-10-10** with Qwen3.7-Max as replacement.
- **Provider / access:** Alibaba Cloud Model Studio, Qwen Chat, OpenRouter (Alibaba, DeepInfra, Novita, Cloudflare…); no weights.
- **Release:** 2025-09-05 (preview) / 2025-09-23 (production) / 2026-01-23 (hybrid snapshot); retiring 2026-10-10.
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** Text in → text out (vision lives in the separate Qwen3-VL line).
- **Pricing (last list price):** tiered by input length — $1.20/$6.00 (0–32K), $2.40/$12.00 (32K–128K), $3.00/$15.00 (128K–256K); global deployment $0.78/$3.90; batch 50% off; knowledge cutoff Jun 2025.
- **Speed:** ~32.8 tok/s; TTFT ~1.83 s.

### Raw benchmarks found

Vendor (launch):

- SWE-bench Verified (Instruct): **69.6%**
- Tau2-bench (Instruct, agentic tool-calling): **74.8%**
- LMArena text leaderboard: global top three at preview

Independent (ComputePrices, measured Oct 2026):

- MMLU-Pro: **84.1%**; GPQA Diamond: **76.4%**; HLE: **11.9%**; AIME 2025: **80.7%**
- LiveCodeBench: **76.7%**; Terminal-Bench Hard: **20.5%**
- τ²-bench: **74.3%**; IFBench: **44.1%**; Long-Context Reasoning: **50.0%**

Other trackers:

- Artificial Analysis Intelligence Index: 21.3 (thinking) / 15.6 (default mode)
- LMArena: text 1,420–1,423 Elo; coding 1,473 Elo
- SuperGPQA: 65.1% (llmboard); AIME 2025 (AA run): 82.33%

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 74.3–74.8% is a solid mid-band tool-calling result and the Thinking mode's code-interpreter/web-search tooling was first-class for its era; Terminal-Bench Hard 20.5% and no MCP-Atlas/GDPval figure cap it.
- **Reasoning: 60/100.** MMLU-Pro 84.1%, GPQA 76.4%, AIME 80.7% and LCB 76.7% are mid-band by 2026 standards; HLE 11.9% and the AA Intelligence Index of 21.3/15.6 mark a 2025-generation model clearly behind the frontier.
- **Context window: 68/100.** 262K is the 200K–500K band (65–84) with Long-Context Reasoning at 50.0% — a large window with mid-tier retrieval quality.
- **Multimodal: 12/100.** Text-only (text in → text out) — the methodology's text-only band (10–20).
- **Coding: 58/100.** SWE-bench Verified 69.6% (vendor) and LiveCodeBench 76.7% are respectable; Terminal-Bench Hard 20.5% shows the agentic-coding gap that drove users to the thinking hybrid — and, later, to Qwen3.7-Max.
- **Cost efficiency: 85/100.** $0.78–$1.20 input / $3.90–$6.00 output (tiered, rising to $3/$15 at the top input band) maps to the methodology's ~$1.25/$4.25 ≈ 88 range, with 50%-off batch — undercutting Western flagships several-fold while remaining a 2025 price point.
- **Overall Score: 52/100.** Best-fit recommendation: the historical trillion-parameter flagship that proved Qwen could close the gap to the frontier — and the closed-weights experiment that ended in retirement 2026-10-10; superseded twice over (Qwen3.7-Max, Qwen3.8-Max) and only relevant for migration.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (QwenCloud model pages, AI/TLDR, AI Model Watch retirement notice analysis, ComputePrices independent evals, llmboard/ModelCap trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen4_Max.md`, using the same headings.
