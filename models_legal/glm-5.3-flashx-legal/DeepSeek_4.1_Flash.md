# GLM-5.3-FlashX-Legal — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.3-FlashX-Legal (GLM-Legal)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (GLM-Legal)
- **Short description:** Z.ai's legal-domain variant of GLM-5.3-FlashX — the fast serving tier of GLM-5.3-Flash, a 320B/18B-active MoE — adding legal-domain mid-training and RL post-training across tens of thousands of realistic legal environments, co-trained with its agent harness. Top use case: high-volume supervised legal drafting — contract review, evidence analysis, compliance research.
- **Provider / access:** Z.ai (Zhipu AI) API; OpenRouter `z-ai/glm-5.3-flashx-legal`. Launched 2026-10-12 as an application-only beta for law firms / legal-tech teams; listed for open API purchase from 2026-11-02. OpenAI-compatible Chat Completions style. No OpenCode Zen route.
- **Release / knowledge:** announced 2026-10-12; tracked API listings from 2026-11-02; knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flashx-legal` (OpenRouter); no Free ID (paid only).
- **Context window:** 1,048,576 total; 131,072 max output (provider listings — not retrieval-verified).
- **Modalities:** text, image, video in; text out; reasoning; tool calls; JSON mode; streaming.
- **Pricing (as of 2026-11-12):** $0.37 in / $1.25 out per 1M; $0.075 cached input. Paid only (beta access at launch was application-based).
- **Architecture:** proprietary MoE derivative of GLM-5.3-Flash (320B total / 18B active per token, 1M context). Weight-release status unresolved at launch — Vals labels it open-weight, but no downloadable checkpoint was confirmed from the launch materials.

### Raw benchmarks found

Agent / tool use:

- Harvey LAB (Legal Agent Benchmark, all-pass, 24 practice areas): **19.2%** (vendor-reported) / **19.17%** (Vals AI independent — 7th of 79 models; criterion satisfaction ~92.5%; cheapest measured run in Vals' top ten at ~$0.15/task)
- Terminal-Bench 2.1: no verified public score found for this variant (base lineage GLM-5.3-Flash: 84.3% — lineage data, not measured on the legal variant)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- LegalBench: **~86.2%** (Vals AI — 14th of 150)
- PLawBench: **77.3** (vendor-reported; near Claude Fable 5's 77.7; no independent replication found)
- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: not yet measured by Artificial Analysis, LMArena, Epoch AI or LiveBench

Coding:

- SWE-bench Verified / LiveSWE / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Tracker composite (not a benchmark): 70/100, rank #121 of 444 in Coding (LMMarketCap)

Long context:

- no long-context retrieval reported for this variant; 1M-token window with 131K max output (Vals ran its evaluation at a 128K output limit)

### Normalized scores (1–100)

- **Tool use: 85/100.** Independently confirmed top-10 legal-agent work (Harvey LAB 19.17%, 7th of 79) from a model-harness co-training pipeline; the 19.2% all-pass rate and missing general agent benchmarks (no TB2.1/Tau3) cap it below frontier generalists.
- **Reasoning: 82/100.** Strong domain reasoning (LegalBench ~86.2%, 14/150; PLawBench 77.3), but the wide criteria-vs-all-pass gap (92.5% vs 19.2%) shows step-level reasoning still fails complete deliverables; no general reasoning indices published.
- **Context window: 95/100.** 1M-token input tier with 131K output per provider listings; no public retrieval-at-512K test to reach 100.
- **Multimodal: 85/100.** Native text, image and video input, text out; no audio input and no image generation.
- **Coding: 73/100.** Uncoded for this variant; inherits the GLM-5.3-Flash family's strong open coding base (TB2.1 84.3% lineage) but the fast-tier legal fine-tune leaves general coding unverified — the weakest evidence among the dims.
- **Cost efficiency: 95/100.** $0.37/$1.25 per 1M with $0.075 cached input is very cheap for a 1M-context multimodal model; Vals' measured $0.15 per Harvey task was the cheapest in its top ten.
- **Overall Score: 84/100.** (85 + 82 + 95 + 85 + 73) / 5 = 84.0 — the best-fit specialist for supervised, volume legal drafting where a lawyer reviews every output; not a substitute for a general-purpose flagship.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-12
- Method: public internet research (vendor announcement, independent evaluator Vals AI, launch coverage, pricing trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai — GLM-Legal: Advancing Agentic Legal Intelligence](https://z.ai/blog/glm-legal)
  - [Vals AI — GLM Legal model page](https://www.vals.ai/models/zai_glm-legal)
  - [alfw.ai — Z.ai's Legal Model Passes One Law-Firm Task in Five. That Ranks Seventh.](https://alfw.ai/article/zai-glm-legal-harvey-lab/)
  - [ContextOS — GLM-Legal: Domain Specialization Meets the All-Pass Test](https://contextosai.com/blog/zai-glm-legal-domain-specialization-evidence)
  - [LLM Stats — GLM-5.3-FlashX-Legal: Benchmarks, Pricing & Context Window](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [BenchLeader — GLM 5.3 FlashX Legal benchmarks](https://www.benchleader.com/models/glm-5-3-flashx-legal)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
