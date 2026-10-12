# Kimi K2.5 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's flagship open-weight agentic model (released 2026-01-27): a 1T-parameter MoE (32B active) with Agent Swarm orchestration (up to 100 parallel sub-agents, ~1,500 tool calls per task), native multimodal input, and best-in-class open-weight math/reasoning at launch. BenchLM ranks the base variant #88 of 889 (52.27; the Reasoning sibling scores 56.39). Now three generations behind K3.
- **Provider / access:** Moonshot API `kimi-k2.5`; OpenRouter `moonshotai/kimi-k2.5` (OpenAI-compatible); 13–15 third-party providers (DeepInfra ~$0.90 blended cheapest); OpenCode Zen `opencode/kimi-k2.5`. Chat Completions style; Agent Swarm needs specific API integration (not plug-and-play).
- **Release / knowledge:** Released 2026-01-27 (verified via serenitiesai.com and llm-stats); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.5` (Zen, no Free ID); `moonshotai/kimi-k2.5` (OpenRouter).
- **Context window:** 262,144 tokens total (BenchLM lists 256K), 65,536 max output (Zen/meta-verified); scored on the 262K documented window.
- **Modalities:** Text/image/video in → text out (MoonViT-3D 400M vision encoder); reasoning yes (thinking and non-thinking modes; BenchLM classifies the base variant as non-reasoning); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-11):** $0.60 in / $3.00 out per 1M (K2.5 Reasoning; standard K2 rate $0.60/$2.50); 75% cache discount; Zen $0.60/$3.00, cached input $0.08. Paid only (`noFreeId: true`).
- **Architecture:** Open weights, Modified MIT (commercial use permitted); MoE — 1.04T total, 32B active; ~15T mixed visual+text training tokens; trained with Parallel-Agent Reinforcement Learning (PARL) for the Agent Swarm orchestrator.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.9%** (AA, independent — elite)
- τ³-bench: **65.7%**; BFCL v4: **68.3%**; OSWorld-Verified: **63.3%** (K2.6 model card row); Claw-Eval: **52.3%**; MCP-Tasks: **59.1%**; WideResearch: **72.7%**; QwenClawBench: **54.3%** (Qwen tables — fill gaps)
- GDPval-AA: **936** (AA, independent — normalized **17.2%**, weak); APEX-Agents-AA: **11.5%**; JobBench: **8.7%**; ResearchClawBench: **14.0%**; DeepPlanning: **14.4%** (weak)
- Toolathlon: **27.8%**; MCP Atlas: **29.5%** (Moonshot model card via benchlm.ai — much weaker than the swarm-marketing framing)
- Terminal-Bench 2.0: **50.8%** (model card — corroborated); BrowseComp: **60.6%** standard / **78.4%** with Agent Swarm
- Gert Labs: **45.88%**

Reasoning / knowledge:

- HLE: **30.1%** (Moonshot K2.5 model card via benchlm.ai, 2026-10-10) — **conflicts with the "50.2%" third-party claim the 2026-10-08 pass scored on**; AA-HLE: **30.7%** corroborates the vendor card. The 50.2% figure appears to belong to the K2.5 Reasoning variant or an erroneous comparative — the base-variant rows stand.
- GPQA Diamond: **87.6%** (model card — corroborated); AA: **87.9%**
- Artificial Analysis Intelligence Index: **23.5** (AA — fills the index gap; low)
- AA-LCR v1.1: **78.0%** (AA — fills the long-context gap, decent); LongBench v2: **61%** (model card); CritPt: **3.1%** (AA — near-zero)
- AIME 2025: **96.1%** / AIME26: **95.8%**; HMMT Feb 2025: **95.4%** / Feb 2026: **87.1%**; FrontierMath v2: **27.9%** T1-3 / **4.2%** T4 (Epoch — weak)
- MMLU-Pro: **87.1%** (two sources); MMLU-Redux: **94.5%**; C-Eval: **94%**; SuperGPQA: **69.2%**
- AA-Omniscience: **35.2% accuracy / 65.7% non-hallucination row / −7.3 index** (AA — weak)

Coding:

- SWE-bench Verified: **76.8%** (model card) — **Arcee comparison table lists 70.8%*** (conflict, harness variance; both listed)
- SWE-bench Pro: **50.7%** (model card — fills the gap; weak); SWE Multilingual: **73.0%**; SWE-Rebench: **58.5%**; NL2Repo: **32%**; React Native Evals: **77.2%**
- LiveCodeBench v6: **85.0%** (model card; apiyi cited 83.1% — consistent); AA Coding Index: **46.8%** (AA — weak)
- SciCode: **48.7%** (model card — fills the SciCode gap)

Long context:

- AA-LCR 78.0% and LongBench v2 61% are the first measured long-context numbers (mid); 262K window documented

Multimodal (richly corroborated):

- VideoMMMU: **86.6%**; Video-MME: **87.4%** with subs / **83.2%** without; MMVU: **80.4%**; MLVU: **85.0%**; OmniDocBench 1.5: **88.8%**; MMMU: **84.3%**; MMMU-Pro: **78.5%** (model card) / **75.4%** (AA); CharXiv: **77.5%**; MathVision: **84.2%**; AI2D: **90.8%**; CC-OCR: **79.7%**; RealWorldQA: **81.0%**; RefCOCO: **87.8%**

### Normalized scores (1–100)

- **Tool use: 68/100.** (Was 76 on the prior pass.) τ²-bench 95.9% (AA) is elite and the Swarm rows stand, but the base-model tool profile is much weaker than the marketing framing: GDPval 936 (17.2% normalized), Toolathlon 27.8%, MCP Atlas 29.5%, APEX 11.5%, JobBench 8.7% — the correction the prior single-source picture missed.
- **Reasoning: 76/100.** (Was 84 on the prior pass.) The HLE conflict resolves down: the vendor's own card and AA agree at ~30% (the 50.2% third-party claim does not hold for the base variant), with AA Index 23.5, CritPt 3.1% and FrontierMath T4 4.2% — GPQA 87.6–87.9% and the AIME/HMMT sweep stay strong but the composite is mid-band.
- **Context window: 78/100.** Documented 262K tokens (BenchLM: 256K); AA-LCR 78.0% and LongBench v2 61% provide first measured evidence (mid) — unchanged.
- **Multimodal: 88/100.** The rich vision suite is corroborated across independent tables (VideoMMMU 86.6, OmniDocBench 88.8, MMMU-Pro 78.5/75.4) — top of the 75–90 band; text-only output.
- **Coding: 80/100.** (Was 85 on the prior pass.) SWE-bench Verified carries a conflict (76.8 vendor vs 70.8 Arcee), SWE Pro 50.7%, AA Coding Index 46.8% and NL2Repo 32% document the age; LiveCodeBench 85.0% and SWE-ML 73% hold the mid-frontier story.
- **Cost efficiency: 88/100.** $0.60/$3.00 per MTok — just under the ~$0.60/$2.20 ≈ 92 reference because of the output rate; the 75% cache discount and sub-$1 blended third-party rates help, but AA-flagged verbosity (89M eval tokens) inflates real cost per task.
- **Overall Score: 78.0/100.** (Was 82.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (68 + 76 + 78 + 88 + 80) / 5 = 390/5 = 78.0 — lowered materially on the 2026-10-11 second pass: the HLE conflict resolves against the prior claim and the base-model tool/coding boards document the Jan-2026 age. Best fit: low-cost open-weight multimodal work (video/doc understanding, Agent Swarm parallelism where orchestrated) — the K2.5 Reasoning variant or K3 for anything frontier.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Moonshot K2.5 model card + Qwen/Arcee comparison tables, Artificial Analysis model benchmarks, Epoch AI + AA rows via benchlm.ai, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
