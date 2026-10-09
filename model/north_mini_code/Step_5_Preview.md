# North Mini Code — findings by Step 5 Preview

- Source: Cohere Labs (`CohereLabs/North-Mini-Code-1.0`, released 2026-06-09)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (Cohere Labs' first agentic coding model)
- **Short description:** Cohere's entry into the small-open-coding-model race — a 30B-total / **3B-active** sparse MoE (128 experts, 8 per token, sliding-window + global attention interleaved 3:1) trained with cascaded SFT then RLVR specifically for agentic coding, released under Apache 2.0 as "the inaugural member" of Cohere's sovereign-developer model line. It was trained against multiple harnesses (SWE-Agent, a ReAct terminal harness, Terminus-2) so performance generalizes across scaffolds, supports interleaved thinking, and Cohere claims up to 2.8× the output throughput of Devstral Small 2 with 30% lower inter-token latency. Artificial Analysis puts it at a **33.4 Coding Index** — a competitive position among similarly sized models, and Cohere markets the deployment story as much as the model: 1× H100 at FP8/FP4, 18–20 GB at W4A16.
- **Provider / access:** Hugging Face (bf16, fp8, w4a16 — Apache 2.0), Cohere API, Model Vault, OpenRouter (incl. `:free`); Transformers (source build), vLLM main, OpenCode compatibility.
- **Release:** 2026-06-09.
- **Context window:** 256K tokens (320K with vLLM config); max output 64K.
- **Modalities:** Text in → text out; tool use via JSON schemas; interleaved thinking.
- **Pricing (as of 2026-10-09):** weights free (Apache 2.0); hosted routes available (free tier on OpenRouter).
- **Architecture:** decoder-only MoE, 30B/3B active, 128 experts (8 active), SwiGLU, 1 dense layer + sparse layers, sigmoid router.

### Raw benchmarks found

Vendor (Cohere blog/model card; SWE-Agent v1.1.0 for SWE-Bench, ReAct terminal harness for TB v2, Terminus-2 for TB Hard, 3 seeds averaged):

- Artificial Analysis Coding Index: **33.4**
- SWE-bench Verified: **67.6%**; SWE-bench Pro: **40.2%**; Terminal-Bench 2.0: **36.0%** (scores as tabulated by Poolside using each model's highest publicly-referenced result)
- Throughput: up to 2.8× Devstral Small 2 at identical concurrency; 30% better inter-token latency (internal test); minimum 1× H100 (FP8) or 1× H100 (FP4); ~18–20 GB at W4A16

GPQA/HLE/AIME/LiveCodeBench v6/SciCode for North Mini Code: published in Cohere's evaluation figure but the per-benchmark values are image-only — **no verified public score found** in text form.

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.0 36.0% (vendor harness) is the only agentic-terminal number and it is low-mid; no τ³, MCP Atlas or GDPval figure exists.
- **Reasoning: 45/100.** No GPQA/HLE/AIME/math figure is publicly legible (image-only chart); it is a single-purpose coding model, so mid-low on evidence.
- **Context window: 70/100.** 256K is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/RULER/AA-LCR).
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 50/100.** SWE-V 67.6% and SWE-Pro 40.2% are decent for 3B active (beating gpt-oss-120b's 16.2 SWE-Pro and Haiku 4.5's 29.8 TB in Cohere's chart), but the AA Coding Index of 33.4 places it clearly mid-tier.
- **Cost efficiency: 97/100.** Apache-2.0 weights, 3B active, 1× H100 at FP8/FP4 or ~18–20 GB at W4A16, free hosted routes — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier with the best throughput-per-GPU story in its size class.
- **Overall Score: 44/100.** Best-fit recommendation: Cohere's sovereign-dev on-ramp — an Apache-2.0 30B/3B coding model that runs on a single GPU and connects to any harness; genuinely useful for local coding agents, obviously not a frontier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Cohere launch blog, Hugging Face model cards incl. fp8/w4a16 variants, Poolside Laguna XS comparison table citing highest public scores); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `North_Mini_Code_2.md`, using the same headings.
