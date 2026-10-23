# Leanstral 1.5 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Leanstral 1.5 (`labs-leanstral-1-5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's 119B-A6.5B open-weight Lean 4 proof-engineering agent for automated theorem proving and autoformalization — it edits files, runs shell commands, reads Lean compiler feedback and compacts its own context across long proof sessions.
- **Provider / access:** Mistral API (`labs-leanstral-1-5`, free public preview), Hugging Face weights, Apache 2.0.
- **Release / knowledge:** 2026-06-30; public preview, later marked deprecated on 2026-09-29 in Mistral docs.
- **IDs:** `labs-leanstral-1-5`, `mistral/labs-leanstral-1-5-1`; Apache 2.0.
- **Context window:** 262,144 tokens; 128K max output.
- **Modalities:** text/code in/out; tool calling and structured output; vision listed by one catalogue but not confirmed in Mistral's model card.
- **Pricing (as of 2026-10-23):** free API preview and free Apache-2.0 weights.
- **Architecture:** sparse MoE, 119B total / 6.5B active, 128 experts with 4 active.

### Raw benchmarks found

Agent / tool use:

- Proof-engineering loop (edit files, run Lean, read compiler/LSP feedback, compact context): vendor-described; no Tau2/BFCL score
- A pass@1/pass@8 pair improved from **21.9→28.9** and **31.9→43.2** on Mistral's theorem-proving evaluation (Mistral launch post)

Reasoning / knowledge:

- miniF2F: **100% (saturated)**; PutnamBench: **587/672** solved (~87.4%)
- FATE-H (master's-level abstract algebra): **87%**; FATE-X (PhD-level): **34%** — new open-model SOTA at release (Mistral)
- Surpasses Opus 4.6's 39.6 at one-seventh the cost on Mistral's comparison (vendor-reported)

Coding:

- Lean 4 proof engineering is the target workload; no general SWE-bench/LiveCodeBench row published.

Long context:

- 256K/262K vendor-stated; no MRCR/RULER score published.

Multimodal (VL) evidence:

- none confirmed — the model is a text/code Lean specialist

### Normalized scores (1–100)

- **Tool use: 62/100.** It autonomously edits files, runs Lean and reacts to compiler feedback, but no standard agent benchmark was published (Mistral).
- **Reasoning: 86/100.** miniF2F 100%, PutnamBench 587/672 and FATE-H 87% are elite formal-reasoning results, even though FATE-X is only 34% (Mistral).
- **Context window: 72/100.** 256K with self-compaction is strong for repository-scale proofs; no retrieval benchmark exists.
- **Multimodal: 15/100.** No confirmed image/audio/video input (template floor).
- **Coding: 74/100.** Outstanding within Lean 4, but there is no general-purpose software-engineering score to justify more.
- **Cost efficiency: 100/100.** Free preview API plus Apache-2.0 weights.
- **Overall Score: 62/100.** Mean of the five quality dims (62+86+72+15+74)/5 = 61.8 → 62. Best-fit: Lean/math formalization pipelines, not general chat or app coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Mistral model card and launch post, DVARA/modelcompare metadata, MLQ coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
