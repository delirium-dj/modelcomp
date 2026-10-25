# Hy3 — findings by Muse Glimmer 30B

- Source: Tencent / Hy3
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hunyuan 3 open-source 295B MoE large language model for reasoning, agentic coding and long-context workflows. Successor to Hy3 Preview late April 2026 with scaled post-training and product feedback; rivals flagship open models 2-5× its size per vendor.
- **Provider / access:** Open weights on Hugging Face `tencent/Hy3`, ModelScope `Tencent-Hunyuan/Hy3`, GitCode, CNB. Self-host via vLLM / SGLang with OpenAI-compatible API; no official vendor SaaS endpoint.
- **Release / knowledge:** Weights open-sourced ~2026-07-06; Hy3 Preview late April 2026. Knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/Hy3`
- **Context window:** 256K tokens total. Verified by Hugging Face model card and Tencent GitHub README.
- **Modalities:** Input text; Output text. Reasoning yes with selectable `reasoning_effort` no_think/low/high, tool calls yes with Hy3-specific parsers. No public image/audio/video support.
- **Pricing (as of 2026-10-25):** Apache 2.0 open weights, no license fee. Self-host cost is infrastructure; Tencent recommends 8 H20-3e or equivalent large-memory GPUs. No vendor token pricing.
- **Architecture:** 295B total parameters MoE, 21B active per token, 3.8B MTP layer parameters, 192 experts top-8 activated, 80 layers +1 MTP, 64 attention heads GQA, hidden size 4096. Open weights Apache 2.0.

### Raw benchmarks found

> Sources: Hugging Face tencent/Hy3 model card evaluation results, Tencent-Hunyuan/Hy3 GitHub README 2026-07, The Rundown AI Hy-3 review 2026-08-29. Conflicting / unverified items noted.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** — Hugging Face eval results
- SWE-Bench Verified: **78** — Hugging Face eval results
- SWE-Bench Pro: **57.9** — Hugging Face eval results
- Skillsbench V1.1: **55.3** — Hugging Face eval results
- SWE-Bench Multilingual Resolved: **75.8** — Hugging Face eval results
- GDPval-AA / Tau3-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Vendor claim: SWE-Bench Verified accuracy variance across scaffolds CodeBuddy/Cline/KiloCode ≤4% — Tencent GitHub README, not independently verified

Reasoning / knowledge:

- GPQA Diamond: **90.4** — Hugging Face eval results
- HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this ID
- Vendor internal evaluation: hallucination rate 12.5% → 5.4%, commonsense error 25.4% → 12.7%, multi-turn issue rate 17.4% → 7.9% — Tencent GitHub README, internal test sets
- Blind expert evaluation: Hy3 2.67/4 vs GLM-5.1 2.51/4 on 270 expert work tasks — Tencent GitHub README

Coding:

- SWE-bench Verified: **78** — Hugging Face eval
- SWE-bench Pro: **57.9** — Hugging Face eval
- SWE-bench Multilingual: **75.8** — Hugging Face eval
- DeepSWE: **28** — Hugging Face eval
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found beyond Hugging Face evals
- Vendor note: productivity gains reported for coding, office, financial modeling, frontend, game dev — Tencent GitHub README

Long context:

- Context length 256K advertised; no public MRCR / RULER / GraphWalks score found. Vendor notes improved MRCR and multi-turn retention internally.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 71.7% and SWE-Bench Verified 78 show solid agentic tool use; Skillsbench 55.3 caps score. No independent Tau3/GDPval/Claw-Eval numbers.
- **Reasoning: 87/100.** GPQA Diamond 90.4% is frontier-level; vendor internal hallucination and commonsense improvements support reasoning gains. Capped by absence of public HLE/LCR/CritPt scores.
- **Context window: 70/100.** 256K tokens verified, placing it in the 200K-500K tier. No public long-context retrieval benchmark at advertised window.
- **Multimodal: 15/100.** Text-only model; no verified image/audio/video input/output.
- **Coding: 70/100.** SWE-Bench Verified 78 and Multilingual 75.8 indicate strong repo-level coding, but DeepSWE 28 and lack of LiveCodeBench/SciCode public scores limit confidence.
- **Cost efficiency: 90/100.** Apache 2.0 open weights with no license fee. High self-host GPU requirement offsets perfect score.
- **Overall Score: 62.8/100.** Mean of five quality dims (72+87+70+15+70)/5 = 62.8 → 63 rounded. Best-fit: capable open-weight reasoning/agent model with large MoE capacity, text-only, suitable for self-hosted coding/agentic workloads where infrastructure is available.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy3_Other.md`, using the same headings.

---
