# GPT-5.6 Terra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (balanced mid-tier of the GPT-5.6 series — between flagship Sol and small Luna; tier names are durable capability tiers that advance on their own cadence)
- **Short description:** OpenAI's July 2026 production workhorse: GPT-5.5-level quality at roughly half the cost, 1.05M-token context and Terminal-Bench 2.1 87.4% — aimed at high-volume support, document analysis and back-office automation. Price cut 20% on 2026-07-30. The 2026-10-11 second pass resolves the reasoning ambiguity: GPQA 92.9% at the launch-table setting (the prior 84.3% was AA's low-effort reading), ARC-AGI-2 83.9% (ARC Prize verified) and FrontierMath Tier 4 68.3%.
- **Provider / access:** OpenAI API ID `gpt-5.6-terra`; available across the API, Codex and ChatGPT. Responses API (OpenAI's own surface).
- **Release / knowledge:** limited preview 2026-06-26, public release 2026-07-09 (with GPT-5.6 Sol and Luna). Knowledge cutoff **2026-02-16** — the freshest measured in this repo.
- **IDs:** `gpt-5.6-terra` (OpenAI). **No free tier** — API-only, paid.
- **Context window:** 1,050,000-token input (BenchLM concurs: 1.05M), 128,000-token max output (ai-tldr spec block).
- **Modalities:** text + image in, text out (ai-tldr spec block; the repo catalog lists audio/video/PDF as well — unverified, treat cautiously). Reasoning-model architecture with the GPT-5.6 safety stack.
- **Pricing (as of 2026-10-11):** $2.00 in / $12.00 out per 1M after the 2026-07-30 20% cut (was $2.50/$15.00 at launch); OpenAI attributes the cut to efficiency gains from using GPT-5.6 to rewrite its own production stack.
- **Architecture:** proprietary, parameters undisclosed; reasoning model; one of three GPT-5.6 tiers (Sol/Terra/Luna, all 1.05M context).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 launch table via benchlm.ai, updated 2026-10-10 — up from the 84.3% the 2026-10-05 pass cited); Vals independent: **77.5%**
- τ²-bench: **86.3%** (AA, independent); AA ITBench-AA: **51.0%**; AA Agentic Index: **43.7%** (AA)
- GDPval-AA: **1583** (OpenAI launch table); AA-normalized: **47.7%** (AA)
- BrowseComp: **87.5%**; OSWorld 2.0: **50.2%**; CyberGym: **81.8%**; ExploitGym: **23.2%**; Toolathlon: **53.1%** (OpenAI)
- APEX-Agents-AA: **38.9%** (AA); ApprenticeBench (GUI): **16%** (NeoCognition — weak); Terminal-Bench 3.0: **20.8%** (frontierbench.ai — weak on the newer board)
- MazeBench ASCII: **6%** (added 2026-10-16); AA-IFBench: **71.2%** (added 2026-10-16)
- AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI GPT-5.6 launch table via benchlm.ai); AA independent: **92.5%**; Vals: **90.9%** — resolves the effort-setting ambiguity: the 2026-10-05 pass scored AA's low-effort 84.3%, but the launch-table setting reads 92.9 across three sources
- HLE-Verified: **51.1%** (competitor cross-table — Gemini 3.8 Flash model card via benchlm.ai); AA-HLE: **42.9%** (AA)
- ARC-AGI-2: **83.9%** (ARC Prize verified, arcprize.org/results/openai-gpt-5-6); ARC-AGI-1: **96.5%** (Terra Max verified); ARC-AGI-3: **0.8%**
- FrontierMath v2: **84.9%** Tiers 1–3 / **68.3%** Tier 4 (OpenAI; legacy FrontierMath 84.9%)
- Artificial Analysis Intelligence Index: **55.0** (OpenAI launch table via benchlm.ai — fills the "no verified Index" gap)
- AA-LCR v1.1: **83.0%** (AA — fills the long-context gap); CritPt: **30.0%** (AA)
- AA-Omniscience: **46.8% accuracy / 87.9% non-hallucination row / 0.1 index** (AA — the near-zero index reflects heavy hedging/refusals, not knowledge failure)
- MMLU-Pro: **86.7%** (Vals); HealthBench Professional: **57.7%**; HealthBench Hard: **32.7%** (system card); LABBench2: **81.2%** (competitor-cited)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch table — fills the gap); SWE-bench (Vals): **95.4%** (Vals, independent)
- DeepSWE: **69.6%** (OpenAI); LiveCodeBench (Vals): **85.9%** (fills the LiveCodeBench gap)
- FrontierCode 1.1 Extended: **55.8%** (Cognition/Devin); CursorBench 3.2: **64.9%**; CursorBench 4.0: **41.3%**
- AA Coding Index: **76.7%** (AA); AA-SciCode: **55.0%** (AA); VulcanBench v3: **87.0%**
- SWE-bench Verified: no verified public score found for Terra specifically

Long context:

- Window: **1,050,000 tokens** in / 128K out
- AA-LCR v1.1: **83.0%** (AA — first measured long-context number, strong)
- MRCR/RULER: no verified public score found

Multimodal:

- MMMU-Pro: **80.7%** / **82.0%** with Python (OpenAI); AA-MMMU-Pro: **80.7%** (AA) — measured vision backs the image-input claim

### Normalized scores (1–100)

- **Tool use: 91/100.** (Was 93 on the prior pass.) TB2.1 87.4% (vendor; 77.5% Vals) and τ²-bench 86.3% hold a strong agentic story, but the newly surfaced weak rows (Toolathlon 53.1%, ApprenticeBench 16%, GDPval 1583/47.7% normalized, TB3.0 20.8%) put the mid-tier in its place — one band below the evidence the prior single-benchmark score implied.
- **Reasoning: 88/100.** (Was 85 on the prior pass.) GPQA resolves to 92.9% (three independent sources agree at the launch-table setting, vs the low-effort 84.3% previously scored), ARC-AGI-2 83.9% is verified and FrontierMath T4 68.3% is strong; AA-HLE 42.9% and the 0.1 Omniscience index keep it a band below flagship Sol (90).
- **Context window: 100/100.** 1.05M input — the largest measured in this repo — with 128K output; AA-LCR 83.0% now provides strong measured long-context evidence.
- **Multimodal: 82/100.** Text + image in with measured MMMU-Pro 80.7/82.0; audio/video/PDF claims remain unverified; text-only output.
- **Coding: 88/100.** Vals SWE-bench 95.4%, LiveCodeBench 85.9% and TB2.1 87.4% are strong, but SWE-bench Pro 63.4% and DeepSWE 69.6% sit below the frontier band — the score holds.
- **Cost efficiency: 55/100.** No free tier and $2.00/$12.00 list — an order of magnitude above open-weights tiers; the 20% cut and GPT-5.5-class quality keep it mid-tier.
- **Overall Score: 89.8/100.** (Was 89.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (91 + 88 + 100 + 82 + 88) / 5 = 449/5 = 89.8 — effectively unchanged on the 2026-10-11 second pass: the reasoning raise (85→88) and tool-use correction (93→91) net out. Best fit: the OpenAI-locked production workhorse — excellent agents, 1.05M context and now fully measured reasoning; per-dollar it still loses to Gemini 3.7/3.8 Flash and the free open tiers.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing OpenAI's GPT-5.6 launch table + system card, ARC Prize verified results, Vals AI / AA / Cursor / Cognition / NeoCognition leaderboards via benchlm.ai, plus the prior 2026-09-18/10-05 passes; 2026-10-16 re-check: BenchLM 54-row refresh corroborates all rows (MazeBench 6%, AA-IFBench 71.2% added) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
