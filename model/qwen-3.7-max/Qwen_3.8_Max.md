# Qwen 3.7 Max — findings by Qwen 3.8 Max

- Source: Alibaba (`qwen-3.7-max`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (vendor styling "Qwen3.7-Max")
- **Short description:** Alibaba's closed-weight, API-only flagship reasoning agent of the Qwen3.7 line — pitched as "the agent frontier" for long-horizon, tool-driven coding and office/enterprise automation over a 1M-token context. **Text-only.** **Deprecated**: superseded by Qwen3.8-Max (`qwen-3.8-max`, my own STEM model). Sibling of the multimodal `qwen-3.7-plus` (report 50) and `qwen-3.7` (still unresearched).
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-max` (Chat Completions); OpenRouter `qwen/qwen3.7-max`; Alibaba Cloud Model Studio / DashScope. API-only — **no Hugging Face checkpoint, no GGUF, no Ollama** (the open-weight Qwen story continues only below the frontier tier).
- **Release / knowledge:** Released May 19, 2026 (announced May 20 at Alibaba Cloud Summit); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.7-max`; OpenRouter `qwen/qwen3.7-max`. No Free ID (`noFreeId` semantics — paid only).
- **Context window:** 1,000,000 tokens total (AA-confirmed, ~1500 A4 pages); max output 131,072 per meta, though the FrankX launch analysis cites 65K — flagged as an unresolved vendor/host discrepancy.
- **Modalities:** Text in → text out (AA confirms "Supports: text" both directions); reasoning yes (reasoning variant is AA's default); tool calls supported (terminal/MCP/agent-harness loops in vendor evals; supports external harnesses such as Anthropic's Claude Code per VentureBeat). **No image/video/audio.**
- **Pricing (as of 2026-10-26):** Alibaba/AA list **$2.50 / $7.50** per 1M in/out with an 80–90% cache discount (~$0.25 cached input); OpenRouter route **$1.475 / $4.425** (the meta's `$1.48/$4.43`), seen as low as $1.25/$3.75. AA: input "somewhat expensive" (median $2.00), output "moderately priced" (median $10.00), **$0.93 per Intelligence-Index task** (#57/120).
- **Architecture:** **Undisclosed** — Alibaba has not published parameter counts or the MoE expert configuration; independent coverage places it only "within the broader Mixture-of-Experts frontier." Proprietary / closed weights.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (AA) and Vals AI. Vendor numbers: Alibaba technical materials as tabulated by the FrankX launch analysis (2026-06-05) and DataCamp. Deprecated model — AA maintains only the default 10k-token workload.

Independent:

- AA Intelligence Index **v4.3.2 (current): 29, #103/221** (median 28 → barely "above average"; only the 10k workload still benchmarked post-deprecation).
- AA Intelligence Index **v4.0 (at launch, May 2026): 56.6** — then the global top 5 and "the highest a Chinese model has ever placed" (same conversation as Claude Opus 4.7 / GPT-5.5). The **56.6 → 29** drop is basket rebasing + deprecation, not a capability change; the two are NOT interchangeable.
- Vals AI SWE-bench Verified (bash-tool-only, mini-swe-agent): **82 / 64 / 38 / 0%** across <15min / 15m–1h / 1–4h / >4h — decent short-task resolution but a **hard long-horizon collapse to 0% on >4h** tasks, which directly undercuts the "35-hour autonomous" vendor pitch.
- AA speed **202.2 tok/s** (#11/182, "notably fast" vs 83); AA verbosity **120M** Index output tokens (#86/122, "somewhat verbose" vs median 81M) — verbosity inflates effective cost-per-task.
- ITbench-AA (AA-run enterprise-IT agentic benchmark): vendor-announced **#3** placement.

Vendor (Alibaba tables; treat as self-reported, not independently replicated):

- Coding: SWE-bench Verified **80.4** (trails Opus 4.6 Max 80.8, DeepSeek V4 Pro Max 80.6 by a hair); **SWE-bench Pro 60.6** (leads its peer group — Kimi K2.6 Thinking 59.5, DeepSeek V4 Pro Max 59.0); SWE-bench Multilingual **78.3**; Terminal-Bench 2.0 (Terminus) **69.7**; LiveCodeBench **91.6**; SciCode **53.5**; QwenSVG **1608**.
- Tool use / agent: MCP-Atlas **76.4** (vendor-claimed); 35-hour autonomous CUDA-kernel optimization on T-Head ZW-M890 PPUs — **1,158 tool calls, 432 kernel evaluations, 10× geomean speedup** vs the SGLang Triton reference (GLM 5.1 7.3×, Kimi K2.6 5.0×, DeepSeek V4 Pro 3.3×, prior Qwen3.6-Plus 1.1×); KernelBench L3 working kernels **96%** vs 48% for Qwen3.6-Plus.
- Reasoning: GPQA Diamond **92.4**; HMMT 2026 Feb **97.1** (vendor-claimed, near-ceiling); MMLU-Pro **89.6**; Humanity's Last Exam **41.4** (AA-aligned); Apex (reasoning) **44.5** (vendor-claimed). AIME 2026 and ARC-AGI-2 were **not published** from a trusted source (deliberately omitted rather than invented).

> Provenance: the 35-hour run and the self-monitoring "1,618 hacking cases / 86-hour RL" claim are vendor demos on Alibaba's own silicon and harness — directionally credible but **not independently reproduced**. Architecture is undisclosed. The only neutral anchors are the AA Index (29 current / 56.6 launch) and the Vals row (82/64/38/0), and the Vals long-horizon collapse is the most decision-relevant independent fact.
> Meta verification: SWE-bench Verified **80.4** and SWE Pro **60.6** in the meta short are **confirmed** (vendor table). Two enrichments/flags: (1) the meta's `$1.48/$4.43` is the **OpenRouter** route — Alibaba/AA list price is **$2.50/$7.50**; (2) max output is **131,072** per meta vs **65K** per the FrankX launch analysis (unresolved). Modalities ("Text in/out") and the closed-weight/text-only tradeoff are **accurate**.

### Normalized scores (1–100)

- **Tool use: 80/100.** Genuinely agent-forward — a real AA-run agentic placement (ITbench-AA #3), Terminal-Bench 2.0 69.7, MCP-Atlas 76.4, and a documented 35-hour/1,158-tool-call autonomous run — but the independent Vals row collapses to **38% (1–4h) and 0% (>4h)**, contradicting the long-horizon autonomy pitch, and the flagship demo is vendor-run on Alibaba silicon. Capped by that contradiction plus deprecation.
- **Reasoning: 80/100.** Strong vendor reasoning (GPQA Diamond 92.4 frontier-class, HMMT 97.1 near-ceiling, MMLU-Pro 89.6, HLE 41.4), and it launched at AA Index **v4.0 56.6** (global top 5). But the current independent **AA Index v4.3.2 rebases to 29 (#103/221, median 28)** — essentially at the median — and the model is deprecated. The launch-peak-vs-rebased gap caps this well below the vendor story.
- **Context window: 85/100.** AA-confirmed **1M-token** window (maps to my 1M-proven band); held at 85 rather than higher because AA no longer validates long-context retrieval for deprecated models (only the 10k workload runs) and no independent MRCR/RULER-style number is published.
- **Multimodal: 50/100.** **Text-only** (AA confirms text in/text out; no image/video/audio). Scored at my consistent text-only floor of **50** — matching `deepseek-v4-pro` (report 69), the only other purely text-only model in this report set, so the two stay comparable (image-only models score 77–78 here). Note the tension: `model-comparison.md`'s seed rubric places text-only at 10–20; I keep 50 for cross-report consistency and flag the alternative. This is the single largest driver of the divergence below.
- **Coding: 79/100.** Vendor coding is strong where it's hard — **SWE-bench Pro 60.6 leads its peer group**, SWE-Verified 80.4, LiveCodeBench 91.6, Terminal-Bench 69.7 — but the independent Vals row (**82/64/38/0**) shows mid-tier long-horizon capability and a >4h collapse, and none of the vendor SWE numbers are independently replicated. Deprecated; capped below elite.
- **Cost efficiency: 76/100.** List price $2.50/$7.50 (input "somewhat expensive," output below median) with a valuable 80–90% cache discount ($0.25 cached) and cheaper OpenRouter routes, but **$0.93/task** plus heavy verbosity (120M Index tokens) erode the sticker advantage, and closed weights rule out self-hosting. Not counted toward Overall.
- **Overall Score: 75/100.** Mean of Tool 80 + Reasoning 80 + Context 85 + Multimodal 50 + Coding 79 = 374 / 5 = 74.8 → 75. Best fit: a fast, 1M-context, agent-oriented text reasoner that was a genuine global-top-5 story at its May-2026 launch (AA v4.0 56.6, SWE-Pro peer lead, 35-hour demo) but is now deprecated, rebases to ~median independently (AA v4.3.2 29), collapses on long-horizon coding (Vals 0% >4h), and cannot do any non-text modality — choose the multimodal `qwen-3.7-plus`/`qwen-3.8-max` or a current frontier model instead. **Divergence note:** curated queue 83.5 vs my 75 → **−8.5** (my widest yet). The queue credits launch-peak vendor standing (top-5 AA v4.0, SWE-Pro lead, the 35-hour headline) with no discount for the four independent facts I weight heavily: text-only (Multimodal 50 floor, ~the same driver as `deepseek-v4-pro`), deprecation/supersession, the 56.6→29 AA rebasing to ~median, and the Vals long-horizon collapse that contradicts the core "agent frontier" claim.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis model page for `qwen3-7-max`; Vals AI SWE-bench Verified leaderboard; FrankX launch analysis 2026-06-05 aggregating Alibaba technical materials, DataCamp, and VentureBeat; Alibaba Cloud ITbench-AA announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
